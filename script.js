const characters = [
  ["Alchemist", "images/IMG_3304.png"],
  ["Baba Yaga", "images/IMG_3305.png"],
  ["Banana", "images/IMG_3306.png"],
  ["Blimp", "images/IMG_3307.png"],
  ["Centaur", "images/IMG_3308.png"],
  ["Cheerleader", "images/IMG_3309.png"],
  ["Coach", "images/IMG_3310.png"],
  ["Copycat", "images/IMG_3311.png"],
  ["Dicemonger", "images/IMG_3312.png"],
  ["Duelist", "images/IMG_3313.png"],
  ["Egg", "images/IMG_3314.png"],
  ["Flip Flop", "images/IMG_3315.png"],
  ["Genius", "images/IMG_3316.png"],
  ["Gunk", "images/IMG_3317.png"],
  ["Hare", "images/IMG_3318.png"],
  ["Heckler", "images/IMG_3319.png"],
  ["Huge Baby", "images/IMG_3320.png"],
  ["Hypnotist", "images/IMG_3321.png"],
  ["Inchworm", "images/IMG_3322.png"],
  ["Lackey", "images/IMG_3323.png"],
  ["Leaptoad", "images/IMG_3324.png"],
  ["Legs", "images/IMG_3325.png"],
  ["Lovable Loser", "images/IMG_3326.png"],
  ["Magician", "images/IMG_3327.png"],
  ["Mastermind", "images/IMG_3328.png"],
  ["M.O.U.T.H.", "images/IMG_3329.png"],
  ["Party Animal", "images/IMG_3330.png"],
  ["Rocket Scientist", "images/IMG_3331.png"],
  ["Romantic", "images/IMG_3332.png"],
  ["Scoocher", "images/IMG_3333.png"],
  ["Sisyphus", "images/IMG_3334.png"],
  ["Skipper", "images/IMG_3335.png"],
  ["Stickler", "images/IMG_3336.png"],
  ["Suckerfish", "images/IMG_3337.png"],
  ["Third Wheel", "images/IMG_3338.png"],
  ["Twin", "images/IMG_3339.png"]
];

const grid = document.getElementById("characterGrid");
const count = document.getElementById("characterCount");
const search = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function renderCharacters(list) {

  grid.innerHTML = "";

  count.textContent = `${list.length} racers`;

  if (list.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  list.forEach(character => {

    const name = character[0];
    const image = character[1];

    const card = document.createElement("div");

    card.className = "character-card";

    card.innerHTML = `
      <img
        class="character-card-image"
        src="${image}"
        alt="${name}"
      >

      <h3 class="character-card-name">
        ${name}
      </h3>
    `;

    grid.appendChild(card);

  });
}

search.addEventListener("input", function () {

  const searchTerm = search.value.toLowerCase().trim();

  const filtered = characters.filter(character =>
    character[0].toLowerCase().includes(searchTerm)
  );

  renderCharacters(filtered);

});

renderCharacters(characters);
