/* =========================================================
   MAGICAL ATHLETE — CHARACTER DATA
========================================================= */

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
    ability: "When I pass a racer, they move -2.",
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
    ability: "I have the power of the racer currently in the lead. If there’s a tie, I pick.",
    image: "images/IMG_3311.png"
  },
  {
    name: "Dicemonger",
    power: "Dicey Deals",
    ability: "Anyone can reroll their main move once per turn. When another racer does it, I move 1.",
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
    ability: "I get +2 to my main move. When I start my turn alone in the lead, I skip my main move.",
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
    ability: "No one can ever be on my space, besides the Start. Whenever that would happen, put the racer on the space behind me instead.",
    image: "images/IMG_3320.png"
  },
  {
    name: "Hypnotist",
    power: "Hssssst",
    ability: "Before my main move, I can warp a racer to my space.",
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
    ability: "When another racer rolls a 6 for their main move, I move 2 before they move.",
    image: "images/IMG_3323.png"
  },
  {
    name: "Leaptoad",
    power: "Jumpfrog",
    ability: "While moving, I skip spaces with other racers on them.",
    image: "images/IMG_3324.png"
  },
  {
    name: "Legs",
    power: "Jog",
    ability: "I can skip rolling for my main move and move 5 instead.",
    image: "images/IMG_3325.png"
  },
  {
    name: "Lovable Loser",
    power: "D’Aww",
    ability: "Before my main move, I get 1 point chip if I’m alone in last place.",
    image: "images/IMG_3326.png"
  },
  {
    name: "Magician",
    power: "Poof",
    ability: "I can reroll my main move up to two times.",
    image: "images/IMG_3327.png"
  },
  {
    name: "Mastermind",
    power: "Know-It-All",
    ability: "At the start of my first turn, I predict which racer will win. If I’m right, the race ends immediately and I finish 2nd.",
    image: "images/IMG_3328.png"
  },
  {
    name: "M.O.U.T.H.",
    power: "Chomp",
    ability: "When I stop on a space with exactly one other racer, they’re eliminated from the race.",
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
    ability: "When I roll for my main move, I can move double that number. If I do, I trip after moving.",
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
    power: "Keep Rollin’",
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
    ability: "Other racers can only cross the finish line by moving the exact number of spaces they need. If they overshoot, they don’t move.",
    image: "images/IMG_3336.png"
  },
  {
    name: "Suckerfish",
    power: "Sucker!",
    ability: "When a racer on my space moves, I can move to their new space.",
    image: "images/IMG_3337.png"
  },
  {
    name: "Third Wheel",
    power: "Roll Through",
    ability: "Before my main move, I can warp to any space with exactly 2 racers on it.",
    image: "images/IMG_3338.png"
  },
  {
    name: "Twin",
    power: "Double Dip",
    ability: "Before my race, I can pick a racer who won a previous race and race with their powers.",
    image: "images/IMG_3339.png"
  }
];


/* =========================================================
   INTERACTION DATABASE

   Each interaction is stored ONCE.
   It is automatically displayed on both racers' profiles.
========================================================= */

