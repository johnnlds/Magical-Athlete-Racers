
(() => {
  "use strict";

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const state = {
    data: null,
    players: [],
    current: 0,
    turn: 1,
    finished: [],
    gameStarted: false,
    busy: false
  };

  const escapeHTML = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  function addStyles() {
    if ($("#magical-play-styles")) return;

    const style = document.createElement("style");
    style.id = "magical-play-styles";
    style.textContent = `
      * { box-sizing: border-box; }
      body {
        margin: 0;
        background: #f5f0e8;
        color: #24211f;
        font-family: system-ui, -apple-system, sans-serif;
      }
      .mp-shell { max-width: 1100px; margin: auto; padding: 18px; }
      .mp-header { text-align: center; margin-bottom: 20px; }
      .mp-header h1 { margin: 0; font-size: clamp(28px, 5vw, 44px); }
      .mp-muted { color: #69635e; }
      .mp-panel {
        background: white; border: 1px solid #ded7ce;
        border-radius: 14px; padding: 16px; margin: 14px 0;
      }
      .mp-grid { display: grid; gap: 12px; }
      .mp-cols { grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); }
      .mp-field { display: flex; flex-direction: column; gap: 5px; }
      .mp-field label { font-weight: 700; }
      select, input, button {
        font: inherit; border-radius: 9px; padding: 11px;
      }
      select, input { width: 100%; border: 1px solid #c9c1b8; background: white; }
      button {
        border: 0; background: #8d2929; color: white;
        font-weight: 700; cursor: pointer;
      }
      button:disabled { opacity: .45; cursor: not-allowed; }
      .mp-secondary { background: #e9e3db; color: #282421; }
      .mp-checks { display: flex; flex-wrap: wrap; gap: 14px; }
      .mp-check { display: flex; align-items: center; gap: 7px; }
      .mp-check input { width: auto; }
      .mp-slots { display: grid; gap: 12px; }
      .mp-player {
        display: grid; grid-template-columns: 1fr 1fr 1.5fr;
        gap: 10px; align-items: end;
      }
      .mp-board {
        display: grid; grid-template-columns: repeat(8, minmax(0, 1fr));
        gap: 5px; margin: 14px 0;
      }
      .mp-space {
        min-height: 65px; border: 1px solid #d8cec2;
        border-radius: 8px; background: #fffaf3; padding: 4px;
        display: flex; flex-direction: column; align-items: center;
        justify-content: center; text-align: center; font-size: 11px;
        overflow-wrap: anywhere;
      }
      .mp-space.mp-start { background: #e1efdf; }
      .mp-space.mp-finish { background: #f4d7d7; }
      .mp-tokens { display: flex; flex-wrap: wrap; justify-content: center; gap: 2px; }
      .mp-token {
        width: 23px; height: 23px; border-radius: 50%;
        display: inline-flex; align-items: center; justify-content: center;
        background: #8d2929; color: white; font-size: 10px; font-weight: 800;
      }
      .mp-racers { display: grid; gap: 10px; }
      .mp-racer {
        display: grid; grid-template-columns: 60px 1fr auto;
        gap: 12px; align-items: center; border: 1px solid #ded7ce;
        padding: 10px; border-radius: 10px; background: white;
      }
      .mp-racer img { width: 60px; height: 60px; object-fit: contain; }
      .mp-racer h3 { margin: 0 0 4px; font-size: 16px; }
      .mp-racer p { margin: 3px 0; font-size: 13px; }
      .mp-active { outline: 3px solid #c58c3c; }
      .mp-message { padding: 12px; background: #fff4d9; border-radius: 9px; }
      .mp-actions { display: flex; flex-wrap: wrap; gap: 10px; }
      .mp-actions button { flex: 1 1 150px; }
      .mp-hidden { display: none !important; }
      @media (max-width: 560px) {
        .mp-shell { padding: 10px; }
        .mp-player { grid-template-columns: 1fr 1fr; }
        .mp-player .mp-field:last-child { grid-column: 1 / -1; }
        .mp-board { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .mp-space { min-height: 58px; }
        .mp-racer { grid-template-columns: 48px 1fr; }
        .mp-racer img { width: 48px; height: 48px; }
        .mp-racer .mp-position { grid-column: 2; }
      }
    `;
    document.head.appendChild(style);
  }

  function showPage() {
    document.body.innerHTML = `
      <main class="mp-shell">
        <header class="mp-header">
          <h1>MAGICAL ATHLETE</h1>
          <p class="mp-muted">Race game prototype</p>
          <p><a href="./index.html">Back to racer profiles</a></p>
        </header>
        <div id="mp-status" class="mp-panel" role="status">
          Loading racers…
        </div>
        <section id="mp-setup" class="mp-panel mp-hidden">
          <h2>Set up your race</h2>
          <div class="mp-grid mp-cols">
            <div class="mp-field">
              <label for="mp-humans">Human players</label>
              <select id="mp-humans">
                ${[1,2,3,4,5,6].map(n =>
                  `<option value="${n}" ${n === 2 ? "selected" : ""}>${n}</option>`
                ).join("")}
              </select>
            </div>
            <div class="mp-field">
              <label for="mp-cpus">CPU racers</label>
              <select id="mp-cpus">
                ${[0,1,2,3,4,5,6,7].map(n =>
                  `<option value="${n}" ${n === 2 ? "selected" : ""}>${n}</option>`
                ).join("")}
              </select>
            </div>
          </div>
          <h3>Available racer sets</h3>
          <div class="mp-checks">
            <label class="mp-check"><input type="checkbox" id="mp-base" checked> Base Game</label>
            <label class="mp-check"><input type="checkbox" id="mp-second"> Second Wind</label>
            <label class="mp-check"><input type="checkbox" id="mp-extra"> Extra Mile (unofficial)</label>
          </div>
          <p class="mp-muted">Choose a set for each player, then choose a racer. Each racer can only be selected once.</p>
          <div id="mp-slots" class="mp-slots"></div>
          <div class="mp-actions" style="margin-top:16px">
            <button id="mp-start">Start race</button>
          </div>
        </section>
        <section id="mp-game" class="mp-hidden">
          <div class="mp-panel">
            <h2 id="mp-turn-title">Race</h2>
            <p id="mp-turn-message" class="mp-message"></p>
            <div class="mp-actions">
              <button id="mp-roll">Roll die and move</button>
              <button id="mp-next" class="mp-secondary mp-hidden">Next turn</button>
              <button id="mp-new" class="mp-secondary">New race</button>
            </div>
          </div>
          <div class="mp-panel">
            <h2>Race track</h2>
            <p class="mp-muted">This prototype uses a simplified track and a standard six-sided die.</p>
            <div id="mp-board" class="mp-board"></div>
          </div>
          <div class="mp-panel">
            <h2>Racers</h2>
            <div id="mp-racers" class="mp-racers"></div>
          </div>
        </section>
      </main>
    `;
  }

  async function loadRacers() {
    const response = await fetch("./script.js?v=14", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(
        `Could not fetch script.js (HTTP ${response.status}).`
      );
    }

    const source = await response.text();

    const startMatch = source.match(/\bconst\s+athletes\s*=/);
    const endMatch = source.match(/\bconst\s+allAthletes\s*=/);

    if (!startMatch || !endMatch) {
      throw new Error(
        "The racer arrays could not be located in script.js. " +
        "Expected 'const athletes =' and 'const allAthletes ='."
      );
    }

    if (endMatch.index <= startMatch.index) {
      throw new Error("The racer declarations are in an unexpected order.");
    }

    // Execute only the declarations containing the racer data.
    const declarations = source.slice(
      startMatch.index,
      endMatch.index
    );

    const getData = new Function(`
      ${declarations}
      return {
        athletes: typeof athletes !== "undefined" ? athletes : [],
        expansionAthletes:
          typeof expansionAthletes !== "undefined" ? expansionAthletes : [],
        extraMileAthletes:
          typeof extraMileAthletes !== "undefined" ? extraMileAthletes : [],
        interactionData:
          typeof interactionData !== "undefined" ? interactionData : []
      };
    `);

    const data = getData();

    if (!Array.isArray(data.athletes) || data.athletes.length === 0) {
      throw new Error("No base-game racers were found.");
    }

    return data;
  }

  function availableSets() {
    const data = state.data;
    const sets = [];

    if ($("#mp-base").checked) {
      sets.push({ key: "base", label: "Base Game", racers: data.athletes });
    }
    if ($("#mp-second").checked) {
      sets.push({
        key: "second",
        label: "Second Wind",
        racers: data.expansionAthletes
      });
    }
    if ($("#mp-extra").checked) {
      sets.push({
        key: "extra",
        label: "Extra Mile",
        racers: data.extraMileAthletes
      });
    }

    return sets;
  }

  function buildSlots() {
    const humans = Number($("#mp-humans").value);
    const cpus = Number($("#mp-cpus").value);
    const total = humans + cpus;
    const sets = availableSets();
    const container = $("#mp-slots");

    if (!sets.length) {
      container.innerHTML =
        `<p class="mp-message">Select at least one racer set above.</p>`;
      $("#mp-start").disabled = true;
      return;
    }

    const allAvailable = sets.flatMap(set => set.racers);
    if (allAvailable.length < total) {
      container.innerHTML =
        `<p class="mp-message">You need ${total} unique racers, but only ${allAvailable.length} are available in the selected sets.</p>`;
      $("#mp-start").disabled = true;
      return;
    }

    $("#mp-start").disabled = false;

    container.innerHTML = Array.from({ length: total }, (_, index) => {
      const isCPU = index >= humans;
      const defaultSet = sets[0];
      return `
        <div class="mp-player" data-player="${index}">
          <div class="mp-field">
            <label>${isCPU ? "CPU" : "Player"} ${isCPU ? index - humans + 1 : index + 1}</label>
            <select class="mp-player-set" aria-label="Racer set for player ${index + 1}">
              ${sets.map(set =>
                `<option value="${escapeHTML(set.key)}">${escapeHTML(set.label)}</option>`
              ).join("")}
            </select>
          </div>
          <div class="mp-field">
            <label>Controller</label>
            <input value="${isCPU ? "CPU-controlled" : "Human"}" disabled>
          </div>
          <div class="mp-field">
            <label>Racer</label>
            <select class="mp-player-racer" aria-label="Racer for player ${index + 1}"></select>
          </div>
        </div>`;
    }).join("");

    container.querySelectorAll(".mp-player").forEach(slot => {
      const setSelect = $(".mp-player-set", slot);
      const racerSelect = $(".mp-player-racer", slot);

      function updateRacers() {
        const set = sets.find(item => item.key === setSelect.value);
        const previouslySelected = racerSelect.value;
        const selectedElsewhere = new Set(
          [...container.querySelectorAll(".mp-player-racer")]
            .filter(select => select !== racerSelect)
            .map(select => select.value)
        );

        const eligible = set.racers.filter(racer =>
          !selectedElsewhere.has(racer.name) ||
          racer.name === previouslySelected
        );

        racerSelect.innerHTML = eligible.map(racer =>
          `<option value="${escapeHTML(racer.name)}">${escapeHTML(racer.name)}</option>`
        ).join("");

        if (eligible.some(racer => racer.name === previouslySelected)) {
          racerSelect.value = previouslySelected;
        }
      }

      setSelect.addEventListener("change", () => {
        updateRacers();
        refreshAllRacerOptions();
      });

      racerSelect.addEventListener("change", refreshAllRacerOptions);
      updateRacers();
    });

    function refreshAllRacerOptions() {
      container.querySelectorAll(".mp-player").forEach(slot => {
        const setSelect = $(".mp-player-set", slot);
        const racerSelect = $(".mp-player-racer", slot);
        const currentName = racerSelect.value;
        const set = sets.find(item => item.key === setSelect.value);
        const selectedElsewhere = new Set(
          [...container.querySelectorAll(".mp-player-racer")]
            .filter(select => select !== racerSelect)
            .map(select => select.value)
        );

        const eligible = set.racers.filter(racer =>
          !selectedElsewhere.has(racer.name) || racer.name === currentName
        );

        racerSelect.innerHTML = eligible.map(racer =>
          `<option value="${escapeHTML(racer.name)}">${escapeHTML(racer.name)}</option>`
        ).join("");

        if (eligible.some(racer => racer.name === currentName)) {
          racerSelect.value = currentName;
        }
      });
    }

    container._refresh = refreshAllRacerOptions;
  }

  function getSelectedRacer(setKey, name) {
    const sets = {
      base: state.data.athletes,
      second: state.data.expansionAthletes,
      extra: state.data.extraMileAthletes
    };
    return sets[setKey]?.find(racer => racer.name === name);
  }

  function startGame() {
    const slots = [...$("#mp-slots").querySelectorAll(".mp-player")];
    const used = new Set();
    const players = [];

    for (const [index, slot] of slots.entries()) {
      const setKey = $(".mp-player-set", slot).value;
      const name = $(".mp-player-racer", slot).value;
      const racer = getSelectedRacer(setKey, name);

      if (!racer) {
        alert("One of the selected racers could not be found. Please select it again.");
        return;
      }

      if (used.has(racer.name)) {
        alert("Each racer must be unique. Please choose a different racer.");
        return;
      }
      used.add(racer.name);

      const humans = Number($("#mp-humans").value);
      players.push({
        name: racer.name,
        racer,
        isCPU: index >= humans,
        position: 0,
        finished: false,
        rank: null
      });
    }

    state.players = players;
    state.current = 0;
    state.turn = 1;
    state.finished = [];
    state.gameStarted = true;
    state.busy = false;

    $("#mp-setup").classList.add("mp-hidden");
    $("#mp-game").classList.remove("mp-hidden");
    renderGame();
    advanceCPUIfNeeded();
  }

  function makeTrack() {
    // A compact 32-space loop for this prototype.
    const coords = [];
    for (let c = 0; c < 8; c++) coords.push([0, c]);
    for (let r = 1; r < 7; r++) coords.push([r, 7]);
    for (let c = 6; c >= 0; c--) coords.push([6, c]);
    for (let r = 5; r >= 1; r--) coords.push([r, 0]);
    return coords;
  }

  function renderBoard() {
    const board = $("#mp-board");
    const track = makeTrack();
    const spaceCount = track.length;
    const tokensAt = new Map();

    state.players.forEach((player, index) => {
      if (player.finished) return;
      const pos = Math.min(player.position, spaceCount - 1);
      if (!tokensAt.has(pos)) tokensAt.set(pos, []);
      tokensAt.get(pos).push({ player, index });
    });

    board.innerHTML = track.map((_, index) => {
      const tokens = tokensAt.get(index) || [];
      const label = index === 0 ? "START" :
        index === spaceCount - 1 ? "FINISH" : `Space ${index + 1}`;

      return `
        <div class="mp-space ${index === 0 ? "mp-start" : ""} ${index === spaceCount - 1 ? "mp-finish" : ""}">
          <strong>${label}</strong>
          <div class="mp-tokens">
            ${tokens.map(({ player, index: playerIndex }) =>
              `<span class="mp-token" title="${escapeHTML(player.name)}">${playerIndex + 1}</span>`
            ).join("")}
          </div>
        </div>`;
    }).join("");
  }

  function renderRacers() {
    $("#mp-racers").innerHTML = state.players.map((player, index) => {
      const active = index === state.current && !player.finished;
      const racer = player.racer;
      const image = racer.image || "";
      const positionText = player.finished
        ? `Finished${player.rank ? ` — place ${player.rank}` : ""}`
        : `Position: ${player.position + 1}`;

      return `
        <article class="mp-racer ${active ? "mp-active" : ""}">
          ${image
            ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(player.name)}" loading="lazy" onerror="this.style.display='none'">`
            : `<div aria-hidden="true">🏁</div>`}
          <div>
            <h3>${escapeHTML(player.name)} ${player.isCPU ? "(CPU)" : ""}</h3>
            <p>${escapeHTML(positionText)}</p>
            <p><strong>Power:</strong> ${escapeHTML(racer.power || "See racer profile")}</p>
            <p><strong>Ability:</strong> ${escapeHTML(racer.ability || "Check the official rules")}</p>
          </div>
          <div class="mp-position">${active ? "Current turn" : ""}</div>
        </article>`;
    }).join("");
  }

  function currentPlayer() {
    return state.players[state.current];
  }

  function nextActivePlayer() {
    if (state.players.every(player => player.finished)) return -1;

    for (let count = 0; count < state.players.length; count++) {
      state.current = (state.current + 1) % state.players.length;
      if (!state.players[state.current].finished) return state.current;
    }
    return -1;
  }

  function renderGame(message = "") {
    if (!state.players.length) return;

    const allFinished = state.players.every(player => player.finished);
    const player = currentPlayer();

    $("#mp-turn-title").textContent = allFinished
      ? "Race complete!"
      : `Turn ${state.turn}: ${player.name}${player.isCPU ? " (CPU)" : ""}`;

    $("#mp-turn-message").textContent = message ||
      (allFinished
        ? "All racers have finished."
        : `${player.name} is up. Roll the die to move. Powers are shown as reminders and may require manual resolution.`);

    $("#mp-roll").disabled = allFinished || state.busy;
    $("#mp-next").classList.add("mp-hidden");

    renderBoard();
    renderRacers();
  }

  function rollAndMove() {
    if (state.busy || !state.gameStarted) return;

    const player = currentPlayer();
    if (!player || player.finished) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    player.position += roll;

    let message = `${player.name} rolled ${roll} and moved ${roll} space${roll === 1 ? "" : "s"}.`;

    // Simplified finish rule for this prototype.
    if (player.position >= 32) {
      player.finished = true;
      player.rank = state.finished.length + 1;
      state.finished.push(player.name);
      message += ` ${player.name} finished in place ${player.rank}!`;
    }

    $("#mp-turn-message").textContent = message;

    if (state.players.every(item => item.finished)) {
      renderGame("The race is over!");
      return;
    }

    nextActivePlayer();
    state.turn++;
    renderGame(message);
    advanceCPUIfNeeded();
  }

  function advanceCPUIfNeeded() {
    if (!state.gameStarted || state.busy) return;

    const player = currentPlayer();
    if (!player || !player.isCPU || player.finished) return;

    state.busy = true;
    $("#mp-roll").disabled = true;

    // Short delay so players can see whose CPU turn it is.
    window.setTimeout(() => {
      state.busy = false;
      rollAndMove();
    }, 650);
  }

  function bindEvents() {
    $("#mp-humans").addEventListener("change", buildSlots);
    $("#mp-cpus").addEventListener("change", buildSlots);

    ["#mp-base", "#mp-second", "#mp-extra"].forEach(selector => {
      $(selector).addEventListener("change", buildSlots);
    });

    $("#mp-start").addEventListener("click", startGame);
    $("#mp-roll").addEventListener("click", rollAndMove);

    $("#mp-next").addEventListener("click", () => {
      nextActivePlayer();
      state.turn++;
      renderGame();
      advanceCPUIfNeeded();
    });

    $("#mp-new").addEventListener("click", () => {
      state.gameStarted = false;
      state.players = [];
      state.finished = [];
      $("#mp-game").classList.add("mp-hidden");
      $("#mp-setup").classList.remove("mp-hidden");
      buildSlots();
      $("#mp-status").classList.add("mp-hidden");
    });
  }

  async function init() {
    addStyles();
    showPage();

    try {
      $("#mp-status").textContent = "Loading racer data…";

      state.data = await loadRacers();

      const baseCount = state.data.athletes.length;
      const secondCount = state.data.expansionAthletes.length;
      const extraCount = state.data.extraMileAthletes.length;

      $("#mp-status").textContent =
        `Loaded ${baseCount} base-game, ${secondCount} Second Wind, ` +
        `and ${extraCount} Extra Mile racers.`;

      $("#mp-status").classList.add("mp-hidden");
      $("#mp-setup").classList.remove("mp-hidden");

      bindEvents();
      buildSlots();
    } catch (error) {
      console.error("Magical Athlete loading error:", error);

      $("#mp-status").innerHTML = `
        <h2>Couldn't load the racers</h2>
        <p>${escapeHTML(error.message || "An unknown error occurred.")}</p>
        <p class="mp-muted">
          Check that script.js is in the same repository folder as play.html,
          and that the file still contains the expected racer declarations.
        </p>
        <button id="mp-retry">Try again</button>
      `;

      $("#mp-retry").addEventListener("click", () => {
        init();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
