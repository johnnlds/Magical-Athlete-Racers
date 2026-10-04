const athletes = [
    { name: "Alchemist", category: "Dice", power: "Transmute ‘N’ Scoot", ability: "When I roll a 1 or 2 for my main move, I can move 4 instead.", image: "images/IMG_3304.png" },
    { name: "Baba Yaga", category: "Position", power: "Leg It", ability: "Trip any racer that stops on my space, or when I stop on theirs.", image: "images/IMG_3305.png" },
    { name: "Banana", category: "Position", power: "The Slip", ability: "I trip any racer that passes me.", image: "images/IMG_3306.png" },
    { name: "Blimp", category: "Movement", power: "Blow It", ability: "If I start my turn before the second corner, I get +3 to my main move. On or after the second corner, I get −1.", image: "images/IMG_3307.png" },
    { name: "Centaur", category: "Movement", power: "Hoofwhack", ability: "When I pass a racer, they move −2. They cannot be moved farther back than Start.", image: "images/IMG_3308.png" },
    { name: "Cheerleader", category: "Movement", power: "Rah Rah", ability: "Before my main move, I can make the racer(s) in last place move 2. If I do, I move 1.", image: "images/IMG_3309.png" },
    { name: "Coach", category: "Movement", power: "Good Hustle", ability: "Everyone on my space gets +1 to their main move, including me.", image: "images/IMG_3310.png" },
    { name: "Copy Cat", category: "Special", power: "Copy That", ability: "I have the power of the racer currently in the lead. If there’s a tie, I choose which racer to copy.", image: "images/IMG_3311.png" },
    { name: "Dicemonger", category: "Dice", power: "Dicey Deals", ability: "Anyone can reroll their main move once per turn. When another racer rerolls, I move 1.", image: "images/IMG_3312.png" },
    { name: "Duelist", category: "Position", power: "Duel!", ability: "Whenever a racer shares my space, I can shout DUEL! We roll; whoever rolls highest moves 2. I win ties.", image: "images/IMG_3313.png" },
    { name: "Egg", category: "Special", power: "Scramble", ability: "Before my race, draw 3 new racers and choose one. I have that racer’s powers.", image: "images/IMG_3314.png" },
    { name: "Flip Flop", category: "Movement", power: "Flop Flip", ability: "I can skip rolling for my main move and swap spaces with another racer.", image: "images/IMG_3315.png" },
    { name: "Genius", category: "Dice", power: "Think Good", ability: "I predict what number I’ll roll. If I’m correct, I get another turn immediately after this one.", image: "images/IMG_3316.png" },
    { name: "Gunk", category: "Movement", power: "Goop ’Em", ability: "Other racers get −1 to their main move.", image: "images/IMG_3317.png" },
    { name: "Hare", category: "Movement", power: "Hubris", ability: "I get +2 to my main move. If I start my turn alone in the lead, I skip my main move.", image: "images/IMG_3318.png" },
    { name: "Heckler", category: "Movement", power: "Schadenfreude", ability: "When a racer ends their turn within 1 space of where they started, I move 2.", image: "images/IMG_3319.png" },
    { name: "Huge Baby", category: "Position", power: "Really Huge", ability: "No one can ever be on my space except at Start. If someone would land there, put them on the space behind me instead.", image: "images/IMG_3320.png" },
    { name: "Hypnotist", category: "Position", power: "Hssssst", ability: "Before my main move, I can warp another racer to my space.", image: "images/IMG_3321.png" },
    { name: "Inchworm", category: "Dice", power: "Wriggle", ability: "When another racer rolls a 1 for their main move, they skip that move and I move 1.", image: "images/IMG_3322.png" },
    { name: "Lackey", category: "Dice", power: "Very Good Sire", ability: "When another racer rolls a 6, I move 2 before they move.", image: "images/IMG_3323.png" },
    { name: "Leaptoad", category: "Movement", power: "Jumpfrog", ability: "While moving, I skip spaces occupied by other racers.", image: "images/IMG_3324.png" },
    { name: "Legs", category: "Movement", power: "Jog", ability: "I can skip rolling and move 5 instead.", image: "images/IMG_3325.png" },
    { name: "Lovable Loser", category: "Position", power: "D’Aww", ability: "Before my main move, I get a 1-point chip if I’m alone in last place.", image: "images/IMG_3326.png" },
    { name: "M.O.U.T.H.", category: "Position", power: "Chomp", ability: "When I stop on a space with exactly one other racer, that racer is eliminated.", image: "images/IMG_3327.png" },
    { name: "Magician", category: "Dice", power: "Poof", ability: "I can reroll my main move up to two times. I must use the final roll.", image: "images/IMG_3328.png" },
    { name: "Mastermind", category: "Special", power: "Know-It-All", ability: "At the start of my first turn, I predict which racer will win. If correct, the race immediately ends and I finish 2nd.", image: "images/IMG_3329.png" },
    { name: "Party Animal", category: "Position", power: "Animal Magnetism", ability: "Before my main move, all racers move 1 space toward me. Each other racer on my space gives me +1 to my main move.", image: "images/IMG_3330.png" },
    { name: "Rocket Scientist", category: "Dice", power: "Kablooey", ability: "After rolling, I can double my roll. If I do, I trip.", image: "images/IMG_3331.png" },
    { name: "Romantic", category: "Position", power: "Ah, Love!", ability: "Whenever anyone stops on a space with exactly one other racer, I move 2.", image: "images/IMG_3332.png" },
    { name: "Sisyphus", category: "Dice", power: "Keep Rollin’", ability: "Before my race, I take 4 point chips. Whenever I roll a 6, I warp to Start instead of moving and lose 1 point chip.", image: "images/IMG_3333.png" },
    { name: "Skipper", category: "Dice", power: "Salty Dog", ability: "Whenever anyone rolls a 1, I go next in turn order.", image: "images/IMG_3334.png" },
    { name: "Scoocher", category: "Special", power: "Scooch Scooch", ability: "Whenever another racer’s power happens, I move 1.", image: "images/IMG_3335.png" },
    { name: "Stickler", category: "Movement", power: "Actually…", ability: "Other racers can only cross the finish line if they move the exact number of spaces needed. If they overshoot, they don’t move.", image: "images/IMG_3336.png" },
    { name: "Suckerfish", category: "Movement", power: "Sucker!", ability: "When a racer on my space moves, I can move with them to their new space.", image: "images/IMG_3337.png" },
    { name: "Third Wheel", category: "Position", power: "Roll Through", ability: "Before my main move, I can warp to any space containing exactly 2 racers.", image: "images/IMG_3338.png" },
    { name: "Twin", category: "Special", power: "Double Dip", ability: "Before my race, I can choose a racer who won a previous race and race using their powers.", image: "images/IMG_3339.png" }
];

