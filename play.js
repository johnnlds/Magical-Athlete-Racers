
"use strict";

const $ = (selector) => document.querySelector(selector);

const COLORS = ["pink", "yellow", "green", "blue", "red"];
const PIECE_COLORS = [
  "player-0", "player-1", "player-2", "player-3",
  "player-4", "player-5", "player-6", "player-7"
];

const state = {
  racers: [],
  players: [],
  current: 0,
  selected: null,
  rolled: null,
  finished: [],
  history: [],
  snapshots: [],
  started: false,
  draggingPlayer: null,
  dragMoved: false,
  suppressNextClick: false
};

let dragStartX = 0;
let dragStartY = 0;
let draggedPiece = null;

function racerName(racer) {
  return racer.name || racer.title || racer.athlete || "Unknown racer";
}

function racerImage(racer) {
  return racer.image || racer.img || racer.imageUrl ||
    racer.imagePath || "";
}

function racerPower(racer) {
  return racer.power || racer.abilityName || racer.powerName || "";
}

function racerAbility(racer) {
  return racer.ability || racer.description ||
    racer.powerText || racer.abilityText || "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function imageMarkup(racer, className = "") {
  const src = racerImage(racer);
  if (!src) return "";

  return `<img class="${className}" src="${escapeHtml(src)}"
    alt="${escapeHtml(racerName(racer))}"
    onerror="this.style.display='none'">`;
}

// --------------------------------------------------
// Load racers from the existing reference-site file.
// --------------------------------------------------

