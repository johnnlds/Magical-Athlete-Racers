
(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);

  const state = {
    data: null,
    players: [],
    current: 0,
    turn: 1,
    lastMove: null,
    rolled: null,
    selected: null,
    started: false
  };

  const colors = [
    "#bd3f35", "#3176b7", "#38834c", "#8b55a7",
    "#d47b20", "#257f80", "#a44377", "#5b5b5b",
    "#7a6a2e", "#5470c6", "#8b633d", "#508a69"
  ];

  // Approximate special-space placements for a playable prototype.
  // Replace these indices with verified positions from the physical board
  // if you want the Wild Wilds layout to match space-for-space.
  const wildSpaces = {
    3:  { type: "arrow", label: "↑ +2" },
    6:  { type: "star",  label: "★ +1 pt" },
    9:  { type: "trip",  label: "TRIP" },
    12: { type: "arrow", label: "↑ +3" },
    15: { type: "star",  label: "★ +1 pt" },
    18: { type: "trip",  label: "TRIP" },
    21: { type: "arrow", label: "↓ −2" },
    24: { type: "star",  label: "★ +1 pt" },
    27: { type: "arrow", label: "↑ +2" }
  };

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  async function loadRacers() {
    const response = await fetch("./script.js?v=14", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Couldn't load script.js (HTTP ${response.status}).`);
    }

    const source = await response.text();
    const start = source.match(/\bconst\s+athletes\s*=/);
    const end = source.match(/\bconst\s+allAthletes\s*=/);

    if (!start || !end || end.index <= start.index) {
      throw new Error(
        "Couldn't locate the racer arrays in script.js. " +
        "The file must contain 'const athletes =' and 'const allAthletes ='."
      );
    }

    const declarations = source.slice(start.index, end.index);

    const readData = new Function(`
      ${declarations}
      return {
        athletes: typeof athletes === "undefined" ? [] : athletes,
        expansionAthletes:
          typeof expansionAthletes === "undefined" ? [] : expansionAthletes,
        extraMileAthletes:
          typeof extraMileAthletes === "undefined" ? [] : extraMileAthletes,
        interactionData:
          typeof interactionData === "undefined" ? [] : interactionData
      };
    `);

    const data = readData();

    if (!Array.isArray(data.athletes) || !data.athletes.length) {
      throw new Error("The base-game racer list is empty.");
    }

    return data;
  }

  function getSets() {
    const sets = [];

    if ($("#useBase").checked) {
      sets.push({
        key: "base",
        label: "Base Game",
        racers: state.data.athletes
      });
    }

    if ($("#useSecond").checked) {
      sets.push({
        key: "second",
        label: "Second Wind",
        racers: state.data.expansionAthletes
      });
    }

    if ($("#useExtra").checked) {
      sets.push({
        key: "extra",
        label: "Extra Mile (unofficial)",
        racers: state.data.extraMileAthletes
      });
    }

    return sets;
  }

  function buildSetup() {
    const humans = Number($("#humanCount").value);
    const cpus = Number($("#cpuCount").value);
    const total = humans + cpus;
    const sets = getSets();
    const available = sets.reduce((sum, set) => sum + set.racers.length, 0);
    const container = $("#playerSetup");

    if (!sets.length) {
      container.innerHTML = "<p>Select at least one racer set.</p>";
      $("#startRace").disabled = true;
      return;
    }

    if (available < total) {
      container.innerHTML =
        `<p>Only ${available} racers are available for ${total} participants. Select more sets or fewer participants.</p>`;
      $("#startRace").disabled = true;
      return;
    }

    $("#startRace").disabled = false;

    container.innerHTML = Array.from({ length: total }, (_, i) => {
      const cpu = i >= humans;

      return `
        <div class="player-row" data-player="${i}">
          <div class="player-label">
            ${cpu ? "CPU opponent" : "Human player"} ${cpu ? i - humans + 1 : i + 1}
          </div>
          <label>
            Racer set
            <select class="player-set">
              ${sets.map(set =>
                `<option value="${escapeHTML(set.key)}">${escapeHTML(set.label)}</option>`
              ).join("")}
            </select>
          </label>
          <label>
            Racer
            <select class="player-racer"></select>
          </label>
        </div>`;
    }).join("");

    container.querySelectorAll(".player-row").forEach(row => {
      const setSelect = $(".player-set", row);
      const racerSelect = $(".player-racer", row);

      setSelect.addEventListener("change", () => {
        fillRacerOptions(row, true);
        refreshDuplicates();
      });

      racerSelect.addEventListener("change", refreshDuplicates);
      fillRacerOptions(row, false);
    });

    refreshDuplicates();
  }

  function fillRacerOptions(row, keepCurrent) {
    const setSelect = $(".player-set", row);
    const racerSelect = $(".player-racer", row);
    const set = getSets().find(item => item.key === setSelect.value);
    if (!set) return;

    const oldValue = keepCurrent ? racerSelect.value : "";
    const usedElsewhere = new Set(
      [...$("#playerSetup").querySelectorAll(".player-racer")]
        .filter(select => select !== racerSelect)
        .map(select => select.value)
    );

    const racers = set.racers.filter(racer =>
      !usedElsewhere.has(racer.name) || racer.name === oldValue
    );

    racerSelect.innerHTML = racers.map(racer =>
      `<option value="${escapeHTML(racer.name)}">${escapeHTML(racer.name)}</option>`
    ).join("");

    if (racers.some(racer => racer.name === oldValue)) {
      racerSelect.value = oldValue;
    }
  }

  function refreshDuplicates() {
    // Rebuild choices while preserving each selected racer when possible.
    const rows = [...$("#playerSetup").querySelectorAll(".player-row")];

    rows.forEach(row => {
      const select = $(".player-racer", row);
      const current = select.value;
      const set = getSets().find(item => item.key === $(".player-set", row).value);
      if (!set) return;

      const usedElsewhere = new Set(
        rows
          .filter(other => other !== row)
          .map(other => $(".player-racer", other).value)
      );

      const eligible = set.racers.filter(racer =>
        !usedElsewhere.has(racer.name) || racer.name === current
      );

      select.innerHTML = eligible.map(racer =>
        `<option value="${escapeHTML(racer.name)}">${escapeHTML(racer.name)}</option>`
      ).join("");

      if (eligible.some(racer => racer.name === current)) {
        select.value = current;
      }
    });
  }

  function lookupRacer(setKey, name) {
    const lists = {
      base: state.data.athletes,
      second: state.data.expansionAthletes,
      extra: state.data.extraMileAthletes
    };

    return (lists[setKey] || []).find(racer => racer.name === name);
  }

  function startRace() {
    const rows = [...$("#playerSetup").querySelectorAll(".player-row")];
    const humans = Number($("#humanCount").value);
    const used = new Set();
    const players = [];

    for (let i = 0; i < rows.length; i++) {
      const setKey = $(".player-set", rows[i]).value;
      const name = $(".player-racer", rows[i]).value;
      const racer = lookupRacer(setKey, name);

      if (!racer) {
        alert("A selected racer couldn't be found. Please choose the racer again.");
        return;
      }

      if (used.has(name)) {
        alert("Each racer must be selected only once.");
        return;
      }

      used.add(name);
      players.push({
        name,
        racer,
        setKey,
        isCPU: i >= humans,
        position: 0,
        finished: false,
        place: null,
        color: colors[i % colors.length]
      });
    }

    state.players = players;
    state.current = 0;
    state.turn = 1;
    state.lastMove = null;
    state.rolled = null;
    state.selected = 0;
    state.started = true;

    $("#setup").hidden = true;
    $("#game").hidden = false;

    // The die is informational: movement remains manual for every participant.
    $("#turnMessage").textContent =
      "Select the current racer's piece and move it yourself.";
    $("#dieResult").textContent = "Die: —";

    render();
  }

  function trackCoordinates() {
    const coords = [];

    // Ten spaces along the top.
    for (let col = 1; col <= 10; col++) {
      coords.push({ row: 1, col });
    }

    // Five spaces down the right edge.
    for (let row = 2; row <= 6; row++) {
      coords.push({ row, col: 10 });
    }

    // Ten spaces along the bottom, right to left.
    for (let col = 10; col >= 1; col--) {
      coords.push({ row: 7, col });
    }

    // Five spaces up the left edge.
    for (let row = 6; row >= 2; row--) {
      coords.push({ row, col: 1 });
    }

    return coords;
  }

  function renderBoard() {
    const board = $("#board");
    const coords = trackCoordinates();
    const wild = $("#boardSide").value === "wild";
    const contents = [];

    coords.forEach((coord, index) => {
      const special = wild ? wildSpaces[index] : null;
      const playersHere = state.players
        .map((player, playerIndex) => ({ player, playerIndex }))
        .filter(item => !item.player.finished && item.player.position === index);

      let specialClass = "";
      if (special?.type === "arrow") specialClass = "special-arrow";
      if (special?.type === "trip") specialClass = "special-trip";
      if (special?.type === "star") specialClass = "special-star";

      const isSelectedSpace = state.selected !== null &&
        state.players[state.selected]?.position === index;

      contents.push(`
        <div class="space ${index === 0 ? "start-space" : ""} ${specialClass}"
             data-space="${index}"
             style="grid-row:${coord.row};grid-column:${coord.col}"
             aria-label="Space ${index + 1}">
          <span class="space-label">${index === 0 ? "START" : index + 1}</span>
          ${special ? `<span class="space-effect">${escapeHTML(special.label)}</span>` : ""}
          <div class="tokens">
            ${playersHere.map(({ player, playerIndex }) => `
              <button class="token ${state.selected === playerIndex ? "selected" : ""}"
                draggable="true"
                data-player="${playerIndex}"
                style="--token-color:${player.color}"
                aria-label="Select ${escapeHTML(player.name)}"
                title="${escapeHTML(player.name)}">${playerIndex + 1}</button>
            `).join("")}
          </div>
        </div>`);
    });

    board.innerHTML = `
      <div class="board-center">
        <strong>${$("#boardSide").value === "wild" ? "WILD WILDS" : "MILD MILE"}</strong>
        <span>Drag a racer, or select it and tap a destination.</span>
        <span>Space positions are numbered from START.</span>
      </div>
      ${contents.join("")}
    `;

    const finishers = state.players
      .map((player, index) => ({ player, index }))
      .filter(item => item.player.finished)
      .sort((a, b) => a.player.place - b.player.place);

    $("#finishArea").innerHTML = `
      <strong>FINISH / PODIUM</strong>
      <span>Drop a piece here, or select it and tap this area, when it crosses the finish line.</span>
      <div class="finish-tokens">
        ${finishers.map(({ player, index }) => `
          <button class="token ${state.selected === index ? "selected" : ""}"
            draggable="true"
            data-player="${index}"
            style="--token-color:${player.color}"
            aria-label="Select ${escapeHTML(player.name)}">${index + 1}</button>
        `).join("")}
      </div>
    `;

    bindBoardControls();
  }

  function renderRacers() {
    $("#racerList").innerHTML = state.players.map((player, index) => {
      const image = player.racer.image || "";
      const status = player.finished
        ? `Finished — place ${player.place}`
        : `Space ${player.position + 1}`;

      return `
        <article class="racer-card ${state.current === index ? "active" : ""}">
          ${image
            ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(player.name)}" loading="lazy" onerror="this.style.display='none'">`
            : `<div aria-hidden="true">🏁</div>`}
          <div>
            <h3>${escapeHTML(player.name)} ${player.isCPU ? "(CPU)" : ""}</h3>
            <p><strong>Position:</strong> ${escapeHTML(status)}</p>
            <p><strong>Power:</strong> ${escapeHTML(player.racer.power || "See racer profile")}</p>
            <p><strong>Ability:</strong> ${escapeHTML(player.racer.ability || "Check the rules")}</p>
          </div>
          <div class="racer-meta">
            ${state.selected === index ? "Selected" : ""}
            <br>
            ${index === state.current ? "Current turn" : ""}
          </div>
        </article>`;
    }).join("");
  }

  function render() {
    const player = state.players[state.current];
    const done = state.players.every(item => item.finished);

    $("#turnTitle").textContent = done
      ? "Race complete!"
      : `Turn ${state.turn}: ${player.name}${player.isCPU ? " (CPU)" : ""}`;

    $("#rollDie").disabled = done;
    $("#undoMove").disabled = !state.lastMove;

    renderBoard();
    renderRacers();
  }

  function selectPlayer(index) {
    if (!state.players[index]) return;
    state.selected = index;
    $("#turnMessage").textContent =
      `${state.players[index].name} selected. Tap a destination space or drag the piece.`;
    render();
  }

  function movePlayer(index, destination) {
    const player = state.players[index];
    if (!player) return;

    state.lastMove = {
      index,
      oldPosition: player.position,
      oldFinished: player.finished,
      oldPlace: player.place
    };

    if (destination === "finish") {
      if (!player.finished) {
        player.finished = true;
        player.place = state.players.filter(item => item.finished).length;
      }
    } else {
      const space = Number(destination);
      if (!Number.isInteger(space) || space < 0 || space > 29) return;

      player.position = space;
      player.finished = false;
      player.place = null;
    }

    state.rolled = null;
    $("#dieResult").textContent = "Die: —";
    $("#turnMessage").textContent =
      `${player.name} moved manually. Resolve any power or special-space effects yourself.`;

    render();
  }

  function bindBoardControls() {
    $("#board").querySelectorAll(".token").forEach(token => {
      token.addEventListener("click", event => {
        event.stopPropagation();
        selectPlayer(Number(token.dataset.player));
      });

      token.addEventListener("dragstart", event => {
        const index = Number(token.dataset.player);
        state.selected = index;
        event.dataTransfer.setData("text/plain", String(index));
        event.dataTransfer.effectAllowed = "move";
      });
    });

    $("#board").querySelectorAll(".space").forEach(space => {
      space.addEventListener("click", () => {
        if (state.selected === null) {
          $("#turnMessage").textContent =
            "Select a racer piece first, then choose its destination.";
          return;
        }

        movePlayer(state.selected, space.dataset.space);
      });

      space.addEventListener("dragover", event => {
        event.preventDefault();
        space.classList.add("destination");
      });

      space.addEventListener("dragleave", () => {
        space.classList.remove("destination");
      });

      space.addEventListener("drop", event => {
        event.preventDefault();
        space.classList.remove("destination");
        const index = Number(event.dataTransfer.getData("text/plain"));
        state.selected = index;
        movePlayer(index, space.dataset.space);
      });
    });

    const finish = $("#finishArea");

    finish.addEventListener("click", event => {
      if (event.target.closest(".token")) return;

      if (state.selected === null) {
        $("#turnMessage").textContent =
          "Select a racer first, then tap the finish area.";
        return;
      }

      movePlayer(state.selected, "finish");
    });

    finish.addEventListener("dragover", event => {
      event.preventDefault();
      finish.classList.add("destination");
    });

    finish.addEventListener("dragleave", () => {
      finish.classList.remove("destination");
    });

    finish.addEventListener("drop", event => {
      event.preventDefault();
      finish.classList.remove("destination");
      const index = Number(event.dataTransfer.getData("text/plain"));
      state.selected = index;
      movePlayer(index, "finish");
    });

    finish.querySelectorAll(".token").forEach(token => {
      token.addEventListener("click", event => {
        event.stopPropagation();
        selectPlayer(Number(token.dataset.player));
      });

      token.addEventListener("dragstart", event => {
        const index = Number(token.dataset.player);
        state.selected = index;
        event.dataTransfer.setData("text/plain", String(index));
        event.dataTransfer.effectAllowed = "move";
      });
    });
  }

  function ensureFinishTurnButton() {
    if ($("#finishTurn")) return;

    const button = document.createElement("button");
    button.id = "finishTurn";
    button.textContent = "Finish turn";
    $("#rollDie").insertAdjacentElement("afterend", button);

    button.addEventListener("click", () => {
      if (state.players.every(item => item.finished)) {
        $("#turnMessage").textContent = "The race is complete.";
        return;
      }

      for (let step = 0; step < state.players.length; step++) {
        state.current = (state.current + 1) % state.players.length;
        if (!state.players[state.current].finished) break;
      }

      state.turn++;
      state.rolled = null;
      $("#dieResult").textContent = "Die: —";
      $("#turnMessage").textContent =
        "Roll the die, then manually move the current racer's piece.";
      render();
    });
  }

  function bindEvents() {
    ["#humanCount", "#cpuCount", "#useBase", "#useSecond", "#useExtra"]
      .forEach(selector => $(selector).addEventListener("change", buildSetup));

    $("#startRace").addEventListener("click", startRace);

    $("#boardSide").addEventListener("change", () => {
      renderBoard();
      $("#turnMessage").textContent =
        "Board side changed. Move pieces manually and resolve special spaces yourself.";
    });

    $("#rollDie").addEventListener("click", () => {
      if (!state.players.length) return;

      state.rolled = Math.floor(Math.random() * 6) + 1;
      $("#dieResult").textContent = `Die: ${state.rolled}`;
      $("#turnMessage").textContent =
        `Rolled ${state.rolled}. Move ${state.players[state.current].name}'s piece manually. The roll does not move the piece.`;
    });

    $("#undoMove").addEventListener("click", () => {
      if (!state.lastMove) return;

      const previous = state.lastMove;
      const player = state.players[previous.index];

      player.position = previous.oldPosition;
      player.finished = previous.oldFinished;
      player.place = previous.oldPlace;

      state.lastMove = null;
      $("#turnMessage").textContent = "Last piece movement undone.";
      render();
    });

    $("#newRace").addEventListener("click", () => {
      state.started = false;
      state.players = [];
      state.current = 0;
      state.turn = 1;
      state.lastMove = null;
      state.rolled = null;
      state.selected = null;
      $("#game").hidden = true;
      $("#setup").hidden = false;
      buildSetup();
    });

    ensureFinishTurnButton();
  }

  async function init() {
    try {
      $("#status").textContent = "Loading racer data…";
      state.data = await loadRacers();

      const total = state.data.athletes.length +
        state.data.expansionAthletes.length +
        state.data.extraMileAthletes.length;

      $("#status").textContent = `Loaded ${total} racers successfully.`;
      $("#status").hidden = true;
      $("#setup").hidden = false;

      buildSetup();
      bindEvents();
    } catch (error) {
      console.error("Racer loading failed:", error);
      $("#status").innerHTML = `
        <strong>Couldn't load the racers.</strong>
        <p>${escapeHTML(error.message)}</p>
        <p>Check that script.js is in the same folder as play.html.</p>
        <button id="retryLoad">Try again</button>
      `;

      $("#retryLoad").addEventListener("click", init);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
