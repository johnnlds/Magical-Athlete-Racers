// ============================================================
// MAGICAL ATHLETE — CHARACTER PROFILES
// ============================================================

const athletes = [
  {
    name: "Alchemist",
    image: "images/alchemist.png",
    ability: "Transmute ‘N’ Scoot",
    abilityText: "When I roll a 1 or 2 for my main move, I can move 4 instead."
  },
  {
    name: "Baba Yaga",
    image: "images/baba-yaga.png",
    ability: "Leg It",
    abilityText: "Trip any racer that stops on my space, or when I stop on theirs."
  },
  {
    name: "Banana",
    image: "images/banana.png",
    ability: "The Slip",
    abilityText: "I trip any racer that passes me."
  },
  {
    name: "Blimp",
    image: "images/blimp.png",
    ability: "Blow It",
    abilityText: "When I start my turn before the second corner of the track, I get +3 to my main move. On or after that corner, I get -1."
  },
  {
    name: "Centaur",
    image: "images/centaur.png",
    ability: "Hoofwhack",
    abilityText: "When I pass a racer, they move -2. They cannot be moved farther back than Start."
  },
  {
    name: "Cheerleader",
    image: "images/cheerleader.png",
    ability: "Rah Rah",
    abilityText: "Before my main move, I can make the racer(s) in last place move 2. If I do, I move 1."
  },
  {
    name: "Coach",
    image: "images/coach.png",
    ability: "Good Hustle",
    abilityText: "Everyone on my space gets +1 to their main move, including me."
  },
  {
    name: "Copycat",
    image: "images/copycat.png",
    ability: "Copy That",
    abilityText: "I have the power of the racer currently in the lead. If there's a tie, I pick."
  },
  {
    name: "Dicemonger",
    image: "images/dicemonger.png",
    ability: "Dicey Deals",
    abilityText: "Anyone can reroll their main move once per turn. When another racer rerolls, I move 1."
  },
  {
    name: "Duelist",
    image: "images/duelist.png",
    ability: "Duel!",
    abilityText: "Whenever a racer shares my space, I can shout DUEL! We roll our dice and whoever rolls highest moves 2. I win ties."
  },
  {
    name: "Egg",
    image: "images/egg.png",
    ability: "Scramble",
    abilityText: "Before my race, draw 3 new racers from the deck and pick one. I have its powers."
  },
  {
    name: "Flip Flop",
    image: "images/flip-flop.png",
    ability: "Flop Flip",
    abilityText: "I can skip rolling for my main move and swap spaces with another racer instead."
  },
  {
    name: "Genius",
    image: "images/genius.png",
    ability: "Think Good",
    abilityText: "I can predict what number I’ll roll for my main move. If I’m right, I take another turn after this one."
  },
  {
    name: "Gunk",
    image: "images/gunk.png",
    ability: "Goop ‘Em",
    abilityText: "Other racers get -1 to their main move."
  },
  {
    name: "Hare",
    image: "images/hare.png",
    ability: "Hubris",
    abilityText: "I get +2 to my main move. If I start my turn alone in the lead, I skip my main move."
  },
  {
    name: "Heckler",
    image: "images/heckler.png",
    ability: "Schadenfreude",
    abilityText: "When a racer ends their turn within 1 space of where they started, I move 2."
  },
  {
    name: "Huge Baby",
    image: "images/huge-baby.png",
    ability: "Really Huge",
    abilityText: "No one can ever be on my space except at Start. If someone would land there, put them on the space behind me instead."
  },
  {
    name: "Hypnotist",
    image: "images/hypnotist.png",
    ability: "Hssssst",
    abilityText: "Before my main move, I can warp another racer to my space."
  },
  {
    name: "Inchworm",
    image: "images/inchworm.png",
    ability: "Wriggle",
    abilityText: "When another racer rolls a 1 for their main move, they skip that move and I move 1."
  },
  {
    name: "Lackey",
    image: "images/lackey.png",
    ability: "Very Good Sire",
    abilityText: "When another racer rolls a 6, I move 2 before they move."
  },
  {
    name: "Leaptoad",
    image: "images/leaptoad.png",
    ability: "Jumpfrog",
    abilityText: "While moving, I skip spaces occupied by other racers."
  },
  {
    name: "Legs",
    image: "images/legs.png",
    ability: "Jog",
    abilityText: "I can skip rolling and move 5 instead."
  },
  {
    name: "Lovable Loser",
    image: "images/lovable-loser.png",
    ability: "D’Aww",
    abilityText: "Before my main move, I get a 1-point chip if I’m alone in last place."
  },
  {
    name: "Magician",
    image: "images/magician.png",
    ability: "Poof",
    abilityText: "I can reroll my main move up to two times. I must use the final roll."
  },
  {
    name: "Mastermind",
    image: "images/mastermind.png",
    ability: "Know-It-All",
    abilityText: "At the start of my first turn, I predict which racer will win. If correct, the race immediately ends and I finish 2nd."
  },
  {
    name: "M.O.U.T.H.",
    image: "images/mouth.png",
    ability: "Chomp",
    abilityText: "When I stop on a space with exactly one other racer, that racer is eliminated."
  },
  {
    name: "Party Animal",
    image: "images/party-animal.png",
    ability: "Animal Magnetism",
    abilityText: "Before my main move, all racers move 1 space towards me. Each other racer on my space gives me +1 to my main move."
  },
  {
    name: "Rocket Scientist",
    image: "images/rocket-scientist.png",
    ability: "Kablooey",
    abilityText: "When I roll for my main move, I can have double that number. If I do, I trip."
  },
  {
    name: "Romantic",
    image: "images/romantic.png",
    ability: "Ah, Love!",
    abilityText: "When anyone stops on a space with exactly one other racer, I move 2."
  },
  {
    name: "Scoocher",
    image: "images/scoocher.png",
    ability: "Scooch Scooch",
    abilityText: "When another racer’s power happens, I move 1."
  },
  {
    name: "Sisyphus",
    image: "images/sisyphus.png",
    ability: "Keep Rollin'",
    abilityText: "Before my race, I take 4 point chips. When I roll a 6 for my main move, instead of moving, I warp to the Start and lose 1 point chip."
  },
  {
    name: "Skipper",
    image: "images/skipper.png",
    ability: "Salty Dog",
    abilityText: "When anyone rolls a 1 for their main move, I go next in turn order."
  },
  {
    name: "Stickler",
    image: "images/stickler.png",
    ability: "Actually…",
    abilityText: "I must land exactly on the Finish to win."
  },
  {
    name: "Suckerfish",
    image: "images/suckerfish.png",
    ability: "Sucker!",
    abilityText: "When another racer moves, I can move with them."
  },
  {
    name: "Third Wheel",
    image: "images/third-wheel.png",
    ability: "Roll Through",
    abilityText: "Before my main move, I can warp to a space with exactly two other racers."
  },
  {
    name: "Twin",
    image: "images/twin.png",
    ability: "Double Dip",
    abilityText: "I have the power of my twin. If my twin is eliminated, I lose this power."
  }
];


