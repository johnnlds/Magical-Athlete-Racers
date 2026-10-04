const athletes = [
    {
        name: "Alchemist",
        category: "Dice",
        power: "Transmute ‘N’ Scoot",
        ability: "When I roll a 1 or 2 for my main move, I can move 4 instead.",
        image: "images/IMG_3304.png"
    },
    {
        name: "Baba Yaga",
        category: "Position",
        power: "Leg It",
        ability: "Trip any racer that stops on my space, or when I stop on theirs.",
        image: "images/IMG_3305.png"
    },
    {
        name: "Banana",
        category: "Position",
        power: "The Slip",
        ability: "I trip any racer that passes me.",
        image: "images/IMG_3306.png"
    },
    {
        name: "Blimp",
        category: "Movement",
        power: "Blow It",
        ability: "If I start my turn before the second corner, I get +3 to my main move. On or after the second corner, I get −1.",
        image: "images/IMG_3307.png"
    },
    {
        name: "Centaur",
        category: "Movement",
        power: "Hoofwhack",
        ability: "When I pass a racer, they move −2. They cannot be moved farther back than Start.",
        image: "images/IMG_3308.png"
    },
    {
        name: "Cheerleader",
        category: "Movement",
        power: "Rah Rah",
        ability: "Before my main move, I can make the racer(s) in last place move 2. If I do, I move 1.",
        image: "images/IMG_3309.png"
    },
    {
        name: "Coach",
        category: "Movement",
        power: "Good Hustle",
        ability: "Everyone on my space gets +1 to their main move, including me.",
        image: "images/IMG_3310.png"
    },
    {
        name: "Copy Cat",
        category: "Special",
        power: "Copy That",
        ability: "I have the power of the racer currently in the lead. If there’s a tie, I choose which racer to copy.",
        image: "images/IMG_3311.png"
    },
    {
        name: "Dicemonger",
        category: "Dice",
        power: "Dicey Deals",
        ability: "Anyone can reroll their main move once per turn. When another racer rerolls, I move 1.",
        image: "images/IMG_3312.png"
    },
    {
        name: "Duelist",
        category: "Position",
        power: "Duel!",
        ability: "Whenever a racer shares my space, I can shout DUEL! We roll; whoever rolls highest moves 2. I win ties.",
        image: "images/IMG_3313.png"
    },
    {
        name: "Egg",
        category: "Special",
        power: "Scramble",
        ability: "Before my race, draw 3 new racers and choose one. I have that racer’s powers.",
        image: "images/IMG_3314.png"
    },
    {
        name: "Flip Flop",
        category: "Movement",
        power: "Flop Flip",
        ability: "I can skip rolling for my main move and swap spaces with another racer.",
        image: "images/IMG_3315.png"
    },
    {
        name: "Genius",
        category: "Dice",
        power: "Think Good",
        ability: "I predict what number I’ll roll. If I’m correct, I get another turn immediately after this one.",
        image: "images/IMG_3316.png"
    },
    {
        name: "Gunk",
        category: "Movement",
        power: "Goop ’Em",
        ability: "Other racers get −1 to their main move.",
        image: "images/IMG_3317.png"
    },
    {
        name: "Hare",
        category: "Movement",
        power: "Hubris",
        ability: "I get +2 to my main move. If I start my turn alone in the lead, I skip my main move.",
        image: "images/IMG_3318.png"
    },
    {
        name: "Heckler",
        category: "Movement",
        power: "Schadenfreude",
        ability: "When a racer ends their turn within 1 space of where they started, I move 2.",
        image: "images/IMG_3319.png"
    },
    {
        name: "Huge Baby",
        category: "Position",
        power: "Really Huge",
        ability: "No one can ever be on my space except at Start. If someone would land there, put them on the space behind me instead.",
        image: "images/IMG_3320.png"
    },
    {
        name: "Hypnotist",
        category: "Position",
        power: "Hssssst",
        ability: "Before my main move, I can warp another racer to my space.",
        image: "images/IMG_3321.png"
    },
    {
        name: "Inchworm",
        category: "Dice",
        power: "Wriggle",
        ability: "When another racer rolls a 1 for their main move, they skip that move and I move 1.",
        image: "images/IMG_3322.png"
    },
    {
        name: "Lackey",
        category: "Dice",
        power: "Very Good Sire",
        ability: "When another racer rolls a 6, I move 2 before they move.",
        image: "images/IMG_3323.png"
    },
    {
        name: "Leaptoad",
        category: "Movement",
        power: "Jumpfrog",
        ability: "While moving, I skip spaces occupied by other racers.",
        image: "images/IMG_3324.png"
    },
    {
        name: "Legs",
        category: "Movement",
        power: "Jog",
        ability: "I can skip rolling and move 5 instead.",
        image: "images/IMG_3325.png"
    },
    {
        name: "Lovable Loser",
        category: "Position",
        power: "D’Aww",
        ability: "Before my main move, I get a 1-point chip if I’m alone in last place.",
        image: "images/IMG_3326.png"
    },
    {
        name: "M.O.U.T.H.",
        category: "Position",
        power: "Chomp",
        ability: "When I stop on a space with exactly one other racer, that racer is eliminated.",
        image: "images/IMG_3327.png"
    },
    {
        name: "Magician",
        category: "Dice",
        power: "Poof",
        ability: "I can reroll my main move up to two times. I must use the final roll.",
        image: "images/IMG_3328.png"
    },
    {
        name: "Mastermind",
        category: "Special",
        power: "Know-It-All",
        ability: "At the start of my first turn, I predict which racer will win. If correct, the race immediately ends and I finish 2nd.",
        image: "images/IMG_3329.png"
    },
    {
        name: "Party Animal",
        category: "Position",
        power: "Animal Magnetism",
        ability: "Before my main move, all racers move 1 space toward me. Each other racer on my space gives me +1 to my main move.",
        image: "images/IMG_3330.png"
    },
    {
        name: "Rocket Scientist",
        category: "Dice",
        power: "Kablooey",
        ability: "After rolling, I can double my roll. If I do, I trip.",
        image: "images/IMG_3331.png"
    },
    {
        name: "Romantic",
        category: "Position",
        power: "Ah, Love!",
        ability: "Whenever anyone stops on a space with exactly one other racer, I move 2.",
        image: "images/IMG_3332.png"
    },
    {
        name: "Sisyphus",
        category: "Dice",
        power: "Keep Rollin’",
        ability: "Before my race, I take 4 point chips. Whenever I roll a 6, I warp to Start instead of moving and lose 1 point chip.",
        image: "images/IMG_3333.png"
    },
    {
        name: "Skipper",
        category: "Dice",
        power: "Salty Dog",
        ability: "Whenever anyone rolls a 1, I go next in turn order.",
        image: "images/IMG_3334.png"
    },
    {
        name: "Scoocher",
        category: "Special",
        power: "Scooch Scooch",
        ability: "Whenever another racer’s power happens, I move 1.",
        image: "images/IMG_3335.png"
    },
    {
        name: "Stickler",
        category: "Movement",
        power: "Actually…",
        ability: "Other racers can only cross the finish line if they move the exact number of spaces needed. If they overshoot, they don’t move.",
        image: "images/IMG_3336.png"
    },
    {
        name: "Suckerfish",
        category: "Movement",
        power: "Sucker!",
        ability: "When a racer on my space moves, I can move with them to their new space.",
        image: "images/IMG_3337.png"
    },
    {
        name: "Third Wheel",
        category: "Position",
        power: "Roll Through",
        ability: "Before my main move, I can warp to any space containing exactly 2 racers.",
        image: "images/IMG_3338.png"
    },
    {
        name: "Twin",
        category: "Special",
        power: "Double Dip",
        ability: "Before my race, I can choose a racer who won a previous race and race using their powers.",
        image: "images/IMG_3339.png"
    }
];


