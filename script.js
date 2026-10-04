// ============================================================
// MAGICAL ATHLETE — CHARACTER PROFILES
// ============================================================

const athletes = [

  {
    name: "Alchemist",
    power: "Transmute ‘N’ Scoot",
    ability: "When I roll a 1 or 2 for my main move, I can move 4 instead.",
    image: "images/IMG_3304.png"
  },

  {
    name: "Baba Yaga",
    power: "Leg It",
    ability: "Trip any racer that stops on my space, or when I stop on theirs.",
    image: "images/IMG_3305.png"
  },

  {
    name: "Banana",
    power: "The Slip",
    ability: "I trip any racer that passes me.",
    image: "images/IMG_3306.png"
  },

  {
    name: "Blimp",
    power: "Blow It",
    ability: "When I start my turn before the second corner of the track, I get +3 to my main move. On or after that corner, I get -1.",
    image: "images/IMG_3307.png"
  },

  {
    name: "Centaur",
    power: "Hoofwhack",
    ability: "When I pass a racer, they move -2. They cannot be moved farther back than Start.",
    image: "images/IMG_3308.png"
  },

  {
    name: "Cheerleader",
    power: "Rah Rah",
    ability: "Before my main move, I can make the racer(s) in last place move 2. If I do, I move 1.",
    image: "images/IMG_3309.png"
  },

  {
    name: "Coach",
    power: "Good Hustle",
    ability: "Everyone on my space gets +1 to their main move, including me.",
    image: "images/IMG_3310.png"
  },

  {
    name: "Copycat",
    power: "Copy That",
    ability: "I have the power of the racer currently in the lead. If there's a tie, I pick.",
    image: "images/IMG_3311.png"
  },

  {
    name: "Dicemonger",
    power: "Dicey Deals",
    ability: "Anyone can reroll their main move once per turn. When another racer rerolls, I move 1.",
    image: "images/IMG_3312.png"
  },

  {
    name: "Duelist",
    power: "Duel!",
    ability: "Whenever a racer shares my space, I can shout DUEL! We roll our dice and whoever rolls highest moves 2. I win ties.",
    image: "images/IMG_3313.png"
  },

  {
    name: "Egg",
    power: "Scramble",
    ability: "Before my race, draw 3 new racers from the deck and pick one. I have its powers.",
    image: "images/IMG_3314.png"
  },

  {
    name: "Flip Flop",
    power: "Flop Flip",
    ability: "I can skip rolling for my main move and swap spaces with another racer instead.",
    image: "images/IMG_3315.png"
  },

  {
    name: "Genius",
    power: "Think Good",
    ability: "I can predict what number I’ll roll for my main move. If I’m right, I take another turn after this one.",
    image: "images/IMG_3316.png"
  },

  {
    name: "Gunk",
    power: "Goop ‘Em",
    ability: "Other racers get -1 to their main move.",
    image: "images/IMG_3317.png"
  },

  {
    name: "Hare",
    power: "Hubris",
    ability: "I get +2 to my main move. If I start my turn alone in the lead, I skip my main move.",
    image: "images/IMG_3318.png"
  },

  {
    name: "Heckler",
    power: "Schadenfreude",
    ability: "When a racer ends their turn within 1 space of where they started, I move 2.",
    image: "images/IMG_3319.png"
  },

  {
    name: "Huge Baby",
    power: "Really Huge",
    ability: "No one can ever be on my space except at Start. If someone would land there, put them on the space behind me instead.",
    image: "images/IMG_3320.png"
  },

  {
    name: "Hypnotist",
    power: "Hssssst",
    ability: "Before my main move, I can warp another racer to my space.",
    image: "images/IMG_3321.png"
  },

  {
    name: "Inchworm",
    power: "Wriggle",
    ability: "When another racer rolls a 1 for their main move, they skip that move and I move 1.",
    image: "images/IMG_3322.png"
  },

  {
    name: "Lackey",
    power: "Very Good Sire",
    ability: "When another racer rolls a 6, I move 2 before they move.",
    image: "images/IMG_3323.png"
  },

  {
    name: "Leaptoad",
    power: "Jumpfrog",
    ability: "While moving, I skip spaces occupied by other racers.",
    image: "images/IMG_3324.png"
  },

  {
    name: "Legs",
    power: "Jog",
    ability: "I can skip rolling and move 5 instead.",
    image: "images/IMG_3325.png"
  },

  {
    name: "Lovable Loser",
    power: "D’Aww",
    ability: "Before my main move, I get a 1-point chip if I’m alone in last place.",
    image: "images/IMG_3326.png"
  },

  {
    name: "Magician",
    power: "Poof",
    ability: "I can reroll my main move up to two times. I must use the final roll.",
    image: "images/IMG_3327.png"
  },

  {
    name: "Mastermind",
    power: "Know-It-All",
    ability: "At the start of my first turn, I predict which racer will win. If correct, the race immediately ends and I finish 2nd.",
    image: "images/IMG_3328.png"
  },

  {
    name: "M.O.U.T.H.",
    power: "Chomp",
    ability: "When I stop on a space with exactly one other racer, that racer is eliminated.",
    image: "images/IMG_3329.png"
  },

  {
    name: "Party Animal",
    power: "Animal Magnetism",
    ability: "Before my main move, all racers move 1 space towards me. Each other racer on my space gives me +1 to my main move.",
    image: "images/IMG_3330.png"
  },

  {
    name: "Rocket Scientist",
    power: "Kablooey",
    ability: "When I roll for my main move, I can have double that number. If I do, I trip.",
    image: "images/IMG_3331.png"
  },

  {
    name: "Romantic",
    power: "Ah, Love!",
    ability: "When anyone stops on a space with exactly one other racer, I move 2.",
    image: "images/IMG_3332.png"
  },

  {
    name: "Scoocher",
    power: "Scooch Scooch",
    ability: "When another racer’s power happens, I move 1.",
    image: "images/IMG_3333.png"
  },

  {
    name: "Sisyphus",
    power: "Keep Rollin'",
    ability: "Before my race, I take 4 point chips. When I roll a 6 for my main move, instead of moving, I warp to the Start and lose 1 point chip.",
    image: "images/IMG_3334.png"
  },

  {
    name: "Skipper",
    power: "Salty Dog",
    ability: "When anyone rolls a 1 for their main move, I go next in turn order.",
    image: "images/IMG_3335.png"
  },

  {
    name: "Stickler",
    power: "Actually…",
    ability: "I must land exactly on the Finish to win.",
    image: "images/IMG_3336.png"
  },

  {
    name: "Suckerfish",
    power: "Sucker!",
    ability: "When another racer moves, I can move with them.",
    image: "images/IMG_3337.png"
  },

  {
    name: "Third Wheel",
    power: "Roll Through",
    ability: "Before my main move, I can warp to a space with exactly two other racers.",
    image: "images/IMG_3338.png"
  },

  {
    name: "Twin",
    power: "Double Dip",
    ability: "I have the power of my twin. If my twin is eliminated, I lose this power.",
    image: "images/IMG_3339.png"
  }

];