// ============================================================
// INTERACTIONS
// ============================================================

const interactionData = [

  {
    a: "Alchemist",
    b: "Coach",
    text: "If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot, Coach’s +1 applies to the 4-space main move, so Alchemist moves 5."
  },
  {
    a: "Alchemist",
    b: "Gunk",
    text: "If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot to move 4, Gunk reduces Alchemist’s movement to 3. The die result remains 1 or 2."
  },
  {
    a: "Alchemist",
    b: "Inchworm",
    text: "If Alchemist rolls 1, Inchworm makes Alchemist skip the main move. Alchemist therefore cannot use Transmute ‘N’ Scoot to move 4."
  },
  {
    a: "Alchemist",
    b: "Skipper",
    text: "If Alchemist rolls 1 and uses Transmute ‘N’ Scoot to move 4, Skipper still triggers because Alchemist rolled a 1. Skipper takes the next turn after Alchemist’s turn."
  },

  {
    a: "Baba Yaga",
    b: "Duelist",
    text: "If Duelist shares Baba Yaga’s space, they can duel, but Duelist still trips from Baba Yaga."
  },
  {
    a: "Baba Yaga",
    b: "Huge Baby",
    text: "The two cannot share a space, so Huge Baby cannot be tripped."
  },
  {
    a: "Baba Yaga",
    b: "Hypnotist",
    text: "Hypnotist can warp Baba Yaga onto Hypnotist’s space, but Hypnotist trips."
  },
  {
    a: "Baba Yaga",
    b: "Party Animal",
    text: "If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them."
  },

  {
    a: "Banana",
    b: "Centaur",
    text: "If Centaur passes Banana, Centaur’s Hoofwhack moves Banana back 2, and Banana then trips Centaur for passing Banana."
  },
  {
    a: "Banana",
    b: "Leaptoad",
    text: "Leaptoad skips over Banana’s occupied space, but that still counts as passing Banana. Banana therefore trips Leaptoad after its movement."
  },

  {
    a: "Blimp",
    b: "Coach",
    text: "If Blimp shares Coach’s space, Coach’s +1 applies to Blimp’s main move in addition to Blimp’s +3 or -1."
  },
  {
    a: "Blimp",
    b: "Gunk",
    text: "Gunk’s -1 applies to Blimp’s main move. Before the second corner, Blimp’s +3 and Gunk’s -1 result in +2; on or after the second corner, Blimp’s -1 and Gunk’s -1 result in -2."
  },

  {
    a: "Coach",
    b: "Gunk",
    text: "If Coach is on Gunk’s board, Gunk’s -1 applies to Coach’s main move while Coach’s +1 applies to Coach’s own main move. The two modifiers cancel, leaving Coach’s normal die result."
  },
  {
    a: "Coach",
    b: "Legs",
    text: "Legs’ JOG counts as a main move, so Coach’s +1 applies. Legs moves 6 instead of 5."
  },

  {
    a: "Copycat",
    b: "Gunk",
    text: "If Copycat is copying Gunk, everyone else has -2 to their move, Gunk has -1, and Copycat has -1."
  },
  {
    a: "Copycat",
    b: "Hare",
    text: "If Copycat is copying Hare, Copycat gets Hare’s +2 movement ability. If the lead changes, Copycat immediately changes to the new leader’s power."
  },
  {
    a: "Copycat",
    b: "Huge Baby",
    text: "If Copycat is copying Huge Baby, Huge Baby’s power takes priority."
  },
  {
    a: "Copycat",
    b: "Lead Racer",
    text: "Copycat continuously copies the racer currently in the lead, not just at the beginning of its turn. If the lead changes, Copycat’s power changes immediately."
  },

  {
    a: "Dicemonger",
    b: "Inchworm",
    text: "If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened."
  },
  {
    a: "Dicemonger",
    b: "Magician",
    text: "Magician’s own rerolls do not make Dicemonger move. Dicemonger only moves when another racer rerolls."
  },
  {
    a: "Dicemonger",
    b: "Scoocher",
    text: "Whenever another racer uses Dicemonger’s reroll, Dicemonger moves 1 and Scoocher also moves 1 because a reroll occurred."
  },
  {
    a: "Dicemonger",
    b: "Skipper",
    text: "If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened."
  },

  {
    a: "Duelist",
    b: "Huge Baby",
    text: "Duelist cannot share Huge Baby’s space, so they cannot duel."
  },
  {
    a: "Duelist",
    b: "M.O.U.T.H.",
    text: "If Duelist duels M.O.U.T.H. and M.O.U.T.H. wins, M.O.U.T.H. moves 2. If that movement ends with exactly one other racer on its space, M.O.U.T.H. eliminates that racer. If M.O.U.T.H. lands on Duelist’s space, they do not duel and Duelist is eaten."
  },
  {
    a: "Duelist",
    b: "Stickler",
    text: "If Duelist wins a duel near the finish and the 2-space movement would overshoot the finish, Stickler prevents Duelist from crossing. Duelist does not move."
  },

  {
    a: "Gunk",
    b: "Heckler",
    text: "If Gunk reduces a racer’s main move so they finish their turn within 1 space of where they started, Heckler triggers and moves 2."
  },
  {
    a: "Gunk",
    b: "Lackey",
    text: "Gunk changes movement, not the die result. A racer who rolls 6 still rolled a 6, so Lackey still moves 2 before that racer."
  },
  {
    a: "Gunk",
    b: "Legs",
    text: "Gunk reduces Legs’ 5-space JOG to 4. JOG still counts as Legs’ main move."
  },
  {
    a: "Gunk",
    b: "Scoocher",
    text: "Scoocher moves 1 for each -1 that Gunk applies to another racer’s main move."
  },

  {
    a: "Huge Baby",
    b: "M.O.U.T.H.",
    text: "Huge Baby cannot be eaten by M.O.U.T.H."
  },
  {
    a: "Huge Baby",
    b: "Party Animal",
    text: "If Huge Baby is moved onto Party Animal’s space by Party Animal’s power, everyone on that space is moved back 1."
  },
  {
    a: "Huge Baby",
    b: "Scoocher",
    text: "If Scoocher’s power moves Scoocher onto Huge Baby’s space, Huge Baby places Scoocher one space behind."
  },
  {
    a: "Huge Baby",
    b: "Suckerfish",
    text: "Suckerfish cannot follow Huge Baby."
  },

  {
    a: "Inchworm",
    b: "Magician",
    text: "Magician can reroll a 1 before Inchworm’s trigger resolves. If the reroll is not 1, Inchworm does not trigger."
  },
  {
    a: "Inchworm",
    b: "Skipper",
    text: "When another racer rolls 1, Inchworm makes that racer skip the main move and moves 1. Skipper then takes the next turn. Both abilities trigger."
  },

  {
    a: "Leaptoad",
    b: "Scoocher",
    text: "Scoocher moves 1 for every occupied space Leaptoad skips. If Leaptoad skips two occupied spaces, Scoocher moves twice."
  },

  {
    a: "Magician",
    b: "Scoocher",
    text: "Every Magician reroll triggers Scoocher, so Scoocher moves 1 for each reroll, even if the reroll is not ultimately used."
  },

  {
    a: "Party Animal",
    b: "Baba Yaga",
    text: "If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them because they arrived simultaneously."
  },
  {
    a: "Party Animal",
    b: "M.O.U.T.H.",
    text: "When Party Animal moves M.O.U.T.H. simultaneously onto another racer, M.O.U.T.H. does not eliminate that racer from the simultaneous arrival."
  },
  {
    a: "Party Animal",
    b: "Romantic",
    text: "When Party Animal moves racers simultaneously toward Party Animal, Romantic does not trigger from those simultaneous arrivals."
  },

  {
    a: "Rocket Scientist",
    b: "Coach",
    text: "If Rocket Scientist shares Coach’s space, Coach’s +1 applies to Rocket Scientist’s main move, including a doubled main move."
  },
  {
    a: "Rocket Scientist",
    b: "Gunk",
    text: "Gunk reduces Rocket Scientist’s resulting main-move distance by 1. If Rocket Scientist doubles a roll, Gunk reduces the doubled movement by 1."
  },
  {
    a: "Rocket Scientist",
    b: "Inchworm",
    text: "If Rocket Scientist rolls 1 and doubles it to 2, Inchworm still triggers because the die roll was 1. Rocket Scientist skips the main move; its doubling does not prevent Inchworm."
  },
  {
    a: "Rocket Scientist",
    b: "Skipper",
    text: "If Rocket Scientist rolls 1 and doubles it to 2, Skipper still triggers because the die roll was 1."
  },

  {
    a: "Romantic",
    b: "Suckerfish",
    text: "If Suckerfish follows Romantic’s movement and arrives simultaneously, Romantic does not trigger from Suckerfish’s arrival."
  },

  {
    a: "Scoocher",
    b: "Suckerfish",
    text: "If Scoocher moves while sharing a space with Suckerfish, Suckerfish can follow Scoocher to the new space. Suckerfish’s movement can then trigger Scoocher again, so this chain can continue."
  },

  {
    a: "Stickler",
    b: "Hare",
    text: "Hare’s +2 can make it overshoot the finish. If Hare would overshoot, Stickler prevents the movement and Hare does not cross."
  },
  {
    a: "Stickler",
    b: "Scoocher",
    text: "Scoocher’s 1-space movement is also subject to Stickler. If that movement would overshoot the finish, Scoocher does not cross."
  },

  {
    a: "General",
    b: "Simultaneous Arrival",
    text: "Stopping-on-a-space powers do not trigger from simultaneous arrival under the August 2026 rule."
  },

  {
    a: "Third Wheel",
    b: "Baba Yaga",
    text: "If Third Wheel warps onto a space containing Baba Yaga, Baba Yaga’s ability trips Third Wheel."
  }

];


