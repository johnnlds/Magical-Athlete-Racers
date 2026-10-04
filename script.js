// ============================================================
// MAGICAL ATHLETE — CHARACTER PROFILES
// ============================================================
// 36 racers
// Character-only search
// Clickable racer names in interactions
// Full interaction list supplied by John
// ============================================================


// ============================================================
// RACERS
// ============================================================

const athletes = [
  {
    name: "Alchemist",
    power: "Transmute ‘N’ Scoot",
    ability: "When I roll a 1 or 2 for my main move, I can move 4 instead.",
    image: "images/alchemist.png"
  },
  {
    name: "Baba Yaga",
    power: "Leg It",
    ability: "Trip any racer that stops on my space, or when I stop on theirs.",
    image: "images/baba-yaga.png"
  },
  {
    name: "Banana",
    power: "The Slip",
    ability: "I trip any racer that passes me.",
    image: "images/banana.png"
  },
  {
    name: "Blimp",
    power: "Blow It",
    ability: "When I start my turn before the second corner of the track, I get +3 to my main move. On or after that corner, I get -1.",
    image: "images/blimp.png"
  },
  {
    name: "Centaur",
    power: "Hoofwhack",
    ability: "When I pass a racer, they move -2. They cannot be moved farther back than Start.",
    image: "images/centaur.png"
  },
  {
    name: "Cheerleader",
    power: "Rah Rah",
    ability: "Before my main move, I can make the racer(s) in last place move 2. If I do, I move 1.",
    image: "images/cheerleader.png"
  },
  {
    name: "Coach",
    power: "Good Hustle",
    ability: "Everyone on my space gets +1 to their main move, including me.",
    image: "images/coach.png"
  },
  {
    name: "Copycat",
    power: "Copy That",
    ability: "I have the power of the racer currently in the lead. If there's a tie, I pick.",
    image: "images/copycat.png"
  },
  {
    name: "Dicemonger",
    power: "Dicey Deals",
    ability: "Anyone can reroll their main move once per turn. When another racer rerolls, I move 1.",
    image: "images/dicemonger.png"
  },
  {
    name: "Duelist",
    power: "Duel!",
    ability: "Whenever a racer shares my space, I can shout DUEL! We roll our dice and whoever rolls highest moves 2. I win ties.",
    image: "images/duelist.png"
  },
  {
    name: "Egg",
    power: "Scramble",
    ability: "Before my race, draw 3 new racers from the deck and pick one. I have its powers.",
    image: "images/egg.png"
  },
  {
    name: "Flip Flop",
    power: "Flop Flip",
    ability: "I can skip rolling for my main move and swap spaces with another racer instead.",
    image: "images/flip-flop.png"
  },
  {
    name: "Genius",
    power: "Think Good",
    ability: "I can predict what number I’ll roll for my main move. If I’m right, I take another turn after this one.",
    image: "images/genius.png"
  },
  {
    name: "Gunk",
    power: "Goop ‘Em",
    ability: "Other racers get -1 to their main move.",
    image: "images/gunk.png"
  },
  {
    name: "Hare",
    power: "Hubris",
    ability: "I get +2 to my main move. If I start my turn alone in the lead, I skip my main move.",
    image: "images/hare.png"
  },
  {
    name: "Heckler",
    power: "Schadenfreude",
    ability: "When a racer ends their turn within 1 space of where they started, I move 2.",
    image: "images/heckler.png"
  },
  {
    name: "Huge Baby",
    power: "Really Huge",
    ability: "No one can ever be on my space except at Start. If someone would land there, put them on the space behind me instead.",
    image: "images/huge-baby.png"
  },
  {
    name: "Hypnotist",
    power: "Hssssst",
    ability: "Before my main move, I can warp another racer to my space.",
    image: "images/hypnotist.png"
  },
  {
    name: "Inchworm",
    power: "Wriggle",
    ability: "When another racer rolls a 1 for their main move, they skip that move and I move 1.",
    image: "images/inchworm.png"
  },
  {
    name: "Lackey",
    power: "Very Good Sire",
    ability: "When another racer rolls a 6, I move 2 before they move.",
    image: "images/lackey.png"
  },
  {
    name: "Leaptoad",
    power: "Jumpfrog",
    ability: "While moving, I skip spaces occupied by other racers.",
    image: "images/leaptoad.png"
  },
  {
    name: "Legs",
    power: "Jog",
    ability: "I can skip rolling and move 5 instead.",
    image: "images/legs.png"
  },
  {
    name: "Lovable Loser",
    power: "D’Aww",
    ability: "Before my main move, I get a 1-point chip if I’m alone in last place.",
    image: "images/lovable-loser.png"
  },
  {
    name: "Magician",
    power: "Poof",
    ability: "I can reroll my main move up to two times. I must use the final roll.",
    image: "images/magician.png"
  },
  {
    name: "Mastermind",
    power: "Know-It-All",
    ability: "At the start of my first turn, I predict which racer will win. If correct, the race immediately ends and I finish 2nd.",
    image: "images/mastermind.png"
  },
  {
    name: "M.O.U.T.H.",
    power: "Chomp",
    ability: "When I stop on a space with exactly one other racer, that racer is eliminated.",
    image: "images/m-o-u-t-h.png"
  },
  {
    name: "Party Animal",
    power: "Animal Magnetism",
    ability: "Before my main move, all racers move 1 space towards me. Each other racer on my space gives me +1 to my main move.",
    image: "images/party-animal.png"
  },
  {
    name: "Rocket Scientist",
    power: "Kablooey",
    ability: "When I roll for my main move, I can have double that number. If I do, I trip.",
    image: "images/rocket-scientist.png"
  },
  {
    name: "Romantic",
    power: "Ah, Love!",
    ability: "When anyone stops on a space with exactly one other racer, I move 2.",
    image: "images/romantic.png"
  },
  {
    name: "Scoocher",
    power: "Scooch Scooch",
    ability: "When another racer’s power happens, I move 1.",
    image: "images/scoocher.png"
  },
  {
    name: "Sisyphus",
    power: "Keep Rollin'",
    ability: "Before my race, I take 4 point chips. When I roll a 6 for my main move, instead of moving, I warp to the Start and lose 1 point chip.",
    image: "images/sisyphus.png"
  },
  {
    name: "Skipper",
    power: "Salty Dog",
    ability: "When anyone rolls a 1 for their main move, I go next in turn order.",
    image: "images/skipper.png"
  },
  {
    name: "Stickler",
    power: "Actually…",
    ability: "I must land exactly on the Finish to win.",
    image: "images/stickler.png"
  },
  {
    name: "Suckerfish",
    power: "Sucker!",
    ability: "When another racer moves, I can move with them.",
    image: "images/suckerfish.png"
  },
  {
    name: "Third Wheel",
    power: "Roll Through",
    ability: "Before my main move, I can warp to a space with exactly two other racers.",
    image: "images/third-wheel.png"
  },
  {
    name: "Twin",
    power: "Double Dip",
    ability: "I have the power of my twin. If my twin is eliminated, I lose this power.",
    image: "images/twin.png"
  }
];