// ============================================================
// INTERACTIONS
//
// Each interaction is stored ONCE.
//
// The website automatically displays it under BOTH racers.
// ============================================================

const interactionData = [

  {
    a: "Alchemist",
    b: "Coach",
    details: "If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot, Coach’s +1 applies to the 4-space main move, so Alchemist moves 5."
  },

  {
    a: "Alchemist",
    b: "Gunk",
    details: "If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot to move 4, Gunk reduces Alchemist’s movement to 3. The die result remains 1 or 2."
  },

  {
    a: "Alchemist",
    b: "Inchworm",
    details: "If Alchemist rolls 1, Inchworm makes Alchemist skip the main move. Alchemist therefore cannot use Transmute ‘N’ Scoot to move 4."
  },

  {
    a: "Alchemist",
    b: "Skipper",
    details: "If Alchemist rolls 1 and uses Transmute ‘N’ Scoot to move 4, Skipper still triggers because Alchemist rolled a 1. Skipper takes the next turn after Alchemist’s turn."
  },

  {
    a: "Baba Yaga",
    b: "Duelist",
    details: "If Duelist shares Baba Yaga’s space, they can duel, but Duelist still trips from Baba Yaga."
  },

  {
    a: "Baba Yaga",
    b: "Huge Baby",
    details: "The two cannot share a space, so Huge Baby cannot be tripped."
  },

  {
    a: "Baba Yaga",
    b: "Hypnotist",
    details: "Hypnotist can warp Baba Yaga onto Hypnotist’s space, but Hypnotist trips."
  },

  {
    a: "Baba Yaga",
    b: "Party Animal",
    details: "If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them."
  },

  {
    a: "Banana",
    b: "Centaur",
    details: "If Centaur passes Banana, Centaur’s Hoofwhack moves Banana back 2, and Banana then trips Centaur for passing Banana."
  },

  {
    a: "Banana",
    b: "Leaptoad",
    details: "Leaptoad skips over Banana’s occupied space, but that still counts as passing Banana. Banana therefore trips Leaptoad after its movement."
  },

  {
    a: "Blimp",
    b: "Coach",
    details: "If Blimp shares Coach’s space, Coach’s +1 applies to Blimp’s main move in addition to Blimp’s +3 or -1."
  },

  {
    a: "Blimp",
    b: "Gunk",
    details: "Gunk’s -1 applies to Blimp’s main move. Before the second corner, Blimp’s +3 and Gunk’s -1 result in +2; on or after the second corner, Blimp’s -1 and Gunk’s -1 result in -2."
  },

  {
    a: "Coach",
    b: "Gunk",
    details: "If Coach is on Gunk’s board, Gunk’s -1 applies to Coach’s main move while Coach’s +1 applies to Coach’s own main move. The two modifiers cancel, leaving Coach’s normal die result."
  },

  {
    a: "Coach",
    b: "Legs",
    details: "Legs’ JOG counts as a main move, so Coach’s +1 applies. Legs moves 6 instead of 5."
  },

  {
    a: "Copycat",
    b: "Gunk",
    details: "If Copycat is copying Gunk, everyone else has -2 to their move, Gunk has -1, and Copycat has -1."
  },

  {
    a: "Copycat",
    b: "Hare",
    details: "If Copycat is copying Hare, Copycat gets Hare’s +2 movement ability. If the lead changes, Copycat immediately changes to the new leader’s power."
  },

  {
    a: "Copycat",
    b: "Huge Baby",
    details: "If Copycat is copying Huge Baby, Huge Baby’s power takes priority."
  },

  {
    a: "Copycat",
    b: "Lead Racer",
    details: "Copycat continuously copies the racer currently in the lead, not just at the beginning of its turn. If the lead changes, Copycat’s power changes immediately."
  },

  {
    a: "Dicemonger",
    b: "Inchworm",
    details: "If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened."
  },

  {
    a: "Dicemonger",
    b: "Magician",
    details: "Magician’s own rerolls do not make Dicemonger move. Dicemonger only moves when another racer uses Dicemonger’s reroll."
  },

  {
    a: "Dicemonger",
    b: "Scoocher",
    details: "Whenever another racer uses Dicemonger’s reroll, Dicemonger moves 1 and Scoocher also moves 1 because a reroll occurred."
  },

  {
    a: "Dicemonger",
    b: "Skipper",
    details: "If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened."
  },

  {
    a: "Duelist",
    b: "Huge Baby",
    details: "Duelist cannot share Huge Baby’s space, so they cannot duel."
  },

  {
    a: "Duelist",
    b: "M.O.U.T.H.",
    details: "If Duelist duels M.O.U.T.H. and M.O.U.T.H. wins, M.O.U.T.H. moves 2. If that movement ends with exactly one other racer on its space, M.O.U.T.H. eliminates that racer. If M.O.U.T.H. lands on Duelist’s space, they do not duel and Duelist is eaten."
  },

  {
    a: "Duelist",
    b: "Stickler",
    details: "If Duelist wins a duel near the finish and the 2-space movement would overshoot the finish, Stickler prevents Duelist from crossing. Duelist does not move."
  },

  {
    a: "Gunk",
    b: "Heckler",
    details: "If Gunk reduces a racer’s main move so they finish their turn within 1 space of where they started, Heckler triggers and moves 2."
  },

  {
    a: "Gunk",
    b: "Lackey",
    details: "Gunk changes movement, not the die result. A racer who rolls 6 still rolled a 6, so Lackey still moves 2 before that racer."
  },

  {
    a: "Gunk",
    b: "Legs",
    details: "Gunk reduces Legs’ 5-space JOG to 4. JOG still counts as Legs’ main move."
  },

  {
    a: "Gunk",
    b: "Scoocher",
    details: "Scoocher moves 1 for each -1 that Gunk applies to another racer’s main move."
  },

  {
    a: "Huge Baby",
    b: "M.O.U.T.H.",
    details: "Huge Baby cannot be eaten by M.O.U.T.H."
  },

  {
    a: "Huge Baby",
    b: "Party Animal",
    details: "If Huge Baby is moved onto Party Animal’s space by Party Animal’s power, everyone on that space is moved back 1."
  },

  {
    a: "Huge Baby",
    b: "Scoocher",
    details: "If Scoocher’s power moves Scoocher onto Huge Baby’s space, Huge Baby places Scoocher one space behind."
  },

  {
    a: "Huge Baby",
    b: "Suckerfish",
    details: "Suckerfish cannot follow Huge Baby."
  },

  {
    a: "Inchworm",
    b: "Magician",
    details: "Magician can reroll a 1 before Inchworm’s trigger resolves. If the reroll is not 1, Inchworm does not trigger."
  },

  {
    a: "Inchworm",
    b: "Skipper",
    details: "When another racer rolls 1, Inchworm makes that racer skip the main move and moves 1. Skipper then takes the next turn. Both abilities trigger."
  },

  {
    a: "Leaptoad",
    b: "Scoocher",
    details: "Scoocher moves 1 for every occupied space Leaptoad skips. If Leaptoad skips two occupied spaces, Scoocher moves twice."
  },

  {
    a: "Magician",
    b: "Scoocher",
    details: "Every Magician reroll triggers Scoocher, so Scoocher moves 1 for each reroll, even if the reroll is not ultimately used."
  },

  {
    a: "Party Animal",
    b: "Baba Yaga",
    details: "If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them because they arrived simultaneously."
  },

  {
    a: "Party Animal",
    b: "M.O.U.T.H.",
    details: "When Party Animal moves M.O.U.T.H. simultaneously onto another racer, M.O.U.T.H. does not eliminate that racer from the simultaneous arrival."
  },

  {
    a: "Party Animal",
    b: "Romantic",
    details: "When Party Animal moves racers simultaneously toward Party Animal, Romantic does not trigger from those simultaneous arrivals."
  },

  {
    a: "Rocket Scientist",
    b: "Coach",
    details: "If Rocket Scientist shares Coach’s space, Coach’s +1 applies to Rocket Scientist’s main move, including a doubled main move."
  },

  {
    a: "Rocket Scientist",
    b: "Gunk",
    details: "Gunk reduces Rocket Scientist’s resulting main-move distance by 1. If Rocket Scientist doubles a roll, Gunk reduces the doubled movement by 1."
  },

  {
    a: "Rocket Scientist",
    b: "Inchworm",
    details: "If Rocket Scientist rolls 1 and doubles it to 2, Inchworm still triggers because the die roll was 1. Rocket Scientist skips the main move; its doubling does not prevent Inchworm."
  },

  {
    a: "Rocket Scientist",
    b: "Skipper",
    details: "If Rocket Scientist rolls 1 and doubles it to 2, Skipper still triggers because the die roll was 1."
  },

  {
    a: "Romantic",
    b: "Suckerfish",
    details: "If Suckerfish follows Romantic’s movement and arrives simultaneously, Romantic does not trigger from Suckerfish’s arrival."
  },

  {
    a: "Scoocher",
    b: "Suckerfish",
    details: "If Scoocher moves while sharing a space with Suckerfish, Suckerfish can follow Scoocher to the new space. Suckerfish’s movement can then trigger Scoocher again, so this chain can continue."
  },

  {
    a: "Stickler",
    b: "Hare",
    details: "Hare’s +2 can make it overshoot the finish. If Hare would overshoot, Stickler prevents the movement and Hare does not cross."
  },

  {
    a: "Stickler",
    b: "Scoocher",
    details: "Scoocher’s 1-space movement is also subject to Stickler. If that movement would overshoot the finish, Scoocher does not cross."
  },

  {
    a: "General",
    b: "Simultaneous Arrival",
    details: "Stopping-on-a-space powers do not trigger from simultaneous arrival under the August 2026 rule."
  },

  {
    a: "Third Wheel",
    b: "Baba Yaga",
    details: "If Third Wheel warps onto a space containing Baba Yaga, Baba Yaga’s ability trips Third Wheel."
  }

];


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
// CHARACTER LOOKUP
// ============================================================