// ============================================================
// CHARACTER LOOKUP
// ============================================================

const characterMap = {};

athletes.forEach((athlete) => {
  characterMap[athlete.name] = athlete;
});


// ============================================================
// DOM ELEMENTS
// ============================================================

const characterGrid = document.getElementById("characterGrid");
const characterCount = document.getElementById("characterCount");
const noResults = document.getElementById("noResults");

const searchInput = document.getElementById("searchInput");

const profileModal = document.getElementById("profileModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalButton = document.getElementById("closeModal");

const profileImage = document.getElementById("profileImage");
const profileName = document.getElementById("profileName");
const profileAbilityName = document.getElementById("profileAbilityName");
const profileAbilityText = document.getElementById("profileAbilityText");

const interactionList = document.getElementById("interactionList");
const interactionCount = document.getElementById("interactionCount");
const noInteractions = document.getElementById("noInteractions");


// ============================================================
// HTML ESCAPING
// ============================================================

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// ============================================================
// MAKE CHARACTER NAMES CLICKABLE
// ============================================================

function linkCharacterNames(text, currentCharacter) {
  let result = escapeHtml(text);

  const names = athletes
    .map((athlete) => athlete.name)
    .sort((a, b) => b.length - a.length);

  names.forEach((name) => {

    if (name === currentCharacter) {
      return;
    }

    const escapedName = escapeHtml(name);

    const pattern = new RegExp(
      `(?<![\\w.-])${escapedName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w.-])`,
      "g"
    );

    result = result.replace(
      pattern,
      `<button class="character-link" type="button" data-character="${escapeHtml(name)}">${escapedName}</button>`
    );
  });

  return result;
}


// ============================================================
// GET INTERACTIONS FOR A CHARACTER
// ============================================================

function getInteractions(name) {
  return interactionData.filter((interaction) => {
    return interaction.a === name;
  });
}


// ============================================================
// RENDER CHARACTER CARDS
// ============================================================

function renderCharacters(searchTerm = "") {

  if (!characterGrid) {
    console.error("characterGrid was not found.");
    return;
  }

  const search = searchTerm.trim().toLowerCase();

  const filtered = athletes.filter((athlete) => {
    return athlete.name.toLowerCase().includes(search);
  });

  characterGrid.innerHTML = "";

  filtered.forEach((athlete) => {

    const card = document.createElement("article");

    card.className = "character-card";

    card.tabIndex = 0;

    card.setAttribute(
      "role",
      "button"
    );

    card.setAttribute(
      "aria-label",
      `Open ${athlete.name} profile`
    );

    card.innerHTML = `
      <img
        class="character-card-image"
        src="${athlete.image}"
        alt="${escapeHtml(athlete.name)}"
        loading="lazy"
      >

      <h3 class="character-card-name">
        ${escapeHtml(athlete.name)}
      </h3>
    `;

    card.addEventListener("click", () => {
      openProfile(athlete.name);
    });

    card.addEventListener("keydown", (event) => {

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProfile(athlete.name);
      }

    });

    characterGrid.appendChild(card);
  });

  if (characterCount) {
    characterCount.textContent =
      `${filtered.length} racer${filtered.length === 1 ? "" : "s"}`;
  }

  if (noResults) {
    noResults.classList.toggle(
      "hidden",
      filtered.length !== 0
    );
  }
}