/*
=========================================================
INTERACTIONS

Each relationship is entered ONLY ONCE.

The display code automatically shows the relationship
on BOTH characters' profiles.

Example:
Huge Baby | Baba Yaga

does NOT also need:
Baba Yaga | Huge Baby
=========================================================
*/

const interactionData = `

Alchemist|Coach|If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot, Coach’s +1 applies to the 4-space main move, so Alchemist moves 5.
Alchemist|Gunk|If Alchemist rolls 1 or 2 and uses Transmute ‘N’ Scoot to move 4, Gunk reduces Alchemist’s movement to 3. The die result remains 1 or 2.
Alchemist|Inchworm|If Alchemist rolls 1, Inchworm makes Alchemist skip the main move. Alchemist therefore cannot use Transmute ‘N’ Scoot to move 4.
Alchemist|Skipper|If Alchemist rolls 1 and uses Transmute ‘N’ Scoot to move 4, Skipper still triggers because Alchemist rolled a 1. Skipper takes the next turn after Alchemist’s turn.

Baba Yaga|Duelist|If Duelist shares Baba Yaga’s space, they can duel, but Duelist still trips from Baba Yaga.
Baba Yaga|Huge Baby|The two cannot share a space, so Huge Baby cannot be tripped.
Baba Yaga|Hypnotist|Hypnotist can warp Baba Yaga onto Hypnotist’s space, but Hypnotist trips.
Baba Yaga|Party Animal|If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them.

Banana|Centaur|If Centaur passes Banana, Centaur’s Hoofwhack moves Banana back 2, and Banana then trips Centaur for passing Banana.
Banana|Leaptoad|Leaptoad skips over Banana’s occupied space, but that still counts as passing Banana. Banana therefore trips Leaptoad after its movement.

Blimp|Coach|If Blimp shares Coach’s space, Coach’s +1 applies to Blimp’s main move in addition to Blimp’s +3 or -1.
Blimp|Gunk|Gunk’s -1 applies to Blimp’s main move. Before the second corner, Blimp’s +3 and Gunk’s -1 result in +2; on or after the second corner, Blimp’s -1 and Gunk’s -1 result in -2.

Coach|Gunk|If Coach is on Gunk’s board, Gunk’s -1 applies to Coach’s main move while Coach’s +1 applies to Coach’s own main move. The two modifiers cancel, leaving Coach’s normal die result.
Coach|Legs|Legs’ JOG counts as a main move, so Coach’s +1 applies. Legs moves 6 instead of 5.

Copy Cat|Gunk|If Copy Cat is copying Gunk, everyone else has -2 to their move, Gunk has -1, and Copy Cat has -1.
Copy Cat|Hare|If Copy Cat is copying Hare, Copy Cat gets Hare’s +2 movement ability. If the lead changes, Copy Cat immediately changes to the new leader’s power.
Copy Cat|Huge Baby|If Copy Cat is copying Huge Baby, Huge Baby’s power takes priority.
Copy Cat|Lead Racer|Copy Cat continuously copies the racer currently in the lead, not just at the beginning of its turn. If the lead changes, Copy Cat’s power changes immediately.

Dicemonger|Inchworm|If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened.
Dicemonger|Magician|Magician’s own rerolls do not make Dicemonger move. Dicemonger only moves when another racer uses Dicemonger’s reroll.
Dicemonger|Scoocher|Whenever another racer uses Dicemonger’s reroll, Dicemonger moves 1 and Scoocher also moves 1 because a reroll occurred.
Dicemonger|Skipper|If a racer rolls 1 and rerolls using Dicemonger’s ability, the original 1 is treated as if it never happened.

Duelist|Huge Baby|Duelist cannot share Huge Baby’s space, so they cannot duel.
Duelist|M.O.U.T.H.|If Duelist duels M.O.U.T.H. and M.O.U.T.H. wins, M.O.U.T.H. moves 2. If that movement ends with exactly one other racer on its space, M.O.U.T.H. eliminates that racer. If M.O.U.T.H. lands on Duelist’s space, they do not duel and Duelist is eaten.
Duelist|Stickler|If Duelist wins a duel near the finish and the 2-space movement would overshoot the finish, Stickler prevents Duelist from crossing. Duelist does not move.

Gunk|Heckler|If Gunk reduces a racer’s main move so they finish their turn within 1 space of where they started, Heckler triggers and moves 2.
Gunk|Lackey|Gunk changes movement, not the die result. A racer who rolls 6 still rolled a 6, so Lackey still moves 2 before that racer.
Gunk|Legs|Gunk reduces Legs’ 5-space JOG to 4. JOG still counts as Legs’ main move.
Gunk|Scoocher|Scoocher moves 1 for each -1 that Gunk applies to another racer’s main move.

Huge Baby|M.O.U.T.H.|Huge Baby cannot be eaten by M.O.U.T.H.
Huge Baby|Party Animal|If Huge Baby is moved onto Party Animal’s space by Party Animal’s power, everyone on that space is moved back 1.
Huge Baby|Scoocher|If Scoocher’s power moves Scoocher onto Huge Baby’s space, Huge Baby places Scoocher one space behind.
Huge Baby|Suckerfish|Suckerfish cannot follow Huge Baby.

Inchworm|Magician|Magician can reroll a 1 before Inchworm’s trigger resolves. If the reroll is not 1, Inchworm does not trigger.
Inchworm|Skipper|When another racer rolls 1, Inchworm makes that racer skip the main move and moves 1. Skipper then takes the next turn. Both abilities trigger.

Leaptoad|Scoocher|Scoocher moves 1 for every occupied space Leaptoad skips. If Leaptoad skips two occupied spaces, Scoocher moves twice.

Magician|Scoocher|Every Magician reroll triggers Scoocher, so Scoocher moves 1 for each reroll, even if the reroll is not ultimately used.

Party Animal|Baba Yaga|If Party Animal moves racers simultaneously onto Baba Yaga’s space, Baba Yaga does not trip them because they arrived simultaneously.
Party Animal|M.O.U.T.H.|When Party Animal moves M.O.U.T.H. simultaneously onto another racer, M.O.U.T.H. does not eliminate that racer from the simultaneous arrival.
Party Animal|Romantic|When Party Animal moves racers simultaneously toward Party Animal, Romantic does not trigger from those simultaneous arrivals.

Rocket Scientist|Coach|If Rocket Scientist shares Coach’s space, Coach’s +1 applies to Rocket Scientist’s main move, including a doubled main move.
Rocket Scientist|Gunk|Gunk reduces Rocket Scientist’s resulting main-move distance by 1. If Rocket Scientist doubles a roll, Gunk reduces the doubled movement by 1.
Rocket Scientist|Inchworm|If Rocket Scientist rolls 1 and doubles it to 2, Inchworm still triggers because the die roll was 1. Rocket Scientist skips the main move; its doubling does not prevent Inchworm.
Rocket Scientist|Skipper|If Rocket Scientist rolls 1 and doubles it to 2, Skipper still triggers because the die roll was 1.

Romantic|Suckerfish|If Suckerfish follows Romantic’s movement and arrives simultaneously, Romantic does not trigger from Suckerfish’s arrival.

Scoocher|Suckerfish|If Scoocher moves while sharing a space with Suckerfish, Suckerfish can follow Scoocher to the new space. Suckerfish’s movement can then trigger Scoocher again, so this chain can continue.

Stickler|Hare|Hare’s +2 can make it overshoot the finish. If Hare would overshoot, Stickler prevents the movement and Hare does not cross.
Stickler|Scoocher|Scoocher’s 1-space movement is also subject to Stickler. If that movement would overshoot the finish, Scoocher does not cross.

General|Simultaneous Arrival|Stopping-on-a-space powers do not trigger from simultaneous arrival under the August 2026 rule.

Third Wheel|Baba Yaga|If Third Wheel warps onto a space containing Baba Yaga, Baba Yaga’s ability trips Third Wheel.

`.trim();