const interactionData = [

  {
    racers: ["Alchemist", "Coach"],
    text: "If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot, Coach’s +1 applies to the 4-space main move, so Alchemist moves 5."
  },

  {
    racers: ["Alchemist", "Gunk"],
    text: "If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot to move 4, Gunk reduces Alchemist’s movement to 3. The die result remains 1 or 2."
  },

  {
    racers: ["Alchemist", "Inchworm"],
    text: "If Alchemist rolls 1, Inchworm makes Alchemist skip the main move. Alchemist therefore cannot use Transmute ‘N’ Scoot to move 4."
  },

  {
    racers: ["Alchemist", "Skipper"],
    text: "If Alchemist rolls 1 and uses Transmute ‘N’ Scoot to move 4, Skipper still triggers because Alchemist rolled a 1. Skipper takes the next turn after Alchemist’s turn."
  },

  {
    racers: ["Baba Yaga", "Duelist"],
    text: "If Duelist shares Baba Yaga’s space, they can duel, but Duelist still trips from Baba Yaga."
  },

  {
    racers: ["Baba Yaga", "Huge Baby"],
    text: "The two cannot share a space, so Huge Baby cannot be tripped."
  },

  {
    racers: ["Baba Yaga", "Hypnotist"],
    text: "Hypnotist can warp Baba Yaga onto Hypnotist’s space, but Hypnotist trips."
  },

  {
    racers: ["Baba Yaga", "Party Animal"],
    text: "If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them."
  },

  {
    racers: ["Banana", "Centaur"],
    text: "If Centaur passes Banana, Centaur’s Hoofwhack moves Banana back 2, and Banana then trips Centaur for passing Banana."
  },

  {
    racers: ["Banana", "Leaptoad"],
    text: "Leaptoad skips over Banana’s occupied space, but that still counts as passing Banana. Banana therefore trips Leaptoad after its movement."
  },

  {
    racers: ["Blimp", "Coach"],
    text: "If Blimp shares Coach’s space, Coach’s +1 applies to Blimp’s main move in addition to Blimp’s +3 or -1."
  },

  {
    racers: ["Blimp", "Gunk"],
    text: "Gunk’s -1 applies to Blimp’s main move. Before the second corner, Blimp’s +3 and Gunk’s -1 result in +2; on or after the second corner, Blimp’s -1 and Gunk’s -1 result in -2."
  },

  {
    racers: ["Coach", "Gunk"],
    text: "If Coach is on Gunk’s board, Gunk’s -1 applies to Coach’s main move while Coach’s +1 applies to Coach’s own main move. The two modifiers cancel, leaving Coach’s normal die result."
  },

  {
    racers: ["Coach", "Legs"],
    text: "Legs’ JOG counts as a main move, so Coach’s +1 applies. Legs moves 6 instead of 5."
  },

  {
    racers: ["Copycat", "Gunk"],
    text: "If Copycat is copying Gunk, everyone else has -2 to their move, Gunk has -1, and Copycat has -1."
  },

  {
    racers: ["Copycat", "Hare"],
    text: "If Copycat is copying Hare, Copycat gets Hare’s +2 movement ability. If the lead changes, Copycat immediately changes to the new leader’s power."
  },

  {
    racers: ["Copycat", "Huge Baby"],
    text: "If Copycat is copying Huge Baby, Huge Baby’s power takes priority."
  },

  {
    racers: ["Copycat", "Lead Racer"],
    text: "Copycat continuously copies the racer currently in the lead, not just at the beginning of its turn. If the lead changes, Copycat’s power changes immediately."
  },

  {
    racers: ["Dicemonger", "Inchworm"],
    text: "If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened."
  },

  {
    racers: ["Dicemonger", "Magician"],
    text: "Magician’s own rerolls do not make Dicemonger move. Dicemonger only moves when another racer uses Dicemonger’s reroll."
  },

  {
    racers: ["Dicemonger", "Scoocher"],
    text: "Whenever another racer uses Dicemonger’s reroll, Dicemonger moves 1 and Scoocher also moves 1 because a reroll occurred."
  },

  {
    racers: ["Dicemonger", "Skipper"],
    text: "If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened."
  },

  {
    racers: ["Duelist", "Huge Baby"],
    text: "Duelist cannot share Huge Baby’s space, so they cannot duel."
  },

  {
    racers: ["Duelist", "M.O.U.T.H."],
    text: "If Duelist duels M.O.U.T.H. and M.O.U.T.H. wins, M.O.U.T.H. moves 2. If that movement ends with exactly one other racer on its space, M.O.U.T.H. eliminates that racer. If M.O.U.T.H. lands on Duelist’s space, they do not duel and Duelist is eaten."
  },

  {
    racers: ["Duelist", "Stickler"],
    text: "If Duelist wins a duel near the finish and the 2-space movement would overshoot the finish, Stickler prevents Duelist from crossing. Duelist does not move."
  },

  {
    racers: ["Gunk", "Heckler"],
    text: "If Gunk reduces a racer’s main move so they finish their turn within 1 space of where they started, Heckler triggers and moves 2."
  },

  {
    racers: ["Gunk", "Lackey"],
    text: "Gunk changes movement, not the die result. A racer who rolls 6 still rolled a 6, so Lackey still moves 2 before that racer."
  },

  {
    racers: ["Gunk", "Legs"],
    text: "Gunk reduces Legs’ 5-space JOG to 4. JOG still counts as Legs’ main move."
  },

  {
    racers: ["Gunk", "Scoocher"],
    text: "Scoocher moves 1 for each -1 that Gunk applies to another racer’s main move."
  },

  {
    racers: ["Huge Baby", "M.O.U.T.H."],
    text: "Huge Baby cannot be eaten by M.O.U.T.H."
  },

  {
    racers: ["Huge Baby", "Party Animal"],
    text: "If Huge Baby is moved onto Party Animal’s space by Party Animal’s power, everyone on that space is moved back 1."
  },

  {
    racers: ["Huge Baby", "Scoocher"],
    text: "If Scoocher’s power moves Scoocher onto Huge Baby’s space, Huge Baby places Scoocher one space behind."
  },

  {
    racers: ["Huge Baby", "Suckerfish"],
    text: "Suckerfish cannot follow Huge Baby."
  },

  {
    racers: ["Inchworm", "Magician"],
    text: "Magician can reroll a 1 before Inchworm’s trigger resolves. If the reroll is not 1, Inchworm does not trigger."
  },

  {
    racers: ["Inchworm", "Skipper"],
    text: "When another racer rolls 1, Inchworm makes that racer skip the main move and moves 1. Skipper then takes the next turn. Both abilities trigger."
  },

  {
    racers: ["Leaptoad", "Scoocher"],
    text: "Scoocher moves 1 for every occupied space Leaptoad skips. If Leaptoad skips two occupied spaces, Scoocher moves twice."
  },

  {
    racers: ["Magician", "Scoocher"],
    text: "Every Magician reroll triggers Scoocher, so Scoocher moves 1 for each reroll, even if the reroll is not ultimately used."
  },

  {
    racers: ["Party Animal", "Baba Yaga"],
    text: "If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them because they arrived simultaneously."
  },

  {
    racers: ["Party Animal", "M.O.U.T.H."],
    text: "When Party Animal moves M.O.U.T.H. simultaneously onto another racer, M.O.U.T.H. does not eliminate that racer from the simultaneous arrival."
  },

  {
    racers: ["Party Animal", "Romantic"],
    text: "When Party Animal moves racers simultaneously toward Party Animal, Romantic does not trigger from those simultaneous arrivals."
  },

  {
    racers: ["Rocket Scientist", "Coach"],
    text: "If Rocket Scientist shares Coach’s space, Coach’s +1 applies to Rocket Scientist’s main move, including a doubled main move."
  },

  {
    racers: ["Rocket Scientist", "Gunk"],
    text: "Gunk reduces Rocket Scientist’s resulting main-move distance by 1. If Rocket Scientist doubles a roll, Gunk reduces the doubled movement by 1."
  },

  {
    racers: ["Rocket Scientist", "Inchworm"],
    text: "If Rocket Scientist rolls 1 and doubles it to 2, Inchworm still triggers because the die roll was 1. Rocket Scientist skips the main move; its doubling does not prevent Inchworm."
  },

  {
    racers: ["Rocket Scientist", "Skipper"],
    text: "If Rocket Scientist rolls 1 and doubles it to 2, Skipper still triggers because the die roll was 1."
  },

  {
    racers: ["Romantic", "Suckerfish"],
    text: "If Suckerfish follows Romantic’s movement and arrives simultaneously, Romantic does not trigger from Suckerfish’s arrival."
  },

  {
    racers: ["Scoocher", "Suckerfish"],
    text: "If Scoocher moves while sharing a space with Suckerfish, Suckerfish can follow Scoocher to the new space. Suckerfish’s movement can then trigger Scoocher again, so this chain can continue."
  },

  {
    racers: ["Stickler", "Hare"],
    text: "Hare’s +2 can make it overshoot the finish. If Hare would overshoot, Stickler prevents the movement and Hare does not cross."
  },

  {
    racers: ["Stickler", "Scoocher"],
    text: "Scoocher’s 1-space movement is also subject to Stickler. If that movement would overshoot the finish, Scoocher does not cross."
  },

  {
    racers: ["Third Wheel", "Baba Yaga"],
    text: "If Third Wheel warps onto a space containing Baba Yaga, Baba Yaga’s ability trips Third Wheel."
  }
];


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function getAthlete(name) {
  return athletes.find(
    athlete => athlete.name === name
  );
}


