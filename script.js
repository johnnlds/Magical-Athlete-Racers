/* =========================================================
   BASE GAME RACERS
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
   SECOND WIND RACERS
   ========================================================= */

const expansionAthletes = [

  {
    name: "Bite Mark",
    power: "HUUAARRGGHHH!!!!",
    ability: "When I roll a 1 or 2 for my main move, I transform into a W.E.R.E.M.O.U.T.H. who eliminates any racers I pass.",
    image: "images/expansion/Bite Mark.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Blunderdog",
    power: "BLUNDERTRAIL",
    ability: "When I'm in last place, triple my main move roll. When I'm not, I move backwards for my main move instead.",
    image: "images/expansion/Blunderdog.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Cheatah",
    power: "SLEIGHT OF PAW",
    ability: "Instead of rolling for my main move, I secretly set my die to any number. If the player to my right guesses the number, I don't move.",
    image: "images/expansion/Cheatah.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Critic",
    power: "BON MOTS",
    ability: "I can make racers ahead of me reroll their main move once per turn.",
    image: "images/expansion/Critic.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Diva",
    power: "QUELLE DRAMATIQUE!",
    ability: "If I'm in last place at the start of my turn, I swap spaces with the lead racer. Otherwise, I swap with the last place racer.",
    image: "images/expansion/Diva.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Doppelgängster",
    power: "TAKE A DIVE",
    ability: "The racer who finishes 1st is eliminated instead. I get their power.",
    image: "images/expansion/Doppelgangster.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Gloth",
    power: "GLORPOR",
    ability: "I get -1 to my main move. When the race ends, I get 3 points if I'm not past the second corner.",
    image: "images/expansion/Gloth.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Hog Knight",
    power: "PIGGYBACK",
    ability: "I start my race on a hog that gives +2 to its rider's main move. When a racer stops on the hog's space, they take it.",
    image: "images/expansion/Hog Knight.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Hopfrog",
    power: "BOIOIOING",
    ability: "When I end my turn 1 space behind a racer, I take an extra turn.",
    image: "images/expansion/Hopfrog.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Hotel",
    power: "MONOPOLIZE",
    ability: "When a racer stops on my space, they pay me 1 point. If they can't, they trip.",
    image: "images/expansion/Hotel.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Icarus",
    power: "FLIGHT RISK",
    ability: "I get +3 to my main move. If I roll a 6 for my main move, I'm eliminated.",
    image: "images/expansion/Icarus.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Kingtripper",
    power: "REGISLIDE",
    ability: "At the start of my turn, I can trip the lead racer.",
    image: "images/expansion/Kingtripper.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Kraken",
    power: "GET OVER HERE",
    ability: "Once per race, at the start of my turn, I can warp all other racers to my space and trip them.",
    image: "images/expansion/Kraken.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Le Saboteur",
    power: "TROIS REVOIR",
    ability: "When other racers roll a 3 for their main move, they move backwards instead.",
    image: "images/expansion/LeSaboteur.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Magical Athlete",
    power: "FLEXOMANCY",
    ability: "When I roll this for my main move…\n1: I move 7.\n2: The last place racer warps to me.\n3: I warp to another racer and trip them.\n4: I move 4 and take an extra turn.\n5: The lead racer moves backwards 5.\n6: I move 6 and trip any racers I pass.",
    image: "images/expansion/Magical Athlete.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Mole",
    power: "TUNNELIN'",
    ability: "If there aren't any racers within 1 space of me, I can skip rolling for my main move and move 6 instead.",
    image: "images/expansion/Mole.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Mr. Dice Guy",
    power: "YES! MORE!",
    ability: "I roll all six dice for my main move and pick any number that was rolled more than once.",
    image: "images/expansion/Mr. Dice Guy.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Mush",
    power: "GLOBSTER MASH",
    ability: "When I roll a 1 or 2 for my main move, I draw a racer card and get its power for the rest of the race.",
    image: "images/expansion/Mush.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Nemesis",
    power: "GRUDGE MATCH",
    ability: "When other racers roll for their main move, I can roll too. If I roll the same, I move that amount.",
    image: "images/expansion/Nemesis.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Nepo Baby",
    power: "HUGELY RICH",
    ability: "I start the race on the first corner of the track.",
    image: "images/expansion/Nepo Baby.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Null",
    power: "VOID",
    ability: "Racers ahead of me get -1 to their main move and have no powers.",
    image: "images/expansion/Null.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Overtaker",
    power: "SKULLDIGGERY",
    ability: "I get +1 to my main move for each racer ahead of me.",
    image: "images/expansion/Overtaker.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Party Pooper",
    power: "NOISE COMPLAINT",
    ability: "All sixes must be rerolled. When they are, I move 1.",
    image: "images/expansion/Party Pooper.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Penguin",
    power: "TUMMY TIME",
    ability: "Whenever a racer passes me, I trip. While I'm tripped, double my roll for my main move instead of skipping it.",
    image: "images/expansion/Penguin.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Re-Runner",
    power: "RUN IT BACK",
    ability: "After my first race, I race as an extra racer for my player in all remaining races.",
    image: "images/expansion/Re-Runner.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Show-Off",
    power: "GUYS, WATCH!",
    ability: "After I roll for my main move, I can keep rolling and adding each amount to my move. If I ever roll the same or lower, I don't move.",
    image: "images/expansion/Show-Off.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Soulmate",
    power: "TWIN FLAME",
    ability: "Before my race, I pick any opposing racer. When I start my turn within 5 spaces of them, I warp to their space.",
    image: "images/expansion/Soulmate.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Speed Demon",
    power: "TERMINAL VELOCITY",
    ability: "I get +1 to my main move for each point my player has. I am eliminated if I'm 4+ spaces in the lead at the start of my turn.",
    image: "images/expansion/Speed Demon.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Spoilsport",
    power: "CRY FOUL",
    ability: "If all other racers are 5+ spaces ahead of me at the start of my turn, the race is cancelled and I get 3 points.",
    image: "images/expansion/Spoilsport.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Stepdad",
    power: "STEP UP",
    ability: "The racer to my left gets +2 to their main move. If they finish 1st, I get 3 points.",
    image: "images/expansion/Stepdad.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Streaker",
    power: "EXHIBIT B",
    ability: "When I pass any racers, I get 1 point.",
    image: "images/expansion/Streaker.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Stunner",
    power: "STOP TRAFFIC",
    ability: "Other racers within 1 space of me roll a 1 for all rolls.",
    image: "images/expansion/Stunner.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Switcharoo",
    power: "MARSWAPIAL",
    ability: "When I end my turn within 1 space of another racer, I can swap who controls which racer: their player takes my card and I take theirs.",
    image: "images/expansion/Switcharoo.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Tail",
    power: "REAR END",
    ability: "At the start of my turn, I can warp to the space behind the next racer ahead of me.",
    image: "images/expansion/Tail.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "The Hose",
    power: "POWER WASH",
    ability: "At the end of my turn, roll a die and trip every racer within that many spaces ahead of me.",
    image: "images/expansion/The Hose.png",
    expansion: true,
    tags: ["second wind"]
  },

  {
    name: "Understudy",
    power: "THE METHOD",
    ability: "Before my race, I copy an opposing racer's power.",
    image: "images/expansion/Understudy.png",
    expansion: true,
    tags: ["second wind"]
  }

];