const characterMap = new Map(
  athletes.map(character => [character.name, character])
);


// ============================================================
// HTML SAFETY
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
// GET INTERACTIONS
//
// IMPORTANT:
// An interaction is shown for BOTH racers.
//
// Example:
// Scoocher + Suckerfish
//
// appears on Scoocher's profile AND Suckerfish's profile.
// ============================================================

function getInteractions(characterName) {

  return interactionData.filter(interaction => {

    return (
      interaction.a === characterName ||
      interaction.b === characterName
    );

  });

}


// ============================================================
// GET OTHER CHARACTER
// ============================================================

function getOtherCharacter(interaction, characterName) {

  if (interaction.a === characterName) {
    return interaction.b;
  }

  return interaction.a;

}


// ============================================================
// RENDER RACER CARDS
// ============================================================

function renderCharacters(list) {

  characterGrid.innerHTML = "";

  characterCount.textContent =
    `${list.length} ${list.length === 1 ? "racer" : "racers"}`;

  if (list.length === 0) {

    noResults.classList.remove("hidden");

    return;
  }

  noResults.classList.add("hidden");


  list.forEach(character => {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "character-card";

    card.dataset.character = character.name;


    card.innerHTML = `

      <img
        class="character-card-image"
        src="${escapeHtml(character.image)}"
        alt="${escapeHtml(character.name)}"
      >

      <h3 class="character-card-name">
        ${escapeHtml(character.name)}
      </h3>

    `;


    characterGrid.appendChild(card);

  });

}