/*
=========================================================
PARSE INTERACTIONS
=========================================================
*/

const rawInteractions = interactionData
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
        const parts = line.split("|");

        return {
            character: parts[0].trim(),
            with: parts[1].trim(),
            details: parts.slice(2).join("|").trim()
        };
    });


/*
=========================================================
REMOVE DUPLICATE RELATIONSHIPS

This treats:
A|B
and
B|A

as the SAME relationship.

Therefore an interaction is displayed only once on
each character's profile.
=========================================================
*/

const uniqueInteractions = [];
const interactionKeys = new Set();

rawInteractions.forEach(interaction => {
    const names = [
        interaction.character,
        interaction.with
    ].sort((a, b) => a.localeCompare(b));

    const key = `${names[0]}|${names[1]}`;

    if (!interactionKeys.has(key)) {
        interactionKeys.add(key);
        uniqueInteractions.push(interaction);
    }
});


/*
=========================================================
CHARACTER LOOKUP
=========================================================
*/

function getAthlete(name) {
    return athletes.find(athlete => athlete.name === name);
}


function getInteractions(characterName) {
    return uniqueInteractions.filter(interaction =>
        interaction.character === characterName ||
        interaction.with === characterName
    );
}


function getOtherCharacter(interaction, characterName) {
    if (interaction.character === characterName) {
        return interaction.with;
    }

    return interaction.character;
}