/*
  Turns racer names inside interaction text into
  clickable links when that name is an actual racer.

  Names such as "Lead Racer" remain normal text.
*/
function makeCharacterLinks(text, currentCharacter) {

  let result = text;

  /*
    Sort longest names first so names like
    "M.O.U.T.H." are handled correctly.
  */
  const names = athletes
    .map(athlete => athlete.name)
    .sort((a, b) => b.length - a.length);

  names.forEach(name => {

    if (name === currentCharacter) {
      return;
    }

    const escapedName = name.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

    const regex = new RegExp(
      `(?<![\\w-])${escapedName}(?![\\w-])`,
      "g"
    );

    result = result.replace(
      regex,
      `<button class="character-link" type="button" data-character="${name}">${name}</button>`
    );
  });

  return result;
}


/*
  Get every interaction involving a character.

  Each interaction is stored only once in interactionData,
  but is displayed on both racers' profiles.
*/
function getInteractionsForCharacter(characterName) {

  return interactionData.filter(
    interaction =>
      interaction.racers.includes(characterName)
  );
}


/* =========================================================
   CHARACTER GRID
========================================================= */

const characterGrid =
  document.getElementById("characterGrid");

const characterCount =
  document.getElementById("characterCount");

const noResults =
  document.getElementById("noResults");


