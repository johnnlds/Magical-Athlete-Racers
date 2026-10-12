(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const E = {
    setup: $("setup"), race: $("race"), finish: $("finish"),
    base: $("base"), second: $("second"), extra: $("extra"),
    humans: $("humans"), cpus: $("cpus"), slots: $("slots"),
    error: $("error"), start: $("start"), randomize: $("randomize"),
    board: $("board"), raceTitle: $("raceTitle"),
    turnStatus: $("turnStatus"), activeRacer: $("activeRacer"),
    die: $("die"), rollText: $("rollText"), roll: $("roll"),
    powerPrompt: $("powerPrompt"), powerName: $("powerName"),
    powerText: $("powerText"), move: $("move"), cpuNotice: $("cpuNotice"),
    standings: $("standings"), remaining: $("remaining"),
    log: $("log"), newRace: $("newRace"), winner: $("winner"),
    finalStandings: $("finalStandings"), again: $("again"),
    dataStatus: $("dataStatus")
  };

  const COLORS = [
    "#c40000", "#1769aa", "#16804a", "#7b3fb0",
    "#d97706", "#008b8b", "#b32672", "#444444",
    "#9b8a00", "#5b69b8", "#a34e26", "#007a63"
  ];

  // 32 spaces around the outside of the board.
  const COORDS = [];
  for (let c = 1; c <= 10; c++) COORDS.push([1, c]);
  for (let r = 2; r <= 8; r++) COORDS.push([r, 10]);
  for (let c = 9; c >= 1; c--) COORDS.push([8, c]);
  for (let r = 7; r >= 2; r--) COORDS.push([r, 1]);

  let allRacers = [];
  let game = null;

  function slug(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  // Read the actual racer data without running the profile page's UI code.
  async function loadRacers() {
    try {
      const response = await fetch("./script.js");
      if (!response.ok) throw new Error("Could not load script.js.");

      const source = await response.text();
      const start = source.indexOf("const athletes =");
      const end = source.indexOf("const allAthletes =", start);

      if (start < 0 || end < 0) {
        throw new Error("The racer arrays could not be found in script.js.");
      }

      let dataCode = source.slice(start, end);

      dataCode = dataCode
        .replace(/\bconst\s+athletes\s*=/, "var athletes =")
        .replace(/\bconst\s+expansionAthletes\s*=/, "var expansionAthletes =")
        .replace(/\bconst\s+extraMileAthletes\s*=/, "var extraMileAthletes =")
        .replace(/\bconst\s+interactionData\s*=/, "var interactionData =");

      const parsed = new Function(
        dataCode +
        "\nreturn { athletes, expansionAthletes, extraMileAthletes, interactionData };"
      )();

      allRacers = [
        ...(parsed.athletes || []).map(r => ({ ...r, set: "Base Game" })),
        ...(parsed.expansionAthletes || []).map(r => ({
          ...r, set: "Second Wind"
        })),
        ...(parsed.extraMileAthletes || []).map(r => ({
          ...r, set: "Extra Mile (unofficial)"
        }))
      ].map((r, i) => ({
        ...r,
        id: slug(r.name) + "-" + i,
        power: r.power || "",
        ability: r.ability || "",
        image: r.image || ""
      }));

      if (allRacers.length < 2) {
        throw new Error("Not enough racers were loaded.");
      }

      E.dataStatus.classList.add("hidden");
      buildSlots();
    } catch (error) {
      console.error(error);
      E.dataStatus.textContent =
        "Racer data could not load. Make sure play.html, play.css, " +
        "play.js, and script.js are in the repository root. " + error.message;
      E.dataStatus.classList.add("error");
      E.start.disabled = true;
    }
  }

  function enabledSets() {
    const sets = [];
    if (E.base.checked) sets.push("Base Game");
    if (E.second.checked) sets.push("Second Wind");
    if (E.extra.checked) sets.push("Extra Mile (unofficial)");
    return sets;
  }

  function availableRacers() {
    const enabled = enabledSets();
    return allRacers.filter(r => enabled.includes(r.set));
  }

  function participantSpecs() {
    const humans = Number(E.humans.value);
    const cpus = Number(E.cpus.value);

    return [
      ...Array.from({ length: humans }, (_, i) => ({
        type: "human", label: "Player " + (i + 1)
      })),
      ...Array.from({ length: cpus }, (_, i) => ({
        type: "cpu", label: "CPU " + (i + 1)
      }))
    ];
  }

  function buildSlots(randomize = false) {
    if (!allRacers.length) return;

    const pool = availableRacers();
    const specs = participantSpecs();
    const oldSelections = [...E.slots.querySelectorAll("select")]
      .map(select => select.value);
    const used = new Set();

    E.slots.innerHTML = "";

    specs.forEach((spec, index) => {
      const slot = document.createElement("div");
      slot.className = "slot";

      const number = document.createElement("div");
      number.className = "slot-number";
      number.textContent = index + 1;

      const content = document.createElement("div");
      const type = document.createElement("div");
      type.className = "slot-type " + spec.type;
      type.textContent = spec.label + (spec.type === "cpu" ? " · CPU" : " · Human");

      const label = document.createElement("label");
      label.textContent = "Racer";

      const select = document.createElement("select");
      select.setAttribute("aria-label", spec.label + " racer");

      let desired = !randomize ? oldSelections[index] : "";

      if (!pool.some(r => r.id === desired) || used.has(desired)) {
        desired = "";
      }

      if (!desired) {
        const available = pool.filter(r => !used.has(r.id));
        const choice = randomize
          ? available[Math.floor(Math.random() * available.length)]
          : available[0];
        desired = choice ? choice.id : "";
      }

      pool.forEach(racer => {
        const option = document.createElement("option");
        option.value = racer.id;
        option.textContent = racer.name + " — " + racer.set;
        option.selected = racer.id === desired;
        select.appendChild(option);
      });

      if (desired) used.add(desired);

      select.addEventListener("change", () => {
        // Rebuild only to validate the selections, preserving valid choices.
        validateSlots();
      });

      label.appendChild(select);
      content.append(type, label);
      slot.append(number, content);
      E.slots.appendChild(slot);
    });

    validateSlots();
  }

  function validateSlots() {
    const count = participantSpecs().length;
    const pool = availableRacers();
    const selected = [...E.slots.querySelectorAll("select")].map(s => s.value);
    const duplicate = new Set(selected).size !== selected.length;

    if (!pool.length) {
      E.error.textContent = "Select at least one racer set.";
    } else if (pool.length < count) {
      E.error.textContent =
        "Only " + pool.length + " racers are available for " + count + " participants.";
    } else if (duplicate) {
      E.error.textContent = "Each participant must have a different racer.";
    } else {
      E.error.textContent = "";
    }

    E.start.disabled = !pool.length || pool.length < count || duplicate;
  }

  function getParticipants() {
    const specs = participantSpecs();
    const selections = [...E.slots.querySelectorAll("select")].map(s => s.value);

    if (new Set(selections).size !== selections.length) {
      throw new Error("Each participant must choose a different racer.");
    }

    return specs.map((spec, i) => {
      const racer = allRacers.find(r => r.id === selections[i]);
      if (!racer) throw new Error("Please select a valid racer for everyone.");

      return {
        ...spec,
        racer,
        position: 0,
        finished: false,
        finishPlace: null,
        color: COLORS[i % COLORS.length],
        lastRoll: null
      };
    });
  }

  function startGame() {
    try {
      const racers = getParticipants();

      game = {
        racers,
        current: 0,
        turn: 1,
        roll: null,
        phase: "roll",
        finishOrder: []
      };

      E.setup.classList.add("hidden");
      E.finish.classList.add("hidden");
      E.race.classList.remove("hidden");
      E.raceTitle.textContent = racers.length + "-racer race";
      E.log.innerHTML = "";

      addLog("Race started!");
      renderBoard();
      renderTurn();
      runCPU();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      E.error.textContent = error.message;
    }
  }

  function renderBoard() {
    E.board.innerHTML = "";

    COORDS.forEach(([row, col], index) => {
      const space = document.createElement("div");
      space.className = "space";
      space.style.gridRow = row;
      space.style.gridColumn = col;

      if (index === 0) space.classList.add("start");
      if (index === 31) space.classList.add("finish");

      const number = document.createElement("span");
      number.className = "space-number";
      number.textContent = index === 0 ? "START" : index;
      space.appendChild(number);

      if (index === 31) {
        const label = document.createElement("span");
        label.className = "space-label";
        label.textContent = "FINISH";
        space.appendChild(label);
      }

      const pawns = document.createElement("div");
      pawns.className = "pawns";

      game.racers
        .filter(r => !r.finished && r.position === index)
        .forEach(r => {
          const pawn = document.createElement("span");
          pawn.className = "pawn";
          pawn.style.setProperty("--pawn", r.color);
          pawn.textContent = game.racers.indexOf(r) + 1;
          pawn.title = r.label + ": " + r.racer.name;
          pawns.appendChild(pawn);
        });

      space.appendChild(pawns);
      E.board.appendChild(space);
    });

    const center = document.createElement("div");
    center.className = "board-center";
    center.innerHTML =
      "<strong>MAGICAL ATHLETE</strong>" +
      "<p>Roll · check powers · race to the finish</p>" +
      "<p>32-space prototype track</p>";
    E.board.appendChild(center);
  }

  function currentRacer() {
    return game.racers[game.current];
  }

  function renderTurn() {
    if (!game) return;

    const racer = currentRacer();
    const isCPU = racer.type === "cpu";

    E.turnStatus.textContent =
      "Turn " + game.turn + " · " + racer.label +
      (isCPU ? " (CPU)" : "");

    E.activeRacer.innerHTML = "";

    if (racer.racer.image) {
      const img = document.createElement("img");
      img.src = racer.racer.image;
      img.alt = racer.racer.name;
      img.onerror = () => img.remove();
      E.activeRacer.appendChild(img);
    }

    const details = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = racer.racer.name;

    const type = document.createElement("small");
    type.textContent = racer.label +
      (isCPU ? " · CPU controlled" : " · Human player");

    details.append(name, type);
    E.activeRacer.appendChild(details);

    E.roll.classList.toggle("hidden", game.phase !== "roll" || isCPU);
    E.roll.disabled = game.phase !== "roll";
    E.powerPrompt.classList.toggle("hidden", game.phase !== "resolve");

    E.cpuNotice.textContent = isCPU
      ? "The CPU takes its turn automatically."
      : "Pass the device to this player before rolling.";

    if (game.phase === "roll") {
      E.die.textContent = "—";
      E.die.classList.remove("rolled");
      E.rollText.textContent = "Ready to roll";
    } else {
      E.die.textContent = game.roll;
      E.die.classList.add("rolled");
      E.rollText.textContent = "Rolled " + game.roll;
    }

    if (game.phase === "resolve") {
      E.powerName.textContent = racer.racer.power || "Racer power";
      E.powerText.textContent =
        racer.racer.ability || "Check the racer card for its power.";
      E.move.textContent = "Resolve power & move " + game.roll;
    }

    renderStandings();
  }

  function rollDie(isCPU = false) {
    if (!game || game.phase !== "roll") return;

    const racer = currentRacer();
    game.roll = Math.floor(Math.random() * 6) + 1;
    game.phase = "resolve";
    racer.lastRoll = game.roll;

    addLog(racer.racer.name + " rolled " + game.roll + ".");
    renderTurn();

    // CPU turns automatically proceed after a short pause.
    if (isCPU) {
      window.setTimeout(() => resolveMove(true), 650);
    }
  }

  function resolveMove(isCPU = false) {
    if (!game || game.phase !== "resolve") return;

    const racer = currentRacer();
    const roll = game.roll;
    const previous = racer.position;

    racer.position += roll;

    addLog(
      racer.racer.name + " moved " + roll + " space" +
      (roll === 1 ? "" : "s") + "."
    );

    if (racer.position >= 32) {
      racer.finished = true;
      racer.finishPlace = game.finishOrder.length + 1;
      game.finishOrder.push(racer);
      addLog("🏁 " + racer.racer.name + " finished in place " + racer.finishPlace + "!");
    }

    game.roll = null;

    if (game.racers.every(r => r.finished)) {
      finishGame();
      return;
    }

    advanceTurn();
    renderBoard();
    renderTurn();
    runCPU();
  }

  function advanceTurn() {
    let checked = 0;

    do {
      game.current = (game.current + 1) % game.racers.length;
      checked++;
    } while (game.racers[game.current].finished && checked <= game.racers.length);

    game.turn++;
    game.phase = "roll";
  }

  function runCPU() {
    if (!game || game.phase !== "roll" || currentRacer().type !== "cpu") return;

    const cpu = currentRacer();
    E.roll.classList.add("hidden");
    E.cpuNotice.textContent = "CPU is rolling…";

    window.setTimeout(() => {
      if (game && game.phase === "roll" && currentRacer() === cpu) {
        rollDie(true);
      }
    }, 500);
  }

  function renderStandings() {
    if (!game) return;

    E.standings.innerHTML = "";

    const sorted = [...game.racers].sort((a, b) => {
      if (a.finished && b.finished) return a.finishPlace - b.finishPlace;
      if (a.finished) return -1;
      if (b.finished) return 1;
      return b.position - a.position;
    });

    sorted.forEach(r => {
      const li = document.createElement("li");
      if (r === currentRacer() && !r.finished) li.classList.add("current");

      const row = document.createElement("div");
      row.className = "standing";

      if (r.racer.image) {
        const img = document.createElement("img");
        img.src = r.racer.image;
        img.alt = "";
        img.onerror = () => img.remove();
        row.appendChild(img);
      }

      const text = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = r.racer.name;

      const small = document.createElement("small");
      small.textContent = r.finished
        ? "Finished #" + r.finishPlace
        : r.label + " · position " + r.position;

      text.append(strong, small);
      row.appendChild(text);
      li.appendChild(row);
      E.standings.appendChild(li);
    });

    E.remaining.textContent =
      game.racers.filter(r => !r.finished).length + " racing";
  }

  function addLog(message) {
    const li = document.createElement("li");
    li.textContent = message;
    E.log.prepend(li);

    while (E.log.children.length > 40) {
      E.log.lastElementChild.remove();
    }
  }

  function finishGame() {
    E.race.classList.add("hidden");
    E.finish.classList.remove("hidden");
    E.finalStandings.innerHTML = "";

    game.finishOrder.forEach((r, i) => {
      const li = document.createElement("li");
      const row = document.createElement("div");
      row.className = "standing";

      if (r.racer.image) {
        const img = document.createElement("img");
        img.src = r.racer.image;
        img.alt = "";
        img.onerror = () => img.remove();
        row.appendChild(img);
      }

      const text = document.createElement("span");
      const strong = document.createElement("strong");
      strong.textContent = (i + 1) + ". " + r.racer.name;

      const small = document.createElement("small");
      small.textContent = r.label + " · " + r.racer.set;

      text.append(strong, small);
      row.appendChild(text);
      li.appendChild(row);
      E.finalStandings.appendChild(li);
    });

    E.winner.textContent = game.finishOrder[0]
      ? game.finishOrder[0].racer.name + " wins!"
      : "Race complete!";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showSetup() {
    game = null;
    E.race.classList.add("hidden");
    E.finish.classList.add("hidden");
    E.setup.classList.remove("hidden");
    buildSlots();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  [E.base, E.second, E.extra].forEach(el =>
    el.addEventListener("change", () => buildSlots())
  );

  [E.humans, E.cpus].forEach(el =>
    el.addEventListener("change", () => buildSlots())
  );

  E.randomize.addEventListener("click", () => buildSlots(true));
  E.start.addEventListener("click", startGame);
  E.roll.addEventListener("click", () => rollDie(false));
  E.move.addEventListener("click", () => resolveMove(false));
  E.newRace.addEventListener("click", showSetup);
  E.again.addEventListener("click", showSetup);

  loadRacers();
})();