/*
    INTERACTIONS

    Each relationship is stored only once.

    Example:
        Huge Baby|Baba Yaga|...

    is one interaction relationship.

    The display system automatically shows that relationship
    on BOTH characters' pages without storing a duplicate
    Baba Yaga|Huge Baby entry.
*/

const interactionData = `
Alchemist|Gunk|Gunk reduces Alchemist's replacement 4-space main move by 1.
Alchemist|Coach|Coach can increase Alchemist's replacement main move.
Alchemist|Inchworm|Alchemist can roll a 1 and replace the resulting movement with 4; Inchworm cares about the die roll rather than the resulting movement.
Alchemist|Lackey|Alchemist can roll a 6 normally; replacing movement only occurs on 1/2.
Alchemist|Skipper|A rolled 1 can trigger Skipper even if Alchemist replaces the resulting movement.
Alchemist|Sisyphus|A rolled 6 interacts with Sisyphus based on the die result rather than movement.
Alchemist|Magician|Magician can reroll the die and potentially prevent an initial 1/2 from becoming an Alchemist activation.
Alchemist|Dicemonger|Dicemonger can change the die result before Alchemist's replacement ability resolves.
Alchemist|Rocket Scientist|Rocket Scientist can double the eventual main movement and then trip.
Alchemist|Banana|Alchemist's movement can cause normal passing interactions with Banana.
Alchemist|Centaur|Alchemist's movement can cause normal passing interactions with Centaur.
Alchemist|Baba Yaga|Alchemist can end its movement on Baba Yaga's space and trigger relevant stopping effects.
Alchemist|Huge Baby|Huge Baby prevents normal sharing of a space.
Alchemist|M.O.U.T.H.|Alchemist can potentially stop in M.O.U.T.H.'s range.
Alchemist|Romantic|Stopping on Romantic can trigger its space-based ability when conditions are met.
Alchemist|Stickler|Replacement movement must still obey exact-finish requirements.

Baba Yaga|Duelist|They can duel while sharing Baba Yaga's space, but Duelist still gets tripped.
Baba Yaga|Hypnotist|Hypnotist can warp Baba Yaga onto its space, but Baba Yaga's trip effect still applies.
Baba Yaga|Huge Baby|Huge Baby prevents normal sharing of a space.
Baba Yaga|M.O.U.T.H.|Sharing or stopping can create both Baba Yaga's trip and M.O.U.T.H.'s Chomp timing question.
Baba Yaga|Romantic|Normal stopping-on-space interaction applies when conditions are met.
Baba Yaga|Suckerfish|Suckerfish movement can interact with Baba Yaga's trip effect.
Baba Yaga|Party Animal|Party Animal's simultaneous movement creates an important timing question with Baba Yaga.
Baba Yaga|Cheerleader|Cheerleader can move racers simultaneously into Baba Yaga's space; timing is important.
Baba Yaga|Scoocher|Baba Yaga's trip is a power and can trigger Scoocher.
Baba Yaga|Heckler|Baba Yaga can cause a racer to trip, producing a potential Heckler interaction.

Banana|Centaur|Centaur's movement can interact with Banana's trip when racers pass Banana.
Banana|Huge Baby|Huge Baby/Banana has received designer clarification concerning the interaction.
Banana|M.O.U.T.H.|Passing and stopping interactions can affect whether M.O.U.T.H. reaches Banana.
Banana|Flip Flop|Flip Flop's swap is a warp and does not itself count as passing.
Banana|Hypnotist|Hypnotist warping does not count as passing.
Banana|Suckerfish|Suckerfish movement can interact with Banana's position.
Banana|Romantic|Banana's trip is a power; stopping conditions can interact with Romantic.
Banana|Scoocher|Banana's trip is a power and triggers Scoocher.
Banana|Heckler|Banana can trip a racer and create a Heckler interaction.
Banana|Copy Cat|Copy Cat can acquire Banana's power when Banana is in the lead.
Banana|Leaptoad|Leaptoad's occupied-space skipping changes how Banana's passing condition applies.

Blimp|Gunk|Gunk modifies Blimp's main movement.
Blimp|Coach|Coach modifies Blimp's main movement.
Blimp|Hare|Blimp and Hare both affect main movement.
Blimp|Rocket Scientist|Rocket Scientist can double Blimp's movement and cause a trip.
Blimp|Alchemist|Alchemist's replacement movement can interact with Blimp's movement rules.
Blimp|Lackey|Blimp's movement changes do not inherently change a rolled 6.
Blimp|Inchworm|Blimp's movement changes do not inherently change a rolled 1.
Blimp|Skipper|Blimp's movement changes do not inherently change a rolled 1.
Blimp|Sisyphus|Blimp's movement changes do not inherently change a rolled 6.
Blimp|Magician|Magician can change the die result affecting Blimp.
Blimp|Dicemonger|Dicemonger can change the die result affecting Blimp.
Blimp|Banana|Blimp's movement can cause passing interactions with Banana.
Blimp|Centaur|Blimp's movement can cause passing interactions with Centaur.
Blimp|Stickler|Blimp's movement must obey exact finishing requirements.
Blimp|Scoocher|Blimp's ability activation can trigger Scoocher.

Centaur|Banana|A racer passing Centaur can be moved backward; passing Banana can also trigger Banana.
Centaur|Huge Baby|Centaur can move racers backward, but Huge Baby's space restriction can intervene.
Centaur|M.O.U.T.H.|Centaur's backward movement can put racers in or out of M.O.U.T.H.'s range.
Centaur|Baba Yaga|Movement can result in ending on Baba Yaga.
Centaur|Suckerfish|Suckerfish can interact with movement modified by Centaur.
Centaur|Romantic|Centaur can end a movement on Romantic.
Centaur|Stickler|Backward movement does not circumvent Stickler's exact-finish rule.
Centaur|Scoocher|Hoofwhack is a power and triggers Scoocher.

Cheerleader|Last-place racers|Cheerleader moves racers currently in last place 2 spaces.
Cheerleader|Huge Baby|Moving racers toward Huge Baby can create displacement interactions.
Cheerleader|Baba Yaga|Simultaneous movement into Baba Yaga can create timing questions.
Cheerleader|Romantic|Simultaneous arrival rules are important for Romantic.
Cheerleader|M.O.U.T.H.|Simultaneous arrival rules are important for M.O.U.T.H.
Cheerleader|Suckerfish|Cheerleader can move a racer that Suckerfish is attached to.
Cheerleader|Flip Flop|Cheerleader can change the positions relevant to Flip Flop.
Cheerleader|Lovable Loser|Both abilities care about last-place positioning.
Cheerleader|Scoocher|Cheerleader's ability is a power and triggers Scoocher.

Coach|Gunk|Coach's +1 and Gunk's -1 interact directly.
Coach|Legs|Legs' 5-space Jog is a main move and receives Coach's bonus.
Coach|Alchemist|Coach can increase Alchemist's replacement movement.
Coach|Hare|Coach's bonus can stack with Hare's movement.
Coach|Rocket Scientist|Coach can increase the amount being doubled by Rocket Scientist.
Coach|Blimp|Coach affects Blimp's movement.
Coach|Lackey|Coach changes movement but not the underlying die result.
Coach|Inchworm|Coach changes movement but not the underlying die result.
Coach|Skipper|Coach changes movement but not the underlying die result.
Coach|Sisyphus|Coach changes movement but not the underlying die result.
Coach|Scoocher|Coach's power activation triggers Scoocher.

Copy Cat|Huge Baby|Copy Cat can copy the lead racer's power; copied power takes priority over Copy Cat's normal restrictions in the relevant interaction.
Copy Cat|M.O.U.T.H.|Copy Cat can acquire M.O.U.T.H.'s Chomp.
Copy Cat|Gunk|Copy Cat can acquire Gunk's movement modification.
Copy Cat|Hare|Copy Cat can acquire Hare's power.
Copy Cat|Suckerfish|Copy Cat can acquire Suckerfish's power.
Copy Cat|Scoocher|Copy Cat can acquire powers that trigger Scoocher.
Copy Cat|Romantic|Copy Cat can acquire Romantic when Romantic is the lead racer.
Copy Cat|Alchemist|Copy Cat can acquire Alchemist's replacement movement.
Copy Cat|Baba Yaga|Copy Cat can acquire Baba Yaga's trip ability.
Copy Cat|Banana|Copy Cat can acquire Banana's trip ability.
Copy Cat|Cheerleader|Copy Cat can acquire Cheerleader's power.
Copy Cat|Coach|Copy Cat can acquire Coach's movement bonus.
Copy Cat|Duelist|Copy Cat can acquire Duelist's ability.
Copy Cat|Hypnotist|Copy Cat can acquire Hypnotist's ability.
Copy Cat|Inchworm|Copy Cat can acquire Inchworm's ability.
Copy Cat|Lackey|Copy Cat can acquire Lackey's ability.
Copy Cat|Leaptoad|Copy Cat can acquire Leaptoad's ability.
Copy Cat|Legs|Copy Cat can acquire Legs' ability.
Copy Cat|Lovable Loser|Copy Cat can acquire Lovable Loser's ability.
Copy Cat|Magician|Copy Cat can acquire Magician's ability.
Copy Cat|Party Animal|Copy Cat can acquire Party Animal's ability.
Copy Cat|Rocket Scientist|Copy Cat can acquire Rocket Scientist's ability.
Copy Cat|Skipper|Copy Cat can acquire Skipper's ability.
Copy Cat|Stickler|Copy Cat can acquire Stickler's ability.
Copy Cat|Third Wheel|Copy Cat can acquire Third Wheel's ability.
Copy Cat|Twin|Copy Cat can acquire Twin's ability.

Dicemonger|Magician|Magician's own rerolls do not count as Dicemonger's reroll service.
Dicemonger|Genius|Rerolls can invalidate the result predicted by Genius.
Dicemonger|Inchworm|Rerolling a 1 can prevent Inchworm's trigger.
Dicemonger|Lackey|Rerolling can change whether a 6 occurs.
Dicemonger|Skipper|Rerolling can change whether a 1 occurs.
Dicemonger|Sisyphus|Rerolling can change whether a 6 occurs.
Dicemonger|Rocket Scientist|The final die result determines Rocket Scientist's movement.
Dicemonger|Scoocher|Dicemonger can cause Scoocher to move for applicable rerolls.

Duelist|Baba Yaga|Duelist can duel Baba Yaga but still gets tripped.
Duelist|M.O.U.T.H.|Duelist can duel M.O.U.T.H.; resulting placement can create unusual interactions.
Duelist|Huge Baby|Huge Baby prevents normal sharing.
Duelist|Romantic|Duelist sharing a space can interact with Romantic.
Duelist|Suckerfish|Duelist's position can be altered by Suckerfish.
Duelist|Scoocher|Each duel is a power activation and can trigger Scoocher.
Duelist|Stickler|Duelist's movement must obey exact-finish rules.
Duelist|Banana|Duelist movement can interact with Banana.
Duelist|Centaur|Duelist movement can interact with Centaur.

Egg|Copy Cat|Copy Cat can copy Egg's active power.
Egg|Twin|Egg and Twin both involve borrowed character powers.
Egg|Scoocher|Egg's selected power can trigger Scoocher.
Egg|Gunk|Egg can inherit Gunk's movement modification.
Egg|Coach|Egg can inherit Coach's movement bonus.
Egg|Baba Yaga|Egg can inherit Baba Yaga's trip ability.
Egg|M.O.U.T.H.|Egg can inherit M.O.U.T.H.'s Chomp.
Egg|Huge Baby|Egg can inherit Huge Baby's power.
Egg|Romantic|Egg can inherit Romantic's ability.

Flip Flop|Hypnotist|Hypnotist can warp a racer to its space, affecting Flip Flop's positional advantage.
Flip Flop|Banana|Flip Flop's swap is a warp and does not itself count as passing.
Flip Flop|Huge Baby|Flip Flop cannot create an illegal shared space with Huge Baby.
Flip Flop|M.O.U.T.H.|Warping onto or away from M.O.U.T.H. changes Chomp opportunities.
Flip Flop|Romantic|Warping does not count as ordinary movement into the space.
Flip Flop|Duelist|Swapping can create a new shared-space duel situation.
Flip Flop|Suckerfish|Swapping can alter Suckerfish positioning.
Flip Flop|Stickler|Warping does not itself count as movement toward the finish.

Genius|Magician|Magician can change the die result Genius predicted.
Genius|Dicemonger|Dicemonger can change the die result Genius predicted.
Genius|Gunk|Gunk changes movement, not the predicted die result.
Genius|Coach|Coach changes movement, not the predicted die result.
Genius|Hare|Hare changes movement, not the predicted die result.
Genius|Blimp|Blimp changes movement, not the predicted die result.
Genius|Rocket Scientist|Genius predicts the die result while Rocket Scientist modifies movement.
Genius|Lackey|A predicted 6 can produce Lackey's effect.
Genius|Inchworm|A predicted 1 can produce Inchworm's effect.
Genius|Skipper|A predicted 1 can produce Skipper's effect.
Genius|Sisyphus|A predicted 6 can produce Sisyphus's effect.
Genius|Scoocher|Genius's ability can trigger Scoocher.

Gunk|Coach|Coach's +1 and Gunk's -1 interact directly.
Gunk|Legs|Gunk reduces Legs' 5-space Jog to 4.
Gunk|Alchemist|Gunk reduces Alchemist's replacement movement.
Gunk|Hare|Gunk modifies Hare's movement.
Gunk|Rocket Scientist|Gunk modifies the movement amount being doubled.
Gunk|Blimp|Gunk modifies Blimp's movement.
Gunk|Scoocher|Scoocher moves once for each -1 that affects a main move.
Gunk|M.O.U.T.H.|Gunk can slow M.O.U.T.H. and alter which racer it reaches.
Gunk|Huge Baby|Gunk can participate in displacement/loop interactions involving Huge Baby and Scoocher.
Gunk|Lackey|Gunk does not change the underlying die result; a rolled 6 remains a 6.
Gunk|Inchworm|Gunk does not change the underlying die result; a rolled 1 remains a 1.

Hare|Gunk|Gunk modifies Hare's movement.
Hare|Coach|Coach modifies Hare's movement.
Hare|Blimp|Hare and Blimp can both modify main movement.
Hare|Rocket Scientist|Rocket Scientist can double Hare's movement and cause a trip.
Hare|Magician|Magician can change the die result affecting Hare.
Hare|Dicemonger|Dicemonger can change the die result affecting Hare.
Hare|Genius|Genius predicts Hare's die result.
Hare|Banana|Hare's movement can pass Banana.
Hare|Centaur|Hare's movement can pass Centaur.
Hare|Stickler|Hare's movement cannot overshoot the finish.
Hare|Scoocher|Hare's ability activation can trigger Scoocher.

Heckler|Banana|Banana can trip a racer and create a Heckler interaction.
Heckler|Baba Yaga|Baba Yaga can trip a racer and create a Heckler interaction.
Heckler|Rocket Scientist|Rocket Scientist deliberately trips after doubling.
Heckler|Party Animal|Party Animal deliberately trips.
Heckler|Scoocher|Heckler's ability is a power.
Heckler|Skipper|Extra turns can affect when a tripped racer recovers.
Heckler|Inchworm|Extra movement/turn timing can affect recovery timing.
Heckler|Stickler|Heckler's movement must obey exact-finish rules.

Huge Baby|M.O.U.T.H.|Huge Baby cannot share a space with another racer, preventing normal Chomp interaction.
Huge Baby|Baba Yaga|Huge Baby prevents normal shared-space interaction.
Huge Baby|Duelist|Huge Baby prevents ordinary Duelist sharing.
Huge Baby|Romantic|Huge Baby prevents Romantic's normal shared-space condition.
Huge Baby|Suckerfish|Huge Baby prevents normal ending on its space.
Huge Baby|Party Animal|Party Animal has a specific Huge Baby interaction.
Huge Baby|Banana|Huge Baby/Banana interaction has received designer clarification.
Huge Baby|Copy Cat|Copy Cat's copied power can take priority over Huge Baby in the specified interaction.
Huge Baby|Hypnotist|Hypnotist cannot create an illegal shared space; Huge Baby displaces the racer.
Huge Baby|Third Wheel|Third Wheel cannot create an illegal shared space with Huge Baby.
Huge Baby|Scoocher|Huge Baby and Scoocher can create a loop; resolve the loop once and stop.
Huge Baby|Leaptoad|Leaptoad can skip occupied Huge Baby spaces.
Huge Baby|Cheerleader|Cheerleader movement can cause Huge Baby displacement.

Hypnotist|Baba Yaga|Hypnotist can warp Baba Yaga to its space but still gets tripped.
Hypnotist|Huge Baby|Huge Baby prevents illegal sharing after a warp.
Hypnotist|Flip Flop|Hypnotist can undermine Flip Flop's positional advantage.
Hypnotist|Romantic|Warping does not count as ordinary movement into the space.
Hypnotist|M.O.U.T.H.|Hypnotist can warp M.O.U.T.H. into a position where Chomp may occur.
Hypnotist|Duelist|Warping can create a shared-space duel.
Hypnotist|Suckerfish|Warping can alter Suckerfish's positioning.
Hypnotist|Third Wheel|Warping can change whether a two-racer target exists.
Hypnotist|Scoocher|Hypnotist's power activation triggers Scoocher.

Inchworm|Magician|Magician can reroll a 1 before Inchworm triggers.
Inchworm|Dicemonger|Dicemonger can reroll a 1 before Inchworm triggers.
Inchworm|Alchemist|Alchemist can roll 1 and replace the resulting movement; Inchworm cares about the roll.
Inchworm|Skipper|If a racer rolls 1, Inchworm wriggles first and Skipper takes the next turn.
Inchworm|Sisyphus|Inchworm responds to 1 while Sisyphus responds to 6.
Inchworm|Gunk|Gunk does not change the underlying die result.
Inchworm|Coach|Coach changes movement but not the die result.
Inchworm|Rocket Scientist|A rolled 1 can trigger Inchworm even if movement is later modified.
Inchworm|Scoocher|Inchworm's ability can trigger Scoocher.

Lackey|Gunk|Gunk changes movement but does not change a rolled 6.
Lackey|Magician|Magician can reroll a 6 and prevent Lackey's activation.
Lackey|Dicemonger|Dicemonger can reroll a 6 and prevent Lackey's activation.
Lackey|Genius|Genius can predict a 6.
Lackey|Sisyphus|Both respond to a roll of 6 but have different effects.
Lackey|Coach|Coach changes movement but not the rolled number.
Lackey|Rocket Scientist|Rocket Scientist doubles movement after the roll.
Lackey|Scoocher|Lackey's ability can trigger Scoocher.

Leaptoad|Banana|Leaptoad skips occupied spaces, changing how Banana's passing condition applies.
Leaptoad|Centaur|Leaptoad's movement can skip Centaur rather than interact as ordinary passing.
Leaptoad|M.O.U.T.H.|Leaptoad can jump over M.O.U.T.H. rather than stop on it.
Leaptoad|Huge Baby|Leaptoad can skip Huge Baby's occupied space.
Leaptoad|Romantic|August 2026 rules changed relevant simultaneous-arrival interactions.
Leaptoad|Suckerfish|Leaptoad's skipped spaces affect where it can interact with Suckerfish.
Leaptoad|Scoocher|Scoocher moves once for each occupied space Leaptoad skips.
Leaptoad|Stickler|Leaptoad must still obey exact-finish requirements.

Legs|Gunk|Gunk reduces Legs' 5-space Jog to 4.
Legs|Coach|Coach can increase Legs' Jog.
Legs|Inchworm|Legs does not roll a die for Jog, so Inchworm does not trigger from it.
Legs|Lackey|Legs does not roll a die for Jog, so Lackey does not trigger from it.
Legs|Sisyphus|Legs does not roll a die for Jog, so Sisyphus does not trigger from it.
Legs|Skipper|Legs does not roll a die for Jog, so Skipper does not trigger from it.
Legs|Rocket Scientist|Interaction between Rocket Scientist and Legs' replacement movement needs explicit verification.
Legs|Stickler|Legs' Jog must obey exact finishing requirements.
Legs|Banana|Legs can pass Banana.
Legs|Centaur|Legs can pass Centaur.
Legs|Scoocher|Jog is a power activation and can trigger Scoocher.

Lovable Loser|Cheerleader|Both abilities care about last-place positioning.
Lovable Loser|Flip Flop|Being last can make Lovable Loser relevant to Flip Flop's positioning.
Lovable Loser|Hare|Hare's lead-related ability contrasts with Lovable Loser's last-place ability.
Lovable Loser|M.O.U.T.H.|Being last can make Lovable Loser vulnerable to M.O.U.T.H. positioning.
Lovable Loser|Huge Baby|Huge Baby displacement can change last-place status.
Lovable Loser|Party Animal|Party Animal movement can change who is last.
Lovable Loser|Scoocher|Lovable Loser's ability is a power.

M.O.U.T.H.|Huge Baby|Huge Baby cannot share a space, preventing normal Chomp.
M.O.U.T.H.|Duelist|Duelist can duel M.O.U.T.H.; placement can create unusual interactions.
M.O.U.T.H.|Gunk|Gunk can slow M.O.U.T.H. and alter who it reaches.
M.O.U.T.H.|Copy Cat|Copy Cat can acquire Chomp.
M.O.U.T.H.|Baba Yaga|M.O.U.T.H. stopping can overlap with Baba Yaga's trip.
M.O.U.T.H.|Banana|Banana's position can affect whether M.O.U.T.H. reaches it.
M.O.U.T.H.|Hypnotist|Hypnotist can warp M.O.U.T.H. into Chomp range.
M.O.U.T.H.|Flip Flop|Flip Flop can change M.O.U.T.H.'s Chomp opportunities.
M.O.U.T.H.|Romantic|Simultaneous arrival no longer triggers Chomp under the August rules.
M.O.U.T.H.|Suckerfish|M.O.U.T.H. can be moved into or out of Chomp range by Suckerfish.
M.O.U.T.H.|Third Wheel|Third Wheel can warp into a pair involving M.O.U.T.H.
M.O.U.T.H.|Party Animal|Party Animal's simultaneous movement no longer triggers Chomp.
M.O.U.T.H.|Stickler|M.O.U.T.H. must obey finishing rules.
M.O.U.T.H.|Scoocher|Chomp is a power and can trigger Scoocher.

Magician|Dicemonger|Magician's own rerolls do not trigger Dicemonger's reroll service.
Magician|Inchworm|Magician can reroll a 1 before Inchworm triggers.
Magician|Genius|Magician can change the die result Genius predicted.
Magician|Lackey|Magician can reroll a 6 and prevent Lackey.
Magician|Skipper|Magician can reroll a 1 and prevent Skipper.
Magician|Sisyphus|Magician can reroll a 6 and prevent Sisyphus.
Magician|Rocket Scientist|The final roll determines Rocket Scientist's movement.
Magician|Scoocher|Scoocher moves on each Magician reroll, even if the reroll is not ultimately used.
Magician|Stickler|The final movement must still obey Stickler.

Mastermind|Copy Cat|Copy Cat does not copy Mastermind's before-race prediction.
Mastermind|Egg|Egg's borrowed-power rules need to distinguish pre-race abilities.
Mastermind|Twin|Twin's borrowed-power rules need to distinguish pre-race abilities.
Mastermind|M.O.U.T.H.|M.O.U.T.H. can eliminate Mastermind before the prediction pays off.
Mastermind|Sisyphus|Both have special before-race effects.
Mastermind|Scoocher|If Mastermind ends the race, further power interactions cease.

Party Animal|Huge Baby|Huge Baby has a specific interaction with Party Animal's movement.
Party Animal|Romantic|Party Animal's simultaneous movement no longer triggers Romantic.
Party Animal|M.O.U.T.H.|Party Animal's simultaneous movement no longer triggers M.O.U.T.H.
Party Animal|Baba Yaga|Party Animal creates timing questions with Baba Yaga.
Party Animal|Banana|Party Animal's movement can cause passing interactions.
Party Animal|Centaur|Party Animal can move racers affected by Centaur.
Party Animal|Coach|Party Animal's movement can receive Coach's modification.
Party Animal|Gunk|Party Animal's movement can be reduced by Gunk.
Party Animal|Rocket Scientist|Rocket Scientist can cause Party Animal to trip.
Party Animal|Heckler|Party Animal's ability involves tripping.
Party Animal|Scoocher|Animal Magnetism is a power and triggers Scoocher.
Party Animal|Suckerfish|Moving multiple racers can create complicated Suckerfish chains.
Party Animal|Stickler|Doubled/modified movement cannot circumvent exact-finish requirements.

Rocket Scientist|Gunk|Gunk modifies the movement amount Rocket Scientist doubles.
Rocket Scientist|Coach|Coach modifies the movement amount Rocket Scientist doubles.
Rocket Scientist|Hare|Hare modifies movement before Rocket Scientist's doubling.
Rocket Scientist|Blimp|Blimp modifies movement before Rocket Scientist's doubling.
Rocket Scientist|Alchemist|Alchemist's replacement movement can interact with Rocket Scientist's doubling.
Rocket Scientist|Legs|Interaction with Legs' replacement movement needs explicit verification.
Rocket Scientist|Heckler|Rocket Scientist deliberately trips after doubling.
Rocket Scientist|Inchworm|A rolled 1 can trigger Inchworm regardless of later movement doubling.
Rocket Scientist|Lackey|A rolled 6 can trigger Lackey regardless of later movement doubling.
Rocket Scientist|Skipper|A rolled 1 can trigger Skipper.
Rocket Scientist|Sisyphus|A rolled 6 can trigger Sisyphus.
Rocket Scientist|Genius|Genius predicts the die result; Rocket Scientist changes movement.
Rocket Scientist|Magician|Magician changes the final die result used by Rocket Scientist.
Rocket Scientist|Dicemonger|Dicemonger changes the final die result used by Rocket Scientist.
Rocket Scientist|Banana|Doubled movement creates more passing opportunities.
Rocket Scientist|Centaur|Doubled movement creates more passing opportunities.
Rocket Scientist|M.O.U.T.H.|Doubled movement changes where Rocket Scientist can finish relative to M.O.U.T.H.
Rocket Scientist|Baba Yaga|Doubled movement changes where Rocket Scientist can finish relative to Baba Yaga.
Rocket Scientist|Huge Baby|Doubled movement can encounter Huge Baby's space restrictions.
Rocket Scientist|Romantic|Doubled movement changes potential Romantic stopping conditions.
Rocket Scientist|Scoocher|Kablooey is a power activation.
Rocket Scientist|Stickler|Doubled movement cannot circumvent exact-finish requirements.

Romantic|Suckerfish|Old Romantic/Suckerfish combo is shut down by August 2026 simultaneous-arrival rule.
Romantic|Party Animal|Party Animal's simultaneous movement no longer triggers Romantic.
Romantic|Leaptoad|Updated simultaneous-arrival rules affect Romantic/Leaptoad interactions.
Romantic|Hypnotist|Warping does not count as ordinary stopping movement.
Romantic|M.O.U.T.H.|Simultaneous arrival does not trigger Romantic/M.O.U.T.H. stopping effects.
Romantic|Huge Baby|Huge Baby prevents normal shared-space Romantic condition.
Romantic|Baba Yaga|Stopping with Baba Yaga can create overlapping space effects.
Romantic|Banana|Banana's trip and Romantic's stopping condition can overlap.
Romantic|Duelist|Duelist's shared-space duel can overlap with Romantic.
Romantic|Scoocher|Romantic's ability activation can trigger Scoocher.

Scoocher|Gunk|Scoocher moves once for each -1 affecting a main move.
Scoocher|Dicemonger|Scoocher moves for applicable Dicemonger rerolls.
Scoocher|Leaptoad|Scoocher moves once for each occupied space Leaptoad skips.
Scoocher|Magician|Scoocher moves on each Magician reroll, even if unused.
Scoocher|Suckerfish|Scoocher/Suckerfish interaction remains valid after August 2026 update.
Scoocher|Huge Baby|Huge Baby and Scoocher can produce a loop; resolve once and stop.
Scoocher|Romantic|Romantic activation can cause Scoocher movement.
Scoocher|Party Animal|Party Animal's Animal Magnetism can cause Scoocher movement.
Scoocher|Duelist|Duelist's power activation can cause Scoocher movement.
Scoocher|Banana|Banana's trip can cause Scoocher movement.
Scoocher|Baba Yaga|Baba Yaga's trip can cause Scoocher movement.
Scoocher|Centaur|Centaur's Hoofwhack can cause Scoocher movement.
Scoocher|Coach|Coach's power activation can cause Scoocher movement.
Scoocher|Alchemist|Alchemist's power activation can cause Scoocher movement.
Scoocher|Rocket Scientist|Rocket Scientist's Kablooey can cause Scoocher movement.
Scoocher|M.O.U.T.H.|M.O.U.T.H.'s Chomp can cause Scoocher movement.
Scoocher|Heckler|Heckler's ability can cause Scoocher movement.
Scoocher|Hypnotist|Hypnotist's power can cause Scoocher movement.
Scoocher|Third Wheel|Third Wheel's Roll Through can cause Scoocher movement.

Sisyphus|Magician|Magician can alter whether Sisyphus rolls a 6.
Sisyphus|Dicemonger|Dicemonger can alter whether Sisyphus rolls a 6.
Sisyphus|Genius|Genius can predict a 6.
Sisyphus|Lackey|Both respond to 6 but have different effects.
Sisyphus|Skipper|Skipper responds to 1 while Sisyphus responds to 6.
Sisyphus|Inchworm|Inchworm responds to 1 while Sisyphus responds to 6.
Sisyphus|Gunk|Gunk affects ordinary movement but not the underlying die result.
Sisyphus|Coach|Coach affects ordinary movement but not the underlying die result.
Sisyphus|Rocket Scientist|A 6 produces Sisyphus's warp rather than ordinary movement.
Sisyphus|Stickler|Warping to Start does not count as ordinary movement toward the finish.
Sisyphus|Scoocher|Keep Rollin' is a power.
Sisyphus|Mastermind|Both have special pre-race effects.

Skipper|Inchworm|If a racer rolls 1, Inchworm acts first and Skipper takes the next turn.
Skipper|Magician|Magician can reroll a 1 before Skipper triggers.
Skipper|Dicemonger|Dicemonger can reroll a 1 before Skipper triggers.
Skipper|Genius|Genius can predict a 1.
Skipper|Gunk|Gunk does not change the underlying die result.
Skipper|Coach|Coach changes movement but not the underlying die result.
Skipper|Alchemist|Alchemist can roll 1 and replace movement while Skipper still responds to the roll.
Skipper|Rocket Scientist|Rocket Scientist modifies movement after the roll.
Skipper|Scoocher|Skipper's extra-turn ability interacts with power-trigger timing.

Stickler|Duelist|Duelist movement cannot overshoot the finish under Stickler.
Stickler|Legs|Legs' Jog cannot overshoot the finish.
Stickler|Rocket Scientist|Rocket Scientist's doubled movement cannot overshoot the finish.
Stickler|Hare|Hare's movement cannot overshoot the finish.
Stickler|Alchemist|Alchemist's replacement movement cannot overshoot the finish.
Stickler|Coach|Coach-modified movement must still finish exactly.
Stickler|Gunk|Gunk-modified movement must still finish exactly.
Stickler|Blimp|Blimp's movement must still finish exactly.
Stickler|Suckerfish|Suckerfish movement must respect Stickler.
Stickler|Centaur|Backward movement does not circumvent Stickler.
Stickler|Banana|Banana-related movement must respect Stickler.
Stickler|Baba Yaga|Baba Yaga-related movement must respect Stickler.
Stickler|Huge Baby|Huge Baby displacement must respect Stickler's movement restrictions.
Stickler|Party Animal|Party Animal cannot circumvent exact-finish requirements.
Stickler|Scoocher|Scoocher's movement must obey finishing requirements.

Suckerfish|Romantic|Old Romantic/Suckerfish combo is shut down by August 2026 simultaneous-arrival rule.
Suckerfish|Scoocher|Scoocher/Suckerfish interaction remains valid after August 2026 update.
Suckerfish|Huge Baby|Huge Baby prevents normal ending on its space.
Suckerfish|Baba Yaga|Suckerfish movement can cause Baba Yaga interaction.
Suckerfish|Banana|Suckerfish movement can interact with Banana.
Suckerfish|M.O.U.T.H.|Suckerfish can move M.O.U.T.H. into or out of Chomp range.
Suckerfish|Stickler|Suckerfish can interact with Stickler at the finish.
Suckerfish|Duelist|Suckerfish movement can alter Duelist's shared-space situation.
Suckerfish|Party Animal|Party Animal can move racers affected by Suckerfish.
Suckerfish|Leaptoad|Leaptoad positioning can affect Suckerfish.
Suckerfish|Hypnotist|Hypnotist can alter Suckerfish positioning.
Suckerfish|Third Wheel|Third Wheel can change who Suckerfish is interacting with.
Suckerfish|Centaur|Centaur can alter the movement of the racer Suckerfish is following.

Third Wheel|Romantic|Third Wheel can warp into a pair; updated simultaneous-arrival rules matter.
Third Wheel|M.O.U.T.H.|Third Wheel can warp into a pair involving M.O.U.T.H.
Third Wheel|Huge Baby|Third Wheel cannot create illegal sharing with Huge Baby.
Third Wheel|Duelist|Third Wheel can create a shared-space duel situation.
Third Wheel|Baba Yaga|Third Wheel warping onto Baba Yaga can trigger relevant trip effects.
Third Wheel|Banana|Warping does not count as passing Banana.
Third Wheel|Suckerfish|Third Wheel can change Suckerfish's pair/target situation.
Third Wheel|Scoocher|Roll Through is a power and triggers Scoocher.
Third Wheel|Stickler|Third Wheel's subsequent movement must obey exact-finish requirements.

Twin|Copy Cat|Copy Cat can copy Twin's current active power.
Twin|Egg|Twin and Egg both involve borrowed character powers.
Twin|Scoocher|Twin's borrowed power can trigger Scoocher.
Twin|Gunk|Twin can inherit Gunk's movement modification.
Twin|Coach|Twin can inherit Coach's movement bonus.
Twin|Blimp|Twin can inherit Blimp's movement ability.
Twin|M.O.U.T.H.|Twin can inherit M.O.U.T.H.'s Chomp.
Twin|Huge Baby|Twin can inherit Huge Baby's ability.
Twin|Baba Yaga|Twin can inherit Baba Yaga's ability.
Twin|Romantic|Twin can inherit Romantic's ability.
Twin|Mastermind|Twin's borrowed-power rules need to distinguish pre-race abilities.
Twin|Sisyphus|Twin's borrowed-power rules need to distinguish pre-race abilities.
`.trim();