function renderCharacters(list) {

  characterGrid.innerHTML = "";

  characterCount.textContent =
    `${list.length} ${list.length === 1 ? "racer" : "racers"}`;

  if (list.length === 0) {

    noResults.classList.remove("hidden");

    return;
  }

  noResults.classList.add("hidden");


  list.forEach(athlete => {

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
      `View ${athlete.name} profile`
    );


    card.innerHTML = `
      <img
        class="character-card-image"
        src="${athlete.image}"
        alt="${athlete.name}"
      >

      <h3 class="character-card-name">
        ${athlete.name}
      </h3>
    `;


    card.addEventListener(
      "click",
      () => openProfile(athlete.name)
    );


    card.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openProfile(athlete.name);
        }
      }
    );


    characterGrid.appendChild(card);
  });
}


/* =========================================================
   SEARCH
========================================================= */

const searchInput =
  document.getElementById("searchInput");


searchInput.addEventListener(
  "input",
  event => {

    const query =
      event.target.value
        .trim()
        .toLowerCase();


    /*
      IMPORTANT:
      Search only checks racer names.

      It does NOT search:
      - abilities
      - power names
      - interactions
      - interaction text
    */

    const filtered =
      athletes.filter(
        athlete =>
          athlete.name
            .toLowerCase()
            .includes(query)
      );


    renderCharacters(filtered);
  }
);


/* =========================================================
   PROFILE MODAL
========================================================= */

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

const interactionList =
  document.getElementById("interactionList");

const interactionCount =
  document.getElementById("interactionCount");