async function loadRacers() {
  const message = $("#setupMessage");
  message.textContent = "Loading racers…";

  try {
    const response = await fetch("./script.js", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Could not load script.js (${response.status}).`);
    }

    const source = await response.text();
    const start = source.indexOf("const athletes =");
    const end = source.indexOf("const allAthletes =");

    if (start < 0 || end < 0 || end <= start) {
      throw new Error("Could not find the racer arrays in script.js.");
    }

    const dataSource = source.slice(start, end);

    const data = new Function(`
      ${dataSource}
      return {
        athletes,
        expansionAthletes:
          typeof expansionAthletes !== "undefined"
            ? expansionAthletes : [],
        extraMileAthletes:
          typeof extraMileAthletes !== "undefined"
            ? extraMileAthletes : []
      };
    `)();

    state.racers = [
      ...(data.athletes || []),
      ...(data.expansionAthletes || []),
      ...(data.extraMileAthletes || [])
    ];

    if (!state.racers.length) {
      throw new Error("No racers were found.");
    }

    renderRacerChoices();
    message.textContent = `${state.racers.length} racers loaded.`;
  } catch (error) {
    console.error(error);
    message.textContent = `Could not load racers: ${error.message}`;
  }
}

// --------------------------------------------------
// Setup
// --------------------------------------------------

function renderRacerChoices() {
  const count = Number($("#playerCount").value);
  const container = $("#racerChoices");
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const options = state.racers.map((racer, index) =>
      `<option value="${index}">${escapeHtml(racerName(racer))}</option>`
    ).join("");

    const card = document.createElement("div");
    card.className = "racer-choice";
    card.innerHTML = `
      <div>${i + 1}.</div>
      <div style="flex:1;min-width:0">
        <label for="racer${i}">Racer ${i + 1}</label>
        <select id="racer${i}" class="racer-select">${options}</select>
      </div>
    `;

    container.appendChild(card);
  }
}

function startRace() {
  const count = Number($("#playerCount").value);
  const chosen = [];

  for (let i = 0; i < count; i++) {
    const index = Number($(`#racer${i}`).value);

    if (chosen.includes(index)) {
      $("#setupMessage").textContent =
        "Choose a different racer for each player.";
      return;
    }

    chosen.push(index);
  }

  state.players = chosen.map((racerIndex, index) => ({
    id: index,
    racer: state.racers[racerIndex],
    name: racerName(state.racers[racerIndex]),
    position: 0,
    finished: false,
    place: null
  }));

  state.current = 0;
  state.selected = 0;
  state.rolled = null;
  state.finished = [];
  state.history = [];
  state.snapshots = [];
  state.started = true;

  $("#dieFace").textContent = "—";
  $("#rollDie").disabled = false;
  $("#undoMove").disabled = true;
  $("#setupMessage").textContent = "";
  $("#turnMessage").textContent =
    "Roll the die whenever you want. Select or drag any racer to move it.";

  render();
}

// --------------------------------------------------
// Board layout
// --------------------------------------------------

function colorForSpace(number) {
  return COLORS[(number - 1) % COLORS.length];
}

function trackCoordinates(number) {
  if (number >= 1 && number <= 12) {
    return { col: number + 3, row: 1 };
  }

  if (number === 13) return { col: 15, row: 2 };
  if (number === 14) return { col: 15, row: 3 };
  if (number === 15) return { col: 15, row: 4 };

  if (number >= 16 && number <= 29) {
    return { col: 30 - number, row: 4 };
  }

  return null;
}

function positionLabel(player) {
  if (player.finished) {
    if (player.place === 1) return "1st place";
    if (player.place === 2) return "2nd place";
    return `Place ${player.place}`;
  }

  return player.position === 0
    ? "START"
    : `Space ${player.position}`;
}

function piecesAt(position) {
  return state.players.filter(player =>
    !player.finished && player.position === position
  );
}

function pieceMarkup(player) {
  const selected = state.selected === player.id;
  const colorClass = PIECE_COLORS[player.id % PIECE_COLORS.length];

  return `
    <button
      type="button"
      class="piece ${colorClass} ${selected ? "is-selected" : ""}"
      data-player="${player.id}"
      title="${escapeHtml(player.name)} — ${escapeHtml(positionLabel(player))}"
      aria-label="Select ${escapeHtml(player.name)}"
      aria-pressed="${selected}"
    >${player.id + 1}</button>
  `;
}

function renderSpace(number) {
  const coord = trackCoordinates(number);
  const element = document.createElement("div");

  element.className =
    `space ${colorForSpace(number)}` +
    ([12, 15].includes(number) ? " corner" : "");

  element.style.gridColumn = String(coord.col);
  element.style.gridRow = String(coord.row);
  element.dataset.space = String(number);
  element.setAttribute("role", "button");
  element.setAttribute("tabindex", "0");
  element.setAttribute("aria-label", `Space ${number}`);

  element.innerHTML = `
    ${number % 5 === 0
      ? `<span class="space-number">${number}</span>`
      : ""}
    <span class="pieces">${piecesAt(number).map(pieceMarkup).join("")}</span>
  `;

  return element;
}

function renderStartSpace() {
  const element = document.createElement("div");
  element.className = "start-space";
  element.style.gridColumn = "3";
  element.style.gridRow = "1";
  element.dataset.start = "true";
  element.setAttribute("role", "button");
  element.setAttribute("tabindex", "0");
  element.setAttribute("aria-label", "START");

  element.innerHTML = `
    START
    <span class="pieces">${piecesAt(0).map(pieceMarkup).join("")}</span>
  `;

  return element;
}

function renderFinishSpace(place, row) {
  const element = document.createElement("div");
  const players = state.finished.filter(p => p.place === place);

  element.className =
    `finish-space ${place === 1 ? "first" : "second"}`;
  element.style.gridColumn = "1";
  element.style.gridRow = String(row);
  element.dataset.finish = String(place);
  element.setAttribute("role", "button");
  element.setAttribute("tabindex", "0");
  element.setAttribute(
    "aria-label",
    `Finish position ${place}`
  );

  element.innerHTML = `
    <span>${place === 1 ? "1st" : "2nd"}</span>
    <span class="finish-piece">${players.map(pieceMarkup).join("")}</span>
  `;

  return element;
}

function renderBoard() {
  const board = $("#board");
  board.innerHTML = "";

  if (!state.started) {
    board.innerHTML =
      '<div class="board-placeholder">Start a race to see the board.</div>';
    return;
  }

  board.appendChild(renderStartSpace());

  for (let number = 1; number <= 29; number++) {
    board.appendChild(renderSpace(number));
  }

  const finishLabel = document.createElement("div");
  finishLabel.className = "finish-label";
  finishLabel.textContent = "FINISH";
  finishLabel.style.gridColumn = "1";
  finishLabel.style.gridRow = "1";
  board.appendChild(finishLabel);

  board.appendChild(renderFinishSpace(1, 2));
  board.appendChild(renderFinishSpace(2, 3));

  bindBoardControls();
}

// --------------------------------------------------
// Click and drag controls
// --------------------------------------------------

function bindBoardControls() {
  const board = $("#board");

  board.querySelectorAll("[data-player]").forEach(button => {
    button.style.touchAction = "none";

    button.addEventListener("click", event => {
      event.stopPropagation();

      if (state.suppressNextClick) {
        state.suppressNextClick = false;
        return;
      }

      selectPlayer(Number(button.dataset.player));
    });

    button.addEventListener("pointerdown", event => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      state.selected = Number(button.dataset.player);
      state.draggingPlayer = state.selected;
      state.dragMoved = false;

      dragStartX = event.clientX;
      dragStartY = event.clientY;
      draggedPiece = button;
    });
  });

  board.querySelectorAll("[data-space]").forEach(element => {
    element.addEventListener("click", event => {
      if (event.target.closest("[data-player]")) return;
      attemptMove(Number(element.dataset.space));
    });

    element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        attemptMove(Number(element.dataset.space));
      }
    });
  });

  board.querySelectorAll("[data-start]").forEach(element => {
    element.addEventListener("click", event => {
      if (event.target.closest("[data-player]")) return;
      attemptMove("start");
    });

    element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        attemptMove("start");
      }
    });
  });

  board.querySelectorAll("[data-finish]").forEach(element => {
    element.addEventListener("click", event => {
      if (event.target.closest("[data-player]")) return;
      attemptFinish(Number(element.dataset.finish));
    });

    element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        attemptFinish(Number(element.dataset.finish));
      }
    });
  });
}