// ============================================================
// INTERACTIONS
// ============================================================
// Each row is displayed on the profile of the first racer.
// The second racer is clickable when that name is an actual racer.
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
// LOOKUPS
// ============================================================

const characterMap = new Map(
  athletes.map(racer => [racer.name, racer])
);

const characterNames = athletes.map(
  racer => racer.name
);


// ============================================================
// DOM ELEMENTS
// ============================================================

const searchInput =
  document.getElementById("searchInput");

const characterCount =
  document.getElementById("characterCount");

const characterGrid =
  document.getElementById("characterGrid");

const noResults =
  document.getElementById("noResults");

const profileModal =
  document.getElementById("profileModal");

const modalOverlay =
  document.getElementById("modalOverlay");

const closeModalButton =
  document.getElementById("closeModal");

const profileImage =
  document.getElementById("profileImage");

const profileName =
  document.getElementById("profileName");

const profileAbilityName =
  document.getElementById("profileAbilityName");

const profileAbilityText =
  document.getElementById("profileAbilityText");

const interactionCount =
  document.getElementById("interactionCount");

const interactionList =
  document.getElementById("interactionList");

const noInteractions =
  document.getElementById("noInteractions");


// ============================================================
// HTML ESCAPING
// ============================================================

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]
  );
}


// ============================================================
// CHARACTER NAME LINKING
// ============================================================
// Converts racer names appearing inside interaction text
// into clickable buttons.
//
// Only actual racers become profile links.
// "Lead Racer" and "Simultaneous Arrival" remain plain text.
// ============================================================

function linkCharacterNames(text) {
  let html = escapeHtml(text);

  const orderedNames = [...characterNames]
    .sort((a, b) => b.length - a.length);

  const replacements = [];

  orderedNames.forEach(name => {

    const token =
      `___CHARACTER_${replacements.length}___`;

    const escapedName =
      name.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

    const regex = new RegExp(
      `(?<![\\w-])${escapedName}(?![\\w-])`,
      "g"
    );

    if (regex.test(html)) {
      html = html.replace(regex, token);

      replacements.push({
        token,
        name
      });
    }
  });

  replacements.forEach(item => {

    html = html.replaceAll(
      item.token,
      `<button
        type="button"
        class="character-link"
        data-character="${escapeHtml(item.name)}"
      >${escapeHtml(item.name)}</button>`
    );

  });

  return html;
}


// ============================================================
// GET INTERACTIONS FOR A RACER
// ============================================================

function getInteractions(name) {

  return interactionData.filter(
    interaction => interaction.a === name
  );

}


// ============================================================
// RENDER CHARACTER GRID
// ============================================================