/*
    Convert the interaction text into objects.
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
    Remove exact duplicate relationships.

    This protects the database if the same interaction
    accidentally gets entered twice.
*/
const uniqueInteractions = [];

const interactionKeys = new Set();

rawInteractions.forEach(interaction => {
    const names = [
        interaction.character,
        interaction.with
    ].sort((a, b) => a.localeCompare(b));

    const key = `${names[0]}|${names[1]}|${interaction.details}`;

    if (!interactionKeys.has(key)) {
        interactionKeys.add(key);
        uniqueInteractions.push(interaction);
    }
});


/*
    Find every interaction involving a character.

    Because relationships are stored only once, we check
    BOTH sides of the relationship here.
*/
function getInteractions(characterName) {
    return uniqueInteractions.filter(interaction =>
        interaction.character === characterName ||
        interaction.with === characterName
    );
}


/*
    Get the OTHER character in an interaction.
*/
function getOtherCharacter(interaction, characterName) {
    return interaction.character === characterName
        ? interaction.with
        : interaction.character;
}


/*
    Escape HTML so character data can safely be inserted
    into the page.
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
    Page elements
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
    Render the character cards.
*/
function renderAthletes() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredAthletes = athletes.filter(athlete => {
        const matchesFilter =
            currentFilter === "all" ||
            athlete.category.toLowerCase() === currentFilter;

        const interactions = getInteractions(athlete.name);

        const interactionSearchText = interactions
            .map(interaction => {
                return [
                    interaction.character,
                    interaction.with,
                    interaction.details
                ].join(" ");
            })
            .join(" ");

        const searchableText = [
            athlete.name,
            athlete.category,
            athlete.power,
            athlete.ability,
            interactionSearchText
        ]
            .join(" ")
            .toLowerCase();

        const matchesSearch =
            searchTerm === "" ||
            searchableText.includes(searchTerm);

        return matchesFilter && matchesSearch;
    });


    resultCount.textContent =
        filteredAthletes.length === 1
            ? "1 racer"
            : `${filteredAthletes.length} racers`;


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
    Open a character modal.