function selectPlayer(id) {
  if (!state.started || !state.players[id]) return;

  state.selected = id;
  $("#turnMessage").textContent =
    `${state.players[id].name} selected. Click a space or drag the piece.`;

  render();
}

// --------------------------------------------------
// Free movement
// --------------------------------------------------

function saveSnapshot() {
  state.snapshots.push(JSON.stringify({
    players: state.players,
    current: state.current,
    selected: state.selected,
    rolled: state.rolled,
    finished: state.finished,
    history: state.history
  }));
}

function movePlayerFreely(id, destination, place = null) {
  const player = state.players[id];
  if (!player) return;

  saveSnapshot();

  const from = positionLabel(player);

  state.finished = state.finished.filter(p => p.id !== id);

  if (destination === "start") {
    player.position = 0;
    player.finished = false;
    player.place = null;
  } else if (destination === "finish") {
    player.position = 30;
    player.finished = true;
    player.place = place;
    state.finished.push(player);
  } else {
    const number = Number(destination);

    if (!Number.isInteger(number) || number < 1 || number > 29) {
      state.snapshots.pop();
      return;
    }

    player.position = number;
    player.finished = false;
    player.place = null;
  }

  const to = positionLabel(player);
  state.selected = id;

  state.history.push(`${player.name}: ${from} → ${to}`);

  $("#turnMessage").textContent =
    `${player.name} moved to ${to}. The die does not restrict movement.`;

  render();
}

function attemptMove(destination) {
  if (state.selected === null) {
    $("#turnMessage").textContent = "Select a racer piece first.";
    return;
  }

  movePlayerFreely(state.selected, destination);
}

function attemptFinish(place) {
  if (state.selected === null) {
    $("#turnMessage").textContent = "Select a racer piece first.";
    return;
  }

  movePlayerFreely(state.selected, "finish", place);
}

// Track pointer movement globally so a dragged piece can be dropped
// on any valid board destination.
document.addEventListener("pointermove", event => {
  if (state.draggingPlayer === null || !draggedPiece) return;

  const distance = Math.hypot(
    event.clientX - dragStartX,
    event.clientY - dragStartY
  );

  if (distance > 6) {
    state.dragMoved = true;
    draggedPiece.style.opacity = "0.45";
  }
});

document.addEventListener("pointerup", event => {
  if (state.draggingPlayer === null) return;

  const id = state.draggingPlayer;
  const wasDragged = state.dragMoved;

  if (draggedPiece) draggedPiece.style.opacity = "";

  state.draggingPlayer = null;
  state.dragMoved = false;
  draggedPiece = null;

  if (!wasDragged) return;

  state.suppressNextClick = true;

  const target = document.elementFromPoint(
    event.clientX,
    event.clientY
  );

  const space = target?.closest("[data-space]");
  const start = target?.closest("[data-start]");
  const finish = target?.closest("[data-finish]");

  if (space) {
    movePlayerFreely(id, Number(space.dataset.space));
  } else if (start) {
    movePlayerFreely(id, "start");
  } else if (finish) {
    movePlayerFreely(id, "finish", Number(finish.dataset.finish));
  } else {
    render();
  }

  setTimeout(() => {
    state.suppressNextClick = false;
  }, 150);
});