// ============================================================
// OPEN PROFILE
// ============================================================

function openProfile(name) {

  const athlete = characterMap[name];

  if (!athlete) {
    console.error(`Character not found: ${name}`);
    return;
  }

  profileImage.src = athlete.image;
  profileImage.alt = athlete.name;

  profileName.textContent = athlete.name;

  profileAbilityName.textContent = athlete.ability;

  profileAbilityText.textContent = athlete.abilityText;


  const interactions = getInteractions(name);

  interactionList.innerHTML = "";

  if (interactionCount) {
    interactionCount.textContent =
      `${interactions.length} interaction${interactions.length === 1 ? "" : "s"}`;
  }

  if (interactions.length === 0) {

    noInteractions.classList.remove("hidden");

  } else {

    noInteractions.classList.add("hidden");

    interactions.forEach((interaction) => {

      const card = document.createElement("article");

      card.className = "interaction-card";

      const otherCharacter =
        interaction.b === "Lead Racer" ||
        interaction.b === "Simultaneous Arrival"
          ? interaction.b
          : characterMap[interaction.b]
            ? interaction.b
            : interaction.b;

      let characterHeader;

      if (characterMap[otherCharacter]) {

        characterHeader = `
          <button
            class="character-link interaction-character"
            type="button"
            data-character="${escapeHtml(otherCharacter)}"
          >
            ${escapeHtml(otherCharacter)}
          </button>
        `;

      } else {

        characterHeader = `
          <div class="interaction-character">
            ${escapeHtml(otherCharacter)}
          </div>
        `;

      }

      card.innerHTML = `
        ${characterHeader}

        <div class="interaction-text">
          ${linkCharacterNames(interaction.text, name)}
        </div>
      `;

      interactionList.appendChild(card);
    });
  }


  profileModal.classList.add("open");

  profileModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";

  if (interactionList) {
    interactionList.scrollTop = 0;
  }
}