/* =========================================================
   INTERACTIONS
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
   COMBINED RACER DATA
   ========================================================= */

const allAthletes = [
  ...athletes,
  ...expansionAthletes
];


/* =========================================================
   STATE
   ========================================================= */

let currentView = "list";

let currentFilter = "all";

let currentProfileName = null;

let currentNavigationList = [];

let currentProfileIndex = -1;

let touchStartX = 0;

let touchStartY = 0;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const characterGrid =
  document.getElementById("characterGrid");

const searchInput =
  document.getElementById("searchInput");

const characterCount =
  document.getElementById("characterCount");

const noResults =
  document.getElementById("noResults");

const listViewButton =
  document.getElementById("listViewButton");

const gridViewButton =
  document.getElementById("gridViewButton");

const allFilterButton =
  document.getElementById("allFilterButton");

const baseFilterButton =
  document.getElementById("baseFilterButton");

const expansionFilterButton =
  document.getElementById("expansionFilterButton");

const profileModal =
  document.getElementById("profileModal");

const modalOverlay =
  document.getElementById("modalOverlay");

const closeModalButton =
  document.getElementById("closeModal");

const prevProfileButton =
  document.getElementById("prevProfile");

const nextProfileButton =
  document.getElementById("nextProfile");

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


/* =========================================================
   HELPERS
   ========================================================= */