/*
=========================================================
HTML SAFETY
=========================================================
*/

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/*
=========================================================
PAGE ELEMENTS
=========================================================
*/

const athleteGrid = document.getElementById("athlete-grid");
const searchInput = document.getElementById("search");
const resultCount = document.getElementById("result-count");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

const filterButtons = document.querySelectorAll(".filter");

let currentFilter = "all";


/*
=========================================================
RENDER CHARACTER CARDS
=========================================================
*/

function renderAthletes() {

    const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const filteredAthletes = athletes.filter(athlete => {

        const matchesFilter =
            currentFilter === "all" ||
            athlete.category.toLowerCase() === currentFilter;

        /*
        IMPORTANT:
        Search ONLY searches character information.

        Interactions are intentionally NOT included.
        */

        const searchableText = [
            athlete.name,
            athlete.category,
            athlete.power,
            athlete.ability
        ]
            .join(" ")
            .toLowerCase();

        const matchesSearch =
            searchTerm === "" ||
            searchableText.includes(searchTerm);

        return matchesFilter && matchesSearch;
    });


    if (resultCount) {
        resultCount.textContent =
            filteredAthletes.length === 1
                ? "1 racer"
                : `${filteredAthletes.length} racers`;
    }


    if (filteredAthletes.length === 0) {

        athleteGrid.innerHTML = `
            <div class="no-results">
                <h2>No racers found</h2>
                <p>Try a different search or filter.</p>
            </div>
        `;

        return;
    }


    athleteGrid.innerHTML = filteredAthletes
        .map(athlete => `
            <article
                class="athlete-card"
                tabindex="0"
                role="button"
                data-name="${escapeHTML(athlete.name)}"
                aria-label="View ${escapeHTML(athlete.name)}"
            >

                <img
                    class="athlete-image"
                    src="${escapeHTML(athlete.image)}"
                    alt="${escapeHTML(athlete.name)}"
                    loading="lazy"
                >

                <h2 class="card-name">
                    ${escapeHTML(athlete.name)}
                </h2>

                <p class="card-power">
                    ${escapeHTML(athlete.power)}
                </p>

            </article>
        `)
        .join("");


    document.querySelectorAll(".athlete-card").forEach(card => {

        card.addEventListener("click", () => {
            openModal(card.dataset.name);
        });


        card.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                openModal(card.dataset.name);
            }

        });

    });
}