// ============================================================
// RENDER INTERACTIONS
// ============================================================

function renderInteractions(characterName) {

  const interactions = getInteractions(characterName);

  interactionList.innerHTML = "";


  interactionCount.textContent =
    `${interactions.length} ${
      interactions.length === 1
        ? "interaction"
        : "interactions"
    }`;


  if (interactions.length === 0) {

    noInteractions.classList.remove("hidden");

    return;
  }

  noInteractions.classList.add("hidden");


  interactions.forEach(interaction => {

    const otherCharacter =
      getOtherCharacter(interaction, characterName);


    const card = document.createElement("div");

    card.className = "interaction-card";


    card.innerHTML = `

      <div class="interaction-character">

        <button
          type="button"
          class="character-link"
          data-character="${escapeHtml(otherCharacter)}"
        >
          ${escapeHtml(otherCharacter)}
        </button>

      </div>

      <div class="interaction-text">
        ${escapeHtml(interaction.details)}
      </div>

    `;


    interactionList.appendChild(card);

  });

}


// ============================================================
// OPEN PROFILE
// ============================================================

function openProfile(characterName) {

  const character = characterMap.get(characterName);

  if (!character) {
    return;
  }


  profileImage.src = character.image;
  profileImage.alt = character.name;

  profileName.textContent = character.name;

  profileAbilityName.textContent = character.power;
  profileAbilityText.textContent = character.ability;


  renderInteractions(character.name);


  profileModal.classList.add("open");

  profileModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow = "hidden";


  // Reset interaction scroll position.
  const interactionPanel =
    document.querySelector(".profile-interactions");

  if (interactionPanel) {
    interactionPanel.scrollTop = 0;
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
// CHARACTER CARD CLICK
// ============================================================

characterGrid.addEventListener("click", event => {

  const card =
    event.target.closest(".character-card");


  if (!card) {
    return;
  }


  const characterName =
    card.dataset.character;


  openProfile(characterName);

});


// ============================================================
// CLICKABLE CHARACTER NAMES INSIDE INTERACTIONS
// ============================================================

interactionList.addEventListener("click", event => {

  const link =
    event.target.closest(".character-link");


  if (!link) {
    return;
  }


  const characterName =
    link.dataset.character;


  openProfile(characterName);

});


// ============================================================
// SEARCH
//
// SEARCHES CHARACTER NAMES ONLY.
// IT DOES NOT SEARCH INTERACTION TEXT.
// ============================================================

searchInput.addEventListener("input", () => {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();


  const filteredCharacters =
    athletes.filter(character =>
      character.name
        .toLowerCase()
        .includes(query)
    );


  renderCharacters(filteredCharacters);

});


// ============================================================
// CLOSE BUTTON
// ============================================================

closeModalButton.addEventListener(
  "click",
  closeProfile
);


// ============================================================
// CLICK OUTSIDE PROFILE
// ============================================================

modalOverlay.addEventListener(
  "click",
  closeProfile
);


// ============================================================
// ESCAPE KEY
// ============================================================

document.addEventListener("keydown", event => {

  if (
    event.key === "Escape" &&
    profileModal.classList.contains("open")
  ) {

    closeProfile();

  }

});


// ============================================================
// INITIAL PAGE LOAD
// ============================================================

renderCharacters(athletes);