function escapeHtml(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function findAthlete(name) {

  return allAthletes.find(
    athlete => athlete.name === name
  );

}


/* =========================================================
   FILTERING
   ========================================================= */

function getFilteredAthletes() {

  if (currentFilter === "base") {

    return athletes;

  }

  if (currentFilter === "secondWind") {

    return expansionAthletes;

  }

  return allAthletes;

}


/* =========================================================
   SEARCH
   ========================================================= */

function getVisibleAthletes() {

  const searchTerm =
    searchInput.value
      .trim()
      .toLowerCase();

  return getFilteredAthletes().filter(
    athlete => {

      if (!searchTerm) {
        return true;
      }

      const nameMatch =
        athlete.name
          .toLowerCase()
          .includes(searchTerm);

      const tagMatch =
        (athlete.tags || [])
          .some(tag =>
            tag
              .toLowerCase()
              .includes(searchTerm)
          );

      return nameMatch || tagMatch;

    }
  );

}


/* =========================================================
   RENDER CHARACTERS
   ========================================================= */

function renderCharacters() {

  const visibleAthletes =
    getVisibleAthletes();

  characterGrid.classList.toggle(
    "list-view",
    currentView === "list"
  );

  characterGrid.classList.toggle(
    "icon-view",
    currentView === "grid"
  );

  characterCount.textContent =
    `${visibleAthletes.length} ${
      visibleAthletes.length === 1
        ? "racer"
        : "racers"
    }`;

  if (visibleAthletes.length === 0) {

    characterGrid.innerHTML = "";

    noResults.classList.remove("hidden");

    return;

  }

  noResults.classList.add("hidden");


  characterGrid.innerHTML =
    visibleAthletes
      .map(createCharacterCard)
      .join("");


  attachCharacterEvents();

}


/* =========================================================
   CREATE CHARACTER CARD
   ========================================================= */

function createCharacterCard(athlete) {

  const secondWindBadge =
    athlete.expansion
      ? `
        <span class="second-wind-badge">
          Second Wind
        </span>
      `
      : "";


  return `

    <article
      class="character-card"
      tabindex="0"
      role="button"
      data-name="${escapeHtml(athlete.name)}"
      aria-label="View ${escapeHtml(athlete.name)} profile"
    >

      <img
        class="character-card-image"
        src="${escapeHtml(athlete.image)}"
        alt="${escapeHtml(athlete.name)}"
        loading="lazy"
      >

      <div class="character-card-content">

        <h3 class="character-card-name">
          ${escapeHtml(athlete.name)}
        </h3>

        <div class="character-card-power">
          ${escapeHtml(athlete.power)}
        </div>

        <div class="character-card-ability">
          ${escapeHtml(athlete.ability)}
        </div>

        ${secondWindBadge}

      </div>

    </article>

  `;

}


/* =========================================================
   CARD EVENTS
   ========================================================= */

function attachCharacterEvents() {

  const cards =
    characterGrid.querySelectorAll(
      ".character-card"
    );


  cards.forEach(card => {

    const name =
      card.dataset.name;


    card.addEventListener(
      "click",
      () => openProfile(name)
    );


    card.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter" ||
          event.key === " "
        ) {

          event.preventDefault();

          openProfile(name);

        }

      }
    );

  });

}


/* =========================================================
   INTERACTIONS
   ========================================================= */