/*
=========================================================
MAKE CHARACTER NAMES CLICKABLE
=========================================================
*/

function makeCharacterLink(name) {

    const athlete = getAthlete(name);

    if (!athlete) {
        return escapeHTML(name);
    }

    return `
        <button
            type="button"
            class="interaction-character-link"
            data-character="${escapeHTML(name)}"
        >
            ${escapeHTML(name)}
        </button>
    `;
}


/*
=========================================================
OPEN CHARACTER PROFILE
=========================================================
*/

function openModal(characterName) {

    const athlete = getAthlete(characterName);

    if (!athlete) {
        return;
    }


    const interactions = getInteractions(characterName)
        .filter(interaction => {
            /*
            General rules are not character-specific.
            They are displayed separately below.
            */
            return interaction.character !== "General" &&
                   interaction.with !== "General";
        })
        .sort((a, b) => {

            const otherA =
                getOtherCharacter(a, characterName);

            const otherB =
                getOtherCharacter(b, characterName);

            return otherA.localeCompare(otherB);
        });


    const interactionHTML = interactions.length > 0
        ? `
            <div class="interaction-list">

                ${interactions.map(interaction => {

                    const otherCharacter =
                        getOtherCharacter(
                            interaction,
                            characterName
                        );

                    return `
                        <article class="interaction">

                            <div class="interaction-with">
                                ${makeCharacterLink(otherCharacter)}
                            </div>

                            <div class="interaction-details">
                                ${escapeHTML(interaction.details)}
                            </div>

                        </article>
                    `;

                }).join("")}

            </div>
        `
        : `
            <p class="interaction-summary">
                No character-specific interactions are currently listed.
            </p>
        `;


    modalContent.innerHTML = `

        <div class="modal-profile">

            <div class="modal-profile-fixed">

                <img
                    class="modal-athlete-image"
                    src="${escapeHTML(athlete.image)}"
                    alt="${escapeHTML(athlete.name)}"
                >

                <div class="modal-heading">

                    <h2
                        id="modal-title"
                        class="modal-title"
                    >
                        ${escapeHTML(athlete.name)}
                    </h2>

                    <p class="modal-power-name">
                        ${escapeHTML(athlete.power)}
                    </p>

                    <div class="official-text ability-text">
                        ${escapeHTML(athlete.ability)}
                    </div>

                </div>

            </div>


            <section class="info-section">

                <h3>
                    Character Interactions
                </h3>

                ${interactionHTML}

            </section>


            <section class="info-section general-rules-section">

                <h3>
                    General Rule
                </h3>

                <div class="interaction">

                    <div class="interaction-with">
                        Simultaneous Arrival
                    </div>

                    <div class="interaction-details">
                        Stopping-on-a-space powers do not trigger from simultaneous arrival under the August 2026 rule.
                    </div>

                </div>

            </section>

        </div>
    `;


    /*
    Make character names inside the interaction list clickable.
    */

    document
        .querySelectorAll(".interaction-character-link")
        .forEach(link => {

            link.addEventListener("click", event => {

                event.preventDefault();
                event.stopPropagation();

                openModal(link.dataset.character);

            });

        });


    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");


    if (modalClose) {
        modalClose.focus();
    }
}


/*
=========================================================
CLOSE MODAL
=========================================================
*/

function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
}


/*
=========================================================
SEARCH
=========================================================
*/

if (searchInput) {
    searchInput.addEventListener("input", renderAthletes);
}


/*
=========================================================
FILTERS
=========================================================
*/

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(filter => {
            filter.classList.remove("active");
        });


        button.classList.add("active");


        currentFilter =
            button.dataset.filter;


        renderAthletes();

    });

});


/*
=========================================================
MODAL CLOSE BUTTON
=========================================================
*/

if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeModal
    );
}


/*
=========================================================
CLICK BACKDROP TO CLOSE
=========================================================
*/

if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closeModal
    );

}


/*
=========================================================
ESCAPE KEY
=========================================================
*/

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("open")
    ) {

        closeModal();

    }

});


/*
=========================================================
PREVENT DIALOG CLICKS FROM CLOSING MODAL
=========================================================
*/

const modalDialog =
    document.querySelector(".modal-dialog");

if (modalDialog) {

    modalDialog.addEventListener(
        "click",
        event => event.stopPropagation()
    );

}


/*
=========================================================
INITIAL RENDER
=========================================================
*/

renderAthletes();