function renderCharacters() {

  // IMPORTANT:
  // Search is based ONLY on character names.
  // Interaction text is NOT searched.

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  const visibleCharacters =
    athletes.filter(racer =>
      racer.name
        .toLowerCase()
        .includes(query)
    );

  characterCount.textContent =
    query
      ? `${visibleCharacters.length} of ${athletes.length} racers`
      : `${athletes.length} racers`;

  characterGrid.innerHTML = "";

  noResults.classList.toggle(
    "hidden",
    visibleCharacters.length !== 0
  );


  visibleCharacters.forEach(racer => {

    const card =
      document.createElement("article");

    card.className =
      "character-card";

    card.tabIndex = 0;

    card.setAttribute(
      "role",
      "button"
    );

    card.setAttribute(
      "aria-label",
      `Open ${racer.name} profile`
    );


    const image =
      document.createElement("img");

    image.className =
      "character-card-image";

    image.src =
      racer.image;

    image.alt =
      racer.name;

    image.loading =
      "lazy";


    image.onerror = () => {

      image.style.display =
        "none";

      card.classList.add(
        "image-missing"
      );

    };


    const name =
      document.createElement("h3");

    name.className =
      "character-card-name";

    name.textContent =
      racer.name;


    card.appendChild(image);
    card.appendChild(name);


    card.addEventListener(
      "click",
      () => openProfile(racer.name)
    );


    card.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openProfile(racer.name);

        }

      }
    );


    characterGrid.appendChild(card);

  });

}


// ============================================================
// OPEN CHARACTER PROFILE
// ============================================================

function openProfile(name) {

  const racer =
    characterMap.get(name);

  if (!racer) {
    return;
  }


  // Character information

  profileImage.src =
    racer.image;

  profileImage.alt =
    racer.name;

  profileImage.style.display =
    "";


  profileImage.onerror = () => {

    profileImage.style.display =
      "none";

  };


  profileName.textContent =
    racer.name;

  profileAbilityName.textContent =
    racer.power;

  profileAbilityText.textContent =
    racer.ability;


  // Get this racer's interactions

  const interactions =
    getInteractions(name);


  interactionCount.textContent =
    `${interactions.length} interaction${
      interactions.length === 1
        ? ""
        : "s"
    }`;


  interactionList.innerHTML =
    "";


  noInteractions.classList.toggle(
    "hidden",
    interactions.length !== 0
  );


  // Build interaction cards

  interactions.forEach(interaction => {

    const card =
      document.createElement("article");

    card.className =
      "interaction-card";


    // Other racer / interaction target

    const otherCharacter =
      document.createElement("div");

    otherCharacter.className =
      "interaction-character";


    if (
      characterMap.has(interaction.b)
    ) {

      otherCharacter.innerHTML = `
        <button
          type="button"
          class="character-link"
          data-character="${escapeHtml(interaction.b)}"
        >
          ${escapeHtml(interaction.b)}
        </button>
      `;

    } else {

      otherCharacter.textContent =
        interaction.b;

    }


    // Interaction details

    const details =
      document.createElement("div");

    details.className =
      "interaction-text";

    details.innerHTML =
      linkCharacterNames(
        interaction.details
      );


    card.appendChild(
      otherCharacter
    );

    card.appendChild(
      details
    );


    interactionList.appendChild(
      card
    );

  });


  // Open modal

  profileModal.classList.add(
    "open"
  );

  profileModal.setAttribute(
    "aria-hidden",
    "false"
  );


  // Prevent background scrolling

  document.body.style.overflow =
    "hidden";


  // Start interactions at top

  if (interactionList) {
    interactionList.scrollTop = 0;
  }

}


// ============================================================
// CLOSE CHARACTER PROFILE
// ============================================================

function closeProfile() {

  profileModal.classList.remove(
    "open"
  );

  profileModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


// ============================================================
// SEARCH
// ============================================================

if (searchInput) {

  searchInput.addEventListener(
    "input",
    renderCharacters
  );

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
// CLICK OUTSIDE MODAL
// ============================================================

if (modalOverlay) {

  modalOverlay.addEventListener(
    "click",
    closeProfile
  );

}


// ============================================================
// CLICKABLE CHARACTER NAMES
// ============================================================
// This is event delegation, so it works for dynamically-created
// interaction cards as well.
// ============================================================

document.addEventListener(
  "click",
  event => {

    const characterLink =
      event.target.closest(
        ".character-link"
      );

    if (!characterLink) {
      return;
    }


    event.preventDefault();

    event.stopPropagation();


    const name =
      characterLink.dataset.character;


    if (
      name &&
      characterMap.has(name)
    ) {

      openProfile(name);

    }

  }
);


// ============================================================
// ESCAPE KEY CLOSES PROFILE
// ============================================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      profileModal.classList.contains("open")
    ) {

      closeProfile();

    }

  }
);


// ============================================================
// INITIAL PAGE LOAD
// ============================================================

renderCharacters();