function getInteractionsForAthlete(name) {

  return interactionData.filter(
    interaction =>
      interaction.racers.includes(name)
  );

}


function createInteractionHtml(interaction) {

  const otherRacers =
    interaction.racers.filter(
      racer => racer !== currentProfileName
    );


  const racerLinks =
    otherRacers.length
      ? otherRacers
          .map(
            racer => `
              <button
                type="button"
                class="interaction-character"
                data-racer="${escapeHtml(racer)}"
              >
                ${escapeHtml(racer)}
              </button>
            `
          )
          .join(
            `<span class="interaction-separator">•</span>`
          )
      : "";


  return `

    <div class="interaction-card">

      <div class="interaction-racers">
        ${racerLinks}
      </div>

      <div class="interaction-text">
        ${escapeHtml(interaction.text)}
      </div>

    </div>

  `;

}


function attachInteractionCharacterEvents() {

  const links =
    interactionList.querySelectorAll(
      ".interaction-character"
    );


  links.forEach(link => {

    link.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const racer =
          link.dataset.racer;

        openProfile(racer);

      }
    );

  });

}


/* =========================================================
   PROFILE NAVIGATION
   ========================================================= */

function updateProfileNavigation() {

  const list =
    currentNavigationList;

  const hasNavigation =
    list.length > 1;

  prevProfileButton.disabled =
    !hasNavigation;

  nextProfileButton.disabled =
    !hasNavigation;

}


/* =========================================================
   OPEN PROFILE
   ========================================================= */

function openProfile(name) {

  const athlete =
    findAthlete(name);

  if (!athlete) {
    return;
  }


  currentProfileName =
    athlete.name;


  /*
   * Use the currently visible list for
   * previous / next navigation.
   *
   * If the racer isn't in the current
   * filtered list, fall back to everyone.
   */

  let navigationList =
    getVisibleAthletes();


  let index =
    navigationList.findIndex(
      racer =>
        racer.name === athlete.name
    );


  if (index === -1) {

    navigationList =
      allAthletes;

    index =
      navigationList.findIndex(
        racer =>
          racer.name === athlete.name
      );

  }


  currentNavigationList =
    navigationList;

  currentProfileIndex =
    index;


  renderProfile(athlete);

}


/* =========================================================
   RENDER PROFILE
   ========================================================= */

function renderProfile(athlete) {

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


  if (athlete.expansion) {

    interactionCount.textContent =
      "Coming soon";

    interactionList.innerHTML = `

      <div class="interaction-card">

        <div class="interaction-text">
          Coming soon.
        </div>

      </div>

    `;

    noInteractions.classList.add(
      "hidden"
    );

  } else {

    const interactions =
      getInteractionsForAthlete(
        athlete.name
      );


    interactionCount.textContent =
      `${interactions.length} ${
        interactions.length === 1
          ? "interaction"
          : "interactions"
      }`;


    if (interactions.length === 0) {

      interactionList.innerHTML = "";

      noInteractions.classList.remove(
        "hidden"
      );

    } else {

      noInteractions.classList.add(
        "hidden"
      );


      interactionList.innerHTML =
        interactions
          .map(createInteractionHtml)
          .join("");


      attachInteractionCharacterEvents();

    }

  }


  updateProfileNavigation();


  profileModal.classList.add(
    "open"
  );

  profileModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );


  profileModal.scrollTop = 0;


  /*
   * Scroll the interaction column
   * back to the top when changing racers.
   */

  if (document.querySelector(".profile-interactions")) {

    document.querySelector(
      ".profile-interactions"
    ).scrollTop = 0;

  }

}


/* =========================================================
   NEXT / PREVIOUS PROFILE
   ========================================================= */

function showProfileAtIndex(index) {

  if (
    currentNavigationList.length === 0
  ) {
    return;
  }


  const length =
    currentNavigationList.length;


  /*
   * Wrap around when reaching either end.
   */

  currentProfileIndex =
    (index + length) % length;


  const athlete =
    currentNavigationList[
      currentProfileIndex
    ];


  if (!athlete) {
    return;
  }


  currentProfileName =
    athlete.name;


  renderProfile(athlete);

}


