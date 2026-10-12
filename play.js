
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
  started: false
};

function racerName(racer) {
  return racer.name || racer.title || racer.athlete || "Unknown racer";
}

function racerImage(racer) {
  return racer.image || racer.img || racer.imageUrl || racer.imagePath || "";
}

function racerPower(racer) {
  return racer.power || racer.abilityName || racer.powerName || "";
}

function racerAbility(racer) {
  return racer.ability || racer.description || racer.powerText ||
    racer.abilityText || "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
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

async function loadRacers() {
  const message = $("#setupMessage");
  message.textContent = "Loading racers…";

  try {
    const response = await fetch("./script.js", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Could not load script.js (${response.status}).`);
    }

    const source = await response.text();
    const start = source.indexOf("const athletes =");
    const end = source.indexOf("const allAthletes =");

    if (start < 0 || end < 0 || end <= start) {
      throw new Error(
        "Could not find the racer arrays in script.js. Check the variable names."
      );
    }

    const dataSource = source.slice(start, end);

    const data = new Function(`
      ${dataSource}
      return {
        athletes,
        expansionAthletes: typeof expansionAthletes !== "undefined"
          ? expansionAthletes : [],
        extraMileAthletes: typeof extraMileAthletes !== "undefined"
          ? extraMileAthletes : [],
        interactionData: typeof interactionData !== "undefined"
          ? interactionData : []
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
    message.textContent =
      `Could not load racers: ${error.message} ` +
      "Check that play.html and play.js are in the repository root.";
  }
}

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
      <div class="choice-number">${i + 1}.</div>
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
  $("#setupMessage").textContent = "";
  $("#rollDie").disabled = false;
  $("#undoMove").disabled = true;
  $("#turnMessage").textContent =
    `${state.players[0].name}'s turn. Roll the die, then move the piece yourself.`;

  render();
}

function colorForSpace(number) {
  return COLORS[(number - 1) % COLORS.length];
}

/*
  Board coordinates:
  - Spaces 1–12 run across the top.
  - Spaces 13–15 descend on the right.
  - Spaces 16–29 run from right to left along the bottom.
  - START is immediately left of space 1.
  - Finish places sit above space 29.

  Grid coordinates are 1-based CSS grid coordinates.
*/
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
    return player.place === 1 ? "1st place" :
      player.place === 2 ? "2nd place" :
      `${player.place}th place`;
  }

  return player.position === 0 ? "Start" : `Space ${player.position}`;
}

function piecesAt(position) {
  return state.players.filter(
    player => !player.finished && player.position === position
  );
}

function pieceMarkup(player) {
  const selected = state.selected === player.id;
  const colorClass = PIECE_COLORS[player.id % PIECE_COLORS.length];

  return `
    <button
      class="piece ${colorClass} ${selected ? "is-selected" : ""}"
      data-player="${player.id}"
      title="${escapeHtml(player.name)} — ${escapeHtml(positionLabel(player))}"
      aria-label="Select ${escapeHtml(player.name)}"
      aria-pressed="${selected}"
    >${player.id + 1}</button>
  `;
}

function isLegalDestination(number) {
  if (state.rolled === null || state.selected === null) return false;

  const player = state.players[state.selected];
  if (!player || player.finished) return false;

  return player.position + state.rolled === number;
}

function canFinish(player) {
  return state.rolled !== null &&
    state.selected === player.id &&
    player.position + state.rolled >= 30;
}

function renderSpace(number) {
  const coord = trackCoordinates(number);
  const players = piecesAt(number);
  const legal = isLegalDestination(number);

  const button = document.createElement("button");
  button.className =
    `space ${colorForSpace(number)} ${[12, 15].includes(number) ? "corner" : ""}` +
    `${legal ? " legal-target" : ""}`;
  button.style.gridColumn = coord.col;
  button.style.gridRow = coord.row;
  button.dataset.space = number;
  button.setAttribute("aria-label", `Space ${number}`);

  button.innerHTML = `
    ${number % 5 === 0
      ? `<span class="space-number">${number}</span>`
      : ""}
    <span class="pieces">${players.map(pieceMarkup).join("")}</span>
  `;

  return button;
}

function renderStartSpace() {
  const button = document.createElement("button");
  button.className = "start-space";
  button.style.gridColumn = "3";
  button.style.gridRow = "1";
  button.dataset.start = "true";
  button.setAttribute("aria-label", "Start space");

  button.innerHTML = `
    START
    <span class="pieces">
      ${piecesAt(0).map(pieceMarkup).join("")}
    </span>
  `;

  return button;
}

function renderFinishSpace(place, row) {
  const button = document.createElement("button");
  const legalPlayers = state.players.filter(canFinish);
  const legal = legalPlayers.length > 0;

  button.className =
    `finish-space ${place === 1 ? "first" : "second"}` +
    `${legal ? " legal-target" : ""}`;
  button.style.gridColumn = "1";
  button.style.gridRow = String(row);
  button.dataset.finish = String(place);

  const player = state.finished.find(p => p.place === place);

  button.innerHTML = `
    <span>${place === 1 ? "1st" : "2nd"}</span>
    ${player
      ? `<span class="finish-piece">${pieceMarkup(player)}</span>`
      : `<span>${place === 1 ? "Place" : "Place"}</span>`
    }
  `;

  return button;
}