*/
function openModal(characterName) {
    const athlete = athletes.find(
        athlete => athlete.name === characterName
    );

    if (!athlete) {
        return;
    }


    const interactions = getInteractions(characterName)
        .sort((a, b) => {
            const otherA = getOtherCharacter(a, characterName);
            const otherB = getOtherCharacter(b, characterName);

            return otherA.localeCompare(otherB);
        });


    const interactionHTML = interactions.length > 0
        ? `
            <div class="interaction-list">
                ${interactions
                    .map(interaction => {
                        const otherCharacter =
                            getOtherCharacter(interaction, characterName);

                        return `
                            <article class="interaction">

                                <div class="interaction-with">
                                    ${escapeHTML(otherCharacter)}
                                </div>

                                <div class="interaction-details">
                                    ${escapeHTML(interaction.details)}
                                </div>

                            </article>
                        `;
                    })
                    .join("")}
            </div>
        `
        : `
            <p class="interaction-summary">
                No character interactions are currently listed.
            </p>
        `;


    modalContent.innerHTML = `
        <div class="modal-header">

            <img
                class="modal-athlete-image"
                src="${escapeHTML(athlete.image)}"
                alt="${escapeHTML(athlete.name)}"
            >

            <div class="modal-heading">

                <p class="modal-category">
                    ${escapeHTML(athlete.category)}
                </p>

                <h2 id="modal-title" class="modal-title">
                    ${escapeHTML(athlete.name)}
                </h2>

                <p class="modal-power-name">
                    ${escapeHTML(athlete.power)}
                </p>

            </div>

        </div>


        <section class="info-section">

            <h3>Ability</h3>

            <div class="official-text ability-text">
                ${escapeHTML(athlete.ability)}
            </div>

        </section>


        <section class="info-section">

            <div class="interaction-heading">
                <h3>Character Interactions</h3>
            </div>

            ${interactionHTML}

        </section>
    `;


    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    modalClose.focus();
}


/*
    Close the modal.
*/
function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}


/*
    Search
*/
searchInput.addEventListener("input", renderAthletes);


/*
    Filters
*/
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderAthletes();
    });
});


/*
    Modal close button
*/
modalClose.addEventListener("click", closeModal);


/*
    Clicking the dark background closes the modal.
*/
modalBackdrop.addEventListener("click", closeModal);


/*
    Escape key closes the modal.
*/
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
    }
});


/*
    Prevent clicks inside the dialog from closing the modal.
*/
const modalDialog = document.querySelector(".modal-dialog");

modalDialog.addEventListener("click", event => {
    event.stopPropagation();
});


/*
    Initial render
*/
renderAthletes();