const noInteractions =
  document.getElementById("noInteractions");


let currentProfile =
  null;


/* =========================================================
   OPEN PROFILE
========================================================= */

function openProfile(characterName) {

  const athlete =
    getAthlete(characterName);

  if (!athlete) {
    return;
  }


  currentProfile =
    athlete.name;


  /*
    Character information
  */

  profileImage.src =
    athlete.image;

  profileImage.alt =
    athlete.name;

  profileName.textContent =
    athlete.name;

  profileAbilityName.textContent =
    athlete.power;

  profileAbilityText.textContent =
    athlete.ability;


  /*
    Interactions
  */

  const interactions =
    getInteractionsForCharacter(
      athlete.name
    );


  interactionList.innerHTML = "";


  interactionCount.textContent =
    `${interactions.length} ${
      interactions.length === 1
        ? "interaction"
        : "interactions"
    }`;


  if (interactions.length === 0) {

    noInteractions.classList.remove(
      "hidden"
    );

  } else {

    noInteractions.classList.add(
      "hidden"
    );


    interactions.forEach(
      interaction => {

        /*
          Determine the other racer.

          For normal two-racer interactions,
          this is the other named racer.

          For special entries such as "Lead Racer",
          it will simply display the other entry.
        */
        const otherCharacter =
          interaction.racers.find(
            racer =>
              racer !== athlete.name
          );


        const interactionCard =
          document.createElement("article");

        interactionCard.className =
          "interaction-card";


        const otherAthlete =
          getAthlete(otherCharacter);


        /*
          Real racer names are clickable.

          Pseudo names such as:
          - Lead Racer
          remain normal text.
        */

        let characterHeading;


        if (otherAthlete) {

          characterHeading = `
            <button
              class="character-link"
              type="button"
              data-character="${otherAthlete.name}"
            >
              ${otherAthlete.name}
            </button>
          `;

        } else {

          characterHeading =
            otherCharacter;
        }


        /*
          Make any additional racer names appearing
          inside the interaction text clickable too.
        */

        const linkedText =
          makeCharacterLinks(
            interaction.text,
            athlete.name
          );


        interactionCard.innerHTML = `
          <div class="interaction-character">
            ${characterHeading}
          </div>

          <div class="interaction-text">
            ${linkedText}
          </div>
        `;


        interactionList.appendChild(
          interactionCard
        );
      }
    );
  }


  /*
    Show modal
  */

  profileModal.classList.add(
    "open"
  );

  profileModal.setAttribute(
    "aria-hidden",
    "false"
  );


  /*
    Prevent the page behind the modal
    from scrolling.
  */

  document.body.style.overflow =
    "hidden";


  /*
    Start interaction scroll area
    at the top.
  */

  const interactionsPanel =
    document.querySelector(
      ".profile-interactions"
    );

  if (interactionsPanel) {

    interactionsPanel.scrollTop = 0;
  }


  /*
    Put focus on the close button.
  */

  setTimeout(
    () => closeModalButton.focus(),
    0
  );
}


/* =========================================================
   CLOSE PROFILE
========================================================= */

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


  currentProfile =
    null;
}


/* =========================================================
   CLOSE BUTTON
========================================================= */

closeModalButton.addEventListener(
  "click",
  closeProfile
);


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

modalOverlay.addEventListener(
  "click",
  closeProfile
);


/* =========================================================
   ESC KEY
========================================================= */

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


/* =========================================================
   CLICKABLE RACER NAMES
=========================================================

   Because the interaction cards are created
   dynamically, event delegation is used here.
========================================================= */

interactionList.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".character-link"
      );


    if (!button) {
      return;
    }


    event.preventDefault();

    event.stopPropagation();


    const characterName =
      button.dataset.character;


    if (
      characterName &&
      getAthlete(characterName)
    ) {

      openProfile(characterName);
    }
  }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderCharacters(
  athletes
);