function renderBoard() {
  const board = $("#board");
  board.innerHTML = "";

  if (!state.started) {
    board.innerHTML =
      '<div class="board-placeholder">Start a race to see the board.</div>';
    return;
  }

  // START is separate from numbered space 1.
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

  // Add click controls after rebuilding the board.
  board.querySelectorAll("[data-player]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      selectPlayer(Number(button.dataset.player));
    });
  });

  board.querySelectorAll("[data-space]").forEach(button => {
    button.addEventListener("click", () => {
      attemptMove(Number(button.dataset.space));
    });
  });

  board.querySelectorAll("[data-start]").forEach(button => {
    button.addEventListener("click", () => {
      if (state.rolled === null) return;
      attemptMove(0);
    });
  });

  board.querySelectorAll("[data-finish]").forEach(button => {
    button.addEventListener("click", () => {
      attemptFinish(Number(button.dataset.finish));
    });
  });
}

function selectPlayer(id) {
  if (!state.started) return;

  const player = state.players[id];
  if (!player || player.finished) return;

  state.selected = id;

  if (state.rolled !== null && state.current !== id) {
    $("#turnMessage").textContent =
      `The die is already rolled for ${state.players[state.current].name}. ` +
      "Move that racer first.";
    state.selected = state.current;
  }

  render();
}

function rollDie() {
  if (!state.started || state.rolled !== null) return;

  const player = state.players[state.current];

  if (!player || player.finished) {
    advanceTurn();
    return;
  }

  state.selected = state.current;
  state.rolled = Math.floor(Math.random() * 6) + 1;
  $("#dieFace").textContent = String(state.rolled);

  const destination = player.position + state.rolled;

  if (destination >= 30) {
    $("#turnMessage").textContent =
      `${player.name} rolled ${state.rolled}. Select a finish place to move ` +
      "the piece manually.";
  } else {
    $("#turnMessage").textContent =
      `${player.name} rolled ${state.rolled}. Select space ${destination} ` +
      "to move the piece. The die roll did not move it.";
  }

  render();
}

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

function attemptMove(destination) {
  if (state.rolled === null || state.selected === null) {
    $("#turnMessage").textContent = "Roll the die first.";
    return;
  }

  const player = state.players[state.current];

  if (!player || player.id !== state.selected) {
    $("#turnMessage").textContent =
      "Move the current racer's piece first.";
    return;
  }

  const expected = player.position + state.rolled;

  if (expected >= 30) {
    $("#turnMessage").textContent =
      "This roll reaches the finish. Select a finish place.";
    return;
  }

  if (destination !== expected) {
    $("#turnMessage").textContent =
      `That is not the correct destination. Move ${player.name} to space ${expected}.`;
    return;
  }

  saveSnapshot();

  const previous = positionLabel(player);
  player.position = destination;

  state.history.push(
    `${player.name}: ${previous} → Space ${destination} (rolled ${state.rolled})`
  );

  completeTurn();
}

function attemptFinish(place) {
  if (state.rolled === null || state.selected === null) {
    $("#turnMessage").textContent = "Roll the die first.";
    return;
  }

  const player = state.players[state.current];

  if (!player || player.id !== state.selected) return;

  if (player.position + state.rolled < 30) {
    $("#turnMessage").textContent =
      `${player.name} needs to land on space ${player.position + state.rolled} first.`;
    return;
  }

  if (state.finished.some(p => p.place === place)) {
    $("#turnMessage").textContent =
      "That finish place is occupied. Choose the other place.";
    return;
  }

  saveSnapshot();

  player.finished = true;
  player.place = place;
  state.finished.push(player);

  state.history.push(
    `${player.name} finished in ${place === 1 ? "1st" : "2nd"} place.`
  );

  completeTurn();
}

function completeTurn() {
  state.rolled = null;
  advanceTurn();
  render();
}

function advanceTurn() {
  if (state.players.every(p => p.finished)) {
    $("#turnMessage").textContent = "The race is over!";
    $("#rollDie").disabled = true;
    return;
  }

  let next = state.current;

  for (let tries = 0; tries < state.players.length; tries++) {
    next = (next + 1) % state.players.length;
    if (!state.players[next].finished) break;
  }

  state.current = next;
  state.selected = next;
  state.rolled = null;

  $("#dieFace").textContent = "—";
  $("#rollDie").disabled = false;
  $("#turnMessage").textContent =
    `${state.players[next].name}'s turn. Roll the die, then select the destination square.`;
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

  $("#dieFace").textContent =
    state.rolled === null ? "—" : String(state.rolled);

  $("#rollDie").disabled = state.rolled !== null;
  $("#turnMessage").textContent =
    "Last move undone. Continue from the restored position.";

  render();
}

function renderStandings() {
  const container = $("#standings");

  container.innerHTML = state.players.map(player => `
    <div class="standing ${player.id === state.current ? "active" : ""}">
      ${imageMarkup(player.racer)}
      <div class="standing-info">
        <strong>${escapeHtml(player.name)}</strong>
        <small>${escapeHtml(positionLabel(player))}</small>
      </div>
      <button class="secondary" data-select-standing="${player.id}">
        Select
      </button>
    </div>
  `).join("");

  container.querySelectorAll("[data-select-standing]").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.selectStanding);

      if (id !== state.current && state.rolled !== null) {
        $("#turnMessage").textContent =
          "Finish the current move before selecting another racer.";
        return;
      }

      state.current = id;
      state.selected = id;
      render();
    });
  });
}

function renderDetails() {
  const player = state.players[state.selected];
  const container = $("#racerDetails");

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

  $("#dieFace").textContent = "—";
  $("#rollDie").disabled = true;
  $("#turnMessage").textContent = "Choose your racers and start the race.";

  renderBoard();
  $("#standings").textContent = "Start a race to see your racers.";
  $("#racerDetails").textContent = "Select a racer to see their details.";
  $("#history").innerHTML = "";
  $("#undoMove").disabled = true;
});

loadRacers();