// --------------------------------------------------
// Independent die: roll any time, as often as desired.
// It never moves a racer or changes the selected racer.
// --------------------------------------------------

function rollDie() {
  const result = Math.floor(Math.random() * 6) + 1;

  state.rolled = result;
  $("#dieFace").textContent = String(result);
  $("#turnMessage").textContent =
    `You rolled a ${result}. Move any racer anywhere, or roll again.`;

  // No movement, turn changes, or button disabling.
  render();
}

// --------------------------------------------------
// Standings, racer details, history, and undo
// --------------------------------------------------

function renderStandings() {
  const container = $("#standings");

  container.innerHTML = state.players.map(player => `
    <div class="standing ${player.id === state.current ? "active" : ""}">
      ${imageMarkup(player.racer)}
      <div class="standing-info">
        <strong>${escapeHtml(player.name)}</strong>
        <small>${escapeHtml(positionLabel(player))}</small>
      </div>
      <button type="button" class="secondary"
        data-select-standing="${player.id}">Select</button>
    </div>
  `).join("");

  container.querySelectorAll("[data-select-standing]").forEach(button => {
    button.addEventListener("click", () => {
      selectPlayer(Number(button.dataset.selectStanding));
    });
  });
}

function renderDetails() {
  const container = $("#racerDetails");
  const player = state.players[state.selected];

  if (!player) {
    container.textContent = "Select a racer to see their details.";
    return;
  }

  const power = racerPower(player.racer);
  const ability = racerAbility(player.racer);

  container.innerHTML = `
    ${imageMarkup(player.racer)}
    <div>
      <strong>${escapeHtml(player.name)}</strong>
      ${power ? `<p><strong>${escapeHtml(power)}</strong></p>` : ""}
      ${ability ? `<p>${escapeHtml(ability)}</p>` : ""}
      <p>${escapeHtml(positionLabel(player))}</p>
    </div>
  `;
}

function renderHistory() {
  const container = $("#history");

  container.innerHTML = state.history.length
    ? state.history.map(item => `<li>${escapeHtml(item)}</li>`).join("")
    : "<li>No moves yet.</li>";

  $("#undoMove").disabled = state.snapshots.length === 0;
}

function render() {
  renderBoard();
  renderStandings();
  renderDetails();
  renderHistory();
}

function undoMove() {
  if (!state.snapshots.length) return;

  const snapshot = JSON.parse(state.snapshots.pop());

  state.players = snapshot.players;
  state.current = snapshot.current;
  state.selected = snapshot.selected;
  state.rolled = snapshot.rolled;
  state.finished = snapshot.finished;
  state.history = snapshot.history;

  $("#turnMessage").textContent = "Last move undone.";
  $("#dieFace").textContent =
    state.rolled === null ? "—" : String(state.rolled);

  render();
}

// --------------------------------------------------
// Buttons and initialization
// --------------------------------------------------

$("#playerCount").addEventListener("change", renderRacerChoices);
$("#startRace").addEventListener("click", startRace);
$("#rollDie").addEventListener("click", rollDie);
$("#undoMove").addEventListener("click", undoMove);

$("#newRace").addEventListener("click", () => {
  state.started = false;
  state.players = [];
  state.current = 0;
  state.selected = null;
  state.rolled = null;
  state.finished = [];
  state.history = [];
  state.snapshots = [];
  state.draggingPlayer = null;
  state.dragMoved = false;

  $("#dieFace").textContent = "—";
  $("#rollDie").disabled = true;
  $("#turnMessage").textContent =
    "Choose your racers and start the race.";

  renderBoard();

  $("#standings").textContent = "Start a race to see your racers.";
  $("#racerDetails").textContent = "Select a racer to see their details.";
  $("#history").innerHTML = "";
  $("#undoMove").disabled = true;
});

loadRacers();