// ============================================================
// CLOSE PROFILE
// ============================================================

function closeProfile() {

  profileModal.classList.remove("open");

  profileModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";
}


// ============================================================
// SEARCH
// ============================================================

if (searchInput) {

  searchInput.addEventListener("input", (event) => {

    renderCharacters(event.target.value);

  });

}


// ============================================================
// CLOSE BUTTON
// ============================================================

if (closeModalButton) {

  closeModalButton.addEventListener(
    "click",
    closeProfile
  );

}


// ============================================================
// CLICK OUTSIDE PROFILE
// ============================================================

if (modalOverlay) {

  modalOverlay.addEventListener(
    "click",
    closeProfile
  );

}


// ============================================================
// CLICK CHARACTER NAME INSIDE INTERACTIONS
// ============================================================

document.addEventListener("click", (event) => {

  const button =
    event.target.closest(".character-link");

  if (!button) {
    return;
  }

  const character =
    button.dataset.character;

  if (character && characterMap[character]) {

    openProfile(character);

  }

});


// ============================================================
// ESCAPE KEY
// ============================================================

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    profileModal.classList.contains("open")
  ) {

    closeProfile();

  }

});


// ============================================================
// INITIAL RENDER
// ============================================================

renderCharacters();

console.log(
  `Magical Athlete loaded: ${athletes.length} characters, ${interactionData.length} interactions.`
);