function showPreviousProfile() {

  showProfileAtIndex(
    currentProfileIndex - 1
  );

}


function showNextProfile() {

  showProfileAtIndex(
    currentProfileIndex + 1
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

  document.body.classList.remove(
    "modal-open"
  );

  currentProfileName = null;

}


/* =========================================================
   VIEW TOGGLE
   ========================================================= */

function setView(view) {

  currentView =
    view === "grid"
      ? "grid"
      : "list";


  listViewButton.classList.toggle(
    "active",
    currentView === "list"
  );


  gridViewButton.classList.toggle(
    "active",
    currentView === "grid"
  );


  renderCharacters();

}


/* =========================================================
   FILTER TOGGLE
   ========================================================= */

function setFilter(filter) {

  currentFilter =
    filter;


  allFilterButton.classList.toggle(
    "active",
    currentFilter === "all"
  );


  baseFilterButton.classList.toggle(
    "active",
    currentFilter === "base"
  );


  expansionFilterButton.classList.toggle(
    "active",
    currentFilter === "secondWind"
  );


  renderCharacters();

}


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
  "input",
  renderCharacters
);


/* =========================================================
   VIEW BUTTONS
   ========================================================= */

listViewButton.addEventListener(
  "click",
  () => setView("list")
);


gridViewButton.addEventListener(
  "click",
  () => setView("grid")
);


/* =========================================================
   FILTER BUTTONS
   ========================================================= */

allFilterButton.addEventListener(
  "click",
  () => setFilter("all")
);


baseFilterButton.addEventListener(
  "click",
  () => setFilter("base")
);


expansionFilterButton.addEventListener(
  "click",
  () => setFilter("secondWind")
);


/* =========================================================
   PROFILE BUTTONS
   ========================================================= */

prevProfileButton.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    showPreviousProfile();

  }
);


nextProfileButton.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    showNextProfile();

  }
);


closeModalButton.addEventListener(
  "click",
  closeProfile
);


modalOverlay.addEventListener(
  "click",
  closeProfile
);


/* =========================================================
   ESCAPE KEY
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
   KEYBOARD PROFILE NAVIGATION
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      !profileModal.classList.contains("open")
    ) {
      return;
    }


    /*
     * Don't hijack arrow keys while
     * typing in the search field.
     */

    if (
      document.activeElement === searchInput
    ) {
      return;
    }


    if (event.key === "ArrowLeft") {

      event.preventDefault();

      showPreviousProfile();

    }


    if (event.key === "ArrowRight") {

      event.preventDefault();

      showNextProfile();

    }

  }
);


/* =========================================================
   SWIPE SUPPORT
   ========================================================= */

profileModal.addEventListener(
  "touchstart",
  event => {

    if (
      event.touches.length !== 1
    ) {
      return;
    }


    touchStartX =
      event.touches[0].clientX;

    touchStartY =
      event.touches[0].clientY;

  },
  { passive: true }
);


profileModal.addEventListener(
  "touchend",
  event => {

    if (
      event.changedTouches.length !== 1
    ) {
      return;
    }


    const touch =
      event.changedTouches[0];


    const deltaX =
      touch.clientX - touchStartX;


    const deltaY =
      touch.clientY - touchStartY;


    const horizontalDistance =
      Math.abs(deltaX);


    const verticalDistance =
      Math.abs(deltaY);


    /*
     * Require a meaningful horizontal
     * swipe and make sure it wasn't
     * primarily a vertical scroll.
     */

    if (
      horizontalDistance < 60 ||
      horizontalDistance <= verticalDistance
    ) {
      return;
    }


    /*
     * Swipe LEFT = next racer.
     *
     * Swipe RIGHT = previous racer.
     */

    if (deltaX < 0) {

      showNextProfile();

    } else {

      showPreviousProfile();

    }

  },
  { passive: true }
);


/* =========================================================
   INITIAL RENDER
   ========================================================= */

renderCharacters();
