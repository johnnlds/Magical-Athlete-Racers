/* =========================================================
   MAGICAL ATHLETE RACERS
   Character + Interaction Database
========================================================= */


/* =========================================================
   ATHLETES
========================================================= */

const athletes = [

    {
        name: "Alchemist",
        category: "movement",
        power: "Alchemical Movement",
        description: "A die result can be replaced with a different movement value.",
        official: "After rolling, the Alchemist can replace certain movement results with 4 spaces."
    },

    {
        name: "Baba Yaga",
        category: "position",
        power: "Trip",
        description: "Interacts with racers that share or move onto her space.",
        official: "Baba Yaga's ability can cause another racer to be tripped when they occupy her space."
    },

    {
        name: "Banana",
        category: "position",
        power: "Slip",
        description: "Racers passing the Banana can be affected by its ability.",
        official: "Banana interacts with racers that pass through or stop in the relevant space."
    },

    {
        name: "Blimp",
        category: "movement",
        power: "Slow and Steady",
        description: "The Blimp's movement can be modified by other racers.",
        official: "Blimp's movement is subject to effects that modify the amount of movement."
    },

    {
        name: "Centaur",
        category: "movement",
        power: "Hoofwhack",
        description: "The Centaur can affect racers through movement and passing.",
        official: "Centaur's movement ability can interact with racers it passes or affects."
    },

    {
        name: "Cheerleader",
        category: "position",
        power: "Last Place",
        description: "Moves the current last-place racer.",
        official: "The Cheerleader moves the racer currently in last place two spaces."
    },

    {
        name: "Coach",
        category: "movement",
        power: "Training",
        description: "Can modify another racer's movement.",
        official: "Coach can increase a main movement value, including movement that is itself being modified."
    },

    {
        name: "Copycat",
        category: "special",
        power: "Copy",
        description: "Can acquire the ability of the racer currently leading.",
        official: "Copycat copies the power of the lead racer when its ability calls for it."
    },

    {
        name: "Dicemonger",
        category: "dice",
        power: "Reroll",
        description: "Can change another racer's die result.",
        official: "Dicemonger can provide a reroll that changes the die result before relevant effects resolve."
    },

    {
        name: "Duelist",
        category: "position",
        power: "Duel",
        description: "Challenges another racer when sharing a space.",
        official: "Duelist can duel another racer occupying the same space."
    },

    {
        name: "Egg",
        category: "special",
        power: "Borrow",
        description: "Can borrow or use another character's ability.",
        official: "Egg can use selected character powers according to its ability."
    },

    {
        name: "Flip Flop",
        category: "position",
        power: "Swap",
        description: "Changes positions with another racer.",
        official: "Flip Flop swaps positions. The swap is treated as a warp rather than ordinary passing movement."
    },

    {
        name: "Genius",
        category: "dice",
        power: "Prediction",
        description: "Predicts a die result and interacts with effects that change the die.",
        official: "Genius predicts the die result before the roll and can be affected when the eventual result changes."
    },

    {
        name: "Gunk",
        category: "movement",
        power: "Slow",
        description: "Reduces another racer's main movement.",
        official: "Gunk reduces the affected racer's main movement by 1."
    },

    {
        name: "Hare",
        category: "movement",
        power: "Fast",
        description: "Increases or modifies movement.",
        official: "Hare's ability modifies movement and can interact with other movement modifiers."
    },

    {
        name: "Heckler",
        category: "special",
        power: "Trip",
        description: "Can deliberately trip another racer.",
        official: "Heckler can cause a racer to be tripped and interacts with recovery and turn timing."
    },

    {
        name: "Huge Baby",
        category: "position",
        power: "No Sharing",
        description: "Restricts normal sharing of its space.",
        official: "Other racers generally cannot share Huge Baby's space normally."
    },

    {
        name: "Hypnotist",
        category: "position",
        power: "Warp",
        description: "Warps another racer to a different position.",
        official: "Hypnotist can warp a racer to its space, creating special interactions with position-based powers."
    },

    {
        name: "Inchworm",
        category: "dice",
        power: "Wriggle",
        description: "Responds to particular die results before normal movement.",
        official: "Inchworm's ability is based on the die result rather than simply the final number of spaces moved."
    },

    {
        name: "Lackey",
        category: "dice",
        power: "Six",
        description: "Responds to a rolled 6.",
        official: "Lackey's ability checks the die result, so changing the movement afterward does not change the original result."
    },

    {
        name: "Leaptoad",
        category: "movement",
        power: "Leap",
        description: "Can skip over occupied spaces.",
        official: "Leaptoad can skip occupied spaces, affecting passing and other space-based interactions."
    },

    {
        name: "Legs",
        category: "movement",
        power: "Jog",
        description: "Uses a special fixed movement value instead of a normal die roll.",
        official: "Legs moves using Jog, a five-space main movement."
    },

    {
        name: "Lovable Loser",
        category: "position",
        power: "Last Place",
        description: "Interacts with the racer currently in last place.",
        official: "Lovable Loser's ability depends on race position, particularly last place."
    },

    {
        name: "Magician",
        category: "dice",
        power: "Reroll",
        description: "Can reroll its die and change the eventual result.",
        official: "Magician can reroll its die. Its own rerolls are not treated as Dicemonger's reroll service."
    },

    {
        name: "Mastermind",
        category: "special",
        power: "Prediction",
        description: "Uses an ability before the race begins.",
        official: "Mastermind's pre-race effect is distinct from powers that activate during the race."
    },

    {
        name: "M.O.U.T.H.",
        category: "position",
        power: "Chomp",
        description: "Can affect racers within its relevant range.",
        official: "M.O.U.T.H. can Chomp another racer when the appropriate movement and positioning conditions are met."
    },

    {
        name: "Party Animal",
        category: "position",
        power: "Party",
        description: "Interacts with racers arriving in or occupying its space.",
        official: "Party Animal has special timing interactions with simultaneous movement."
    },

    {
        name: "Rocket Scientist",
        category: "movement",
        power: "Kablooey",
        description: "Can dramatically modify the movement generated by a die roll.",
        official: "Rocket Scientist can double its eventual main movement and interact with movement, trip, and die-result effects."
    },

    {
        name: "Romantic",
        category: "position",
        power: "Romance",
        description: "Interacts with racers stopping or arriving on its space.",
        official: "Romantic's stopping effect is subject to the August 2026 simultaneous-arrival ruling."
    },

    {
        name: "Scoocher",
        category: "special",
        power: "Scooch",
        description: "Responds when other racers activate their powers.",
        official: "Scoocher can activate when qualifying racer powers trigger."
    },

    {
        name: "Sisyphus",
        category: "dice",
        power: "Six",
        description: "Has a special response to rolling a 6.",
        official: "Sisyphus's ability is based on the die result and can override ordinary movement."
    },

    {
        name: "Skipper",
        category: "dice",
        power: "Extra Turn",
        description: "Responds to particular die results and can affect turn order.",
        official: "Skipper's ability interacts with a roll of 1 and can produce an additional turn."
    },

    {
        name: "Stickler",
        category: "special",
        power: "Exact Finish",
        description: "Requires movement to satisfy exact finishing conditions.",
        official: "Stickler's effect means relevant movement and forced movement still have to respect the exact-finish requirement."
    },

    {
        name: "Suckerfish",
        category: "position",
        power: "Follow",
        description: "Moves in relation to another racer.",
        official: "Suckerfish can follow another racer's movement and therefore interacts with many movement and positioning effects."
    },

    {
        name: "Third Wheel",
        category: "position",
        power: "Roll Through",
        description: "Warps into situations involving other racers.",
        official: "Third Wheel's ability changes positioning and can create new interactions between racers."
    },

    {
        name: "Twin",
        category: "special",
        power: "Twin Power",
        description: "Can borrow or use another racer's power.",
        official: "Twin can use selected character powers according to its ability."
    }

];


/* =========================================================
   INTERACTION DATABASE
=========================================================

   Each interaction has:

   character
   with
   topic
   details
   status

========================================================= */

const interactionData = [

    /* -------------------------
       ALCHEMIST
    ------------------------- */

    ["Alchemist", "Gunk", "Main move modification",
        "Gunk reduces Alchemist's replacement 4-space main move by 1.",
        "Rules-derived"],

    ["Alchemist", "Coach", "Main move modification",
        "Coach can increase the Alchemist's replacement main move.",
        "Rules-derived"],

    ["Alchemist", "Inchworm", "Die result vs movement",
        "Alchemist can roll 1 and replace the resulting movement with 4. Inchworm cares about the die roll rather than the resulting movement.",
        "Rules-derived"],

    ["Alchemist", "Lackey", "Rolled 6",
        "A rolled 6 can still happen; Alchemist's replacement only applies to the specified results.",
        "Rules-derived"],

    ["Alchemist", "Skipper", "Rolled 1",
        "A rolled 1 can trigger Skipper even if Alchemist replaces the resulting movement.",
        "Rules-derived"],

    ["Alchemist", "Sisyphus", "Rolled 6",
        "Sisyphus interacts with the die result rather than simply the eventual movement.",
        "Rules-derived"],

    ["Alchemist", "Magician", "Reroll",
        "A Magician reroll can prevent an initial 1 or 2 from being the final result that activates Alchemist.",
        "Rules-derived"],

    ["Alchemist", "Dicemonger", "Reroll",
        "Dicemonger can change the die result before Alchemist's replacement effect resolves.",
        "Rules-derived"],

    ["Alchemist", "Rocket Scientist", "Movement doubling",
        "Rocket Scientist can double the eventual main movement, creating an interaction with Alchemist's replacement movement.",
        "Rules-derived"],

    ["Alchemist", "Banana", "Passing",
        "Normal movement and passing rules apply.",
        "Rules-derived"],

    ["Alchemist", "Centaur", "Passing",
        "Normal passing rules apply.",
        "Rules-derived"],

    ["Alchemist", "Baba Yaga", "Stopping",
        "Alchemist can stop on Baba Yaga's space and trigger applicable stopping effects.",
        "Rules-derived"],

    ["Alchemist", "Huge Baby", "Sharing space",
        "Huge Baby prevents normal sharing of its space.",
        "Rules-derived"],

    ["Alchemist", "M.O.U.T.H.", "Chomp",
        "Stopping or entering the relevant space can create a Chomp interaction.",
        "Rules-derived"],

    ["Alchemist", "Romantic", "Stopping",
        "Stopping on the relevant space can interact with Romantic.",
        "Rules-derived"],

    ["Alchemist", "Stickler", "Exact finish",
        "Alchemist's modified movement still has to respect Stickler's exact-finish requirement.",
        "Rules-derived"],


    /* -------------------------
       BABA YAGA
    ------------------------- */

    ["Baba Yaga", "Duelist", "Duel and trip",
        "A Duelist duel can occur while sharing Baba Yaga's space, and Duelist can still be tripped.",
        "Official / Designer ruling"],

    ["Baba Yaga", "Hypnotist", "Warp and trip",
        "Hypnotist can warp Baba Yaga to its space; the applicable trip effect still applies.",
        "Official / Designer ruling"],

    ["Baba Yaga", "Huge Baby", "Sharing",
        "Huge Baby prevents normal sharing of its space.",
        "Rules-derived"],

    ["Baba Yaga", "M.O.U.T.H.", "Trip and Chomp",
        "Sharing and stopping can create both a trip and a Chomp timing interaction.",
        "Rules-derived"],

    ["Baba Yaga", "Romantic", "Stopping",
        "Normal stopping rules apply when a racer ends movement with Baba Yaga.",
        "Rules-derived"],

    ["Baba Yaga", "Suckerfish", "Movement and trip",
        "Suckerfish movement can cause a racer to interact with Baba Yaga's trip effect.",
        "Rules-derived"],

    ["Baba Yaga", "Party Animal", "Simultaneous movement",
        "The interaction depends on the timing of simultaneous movement.",
        "Needs verification"],

    ["Baba Yaga", "Cheerleader", "Simultaneous movement",
        "The interaction depends on simultaneous movement timing.",
        "Needs verification"],

    ["Baba Yaga", "Scoocher", "Trip",
        "Baba Yaga's trip is a power and therefore can trigger Scoocher.",
        "Rules-derived"],

    ["Baba Yaga", "Heckler", "Trip and recovery",
        "Baba Yaga's trip interacts with Heckler's trip and recovery timing.",
        "Rules-derived"],


    /* -------------------------
       BANANA
    ------------------------- */

    ["Banana", "Centaur", "Passing and trip",
        "Passing between the racers can interact with their respective movement abilities.",
        "Rules-derived"],

    ["Banana", "Huge Baby", "Sharing",
        "Huge Baby's space restriction applies to Banana.",
        "Designer ruling"],

    ["Banana", "M.O.U.T.H.", "Passing and stopping",
        "Banana's position can affect whether M.O.U.T.H. has a Chomp opportunity.",
        "Rules-derived"],

    ["Banana", "Flip Flop", "Swap",
        "Flip Flop's swap is a warp rather than ordinary passing.",
        "Rules-derived"],

    ["Banana", "Hypnotist", "Warp",
        "Hypnotist's warp is not treated as normal passing movement.",
        "Rules-derived"],

    ["Banana", "Suckerfish", "Movement chain",
        "Suckerfish can create a movement chain involving Banana's position.",
        "Rules-derived"],

    ["Banana", "Romantic", "Trip and stopping",
        "Banana's movement can create a stopping interaction with Romantic.",
        "Rules-derived"],

    ["Banana", "Scoocher", "Trip",
        "Banana's qualifying trip ability can trigger Scoocher.",
        "Rules-derived"],

    ["Banana", "Heckler", "Trip and recovery",
        "Banana's trip interacts with Heckler's recovery timing.",
        "Rules-derived"],

    ["Banana", "Copycat", "Copy",
        "Copycat can copy Banana when Banana is leading.",
        "Rules-derived"],

    ["Banana", "Leaptoad", "Passing",
        "Leaptoad's ability to skip occupied spaces changes whether Banana is passed.",
        "Rules-derived"],


    /* -------------------------
       BLIMP
    ------------------------- */

    ["Blimp", "Gunk", "Movement modification",
        "Gunk reduces Blimp's main movement.",
        "Rules-derived"],

    ["Blimp", "Coach", "Movement modification",
        "Coach can increase Blimp's main movement.",
        "Rules-derived"],

    ["Blimp", "Hare", "Movement modification",
        "Hare can modify Blimp's movement.",
        "Rules-derived"],

    ["Blimp", "Rocket Scientist", "Movement doubling",
        "Rocket Scientist can double Blimp's movement and its associated trip effect.",
        "Rules-derived"],

    ["Blimp", "Alchemist", "Replacement movement",
        "Alchemist's replacement movement can interact with Blimp's movement.",
        "Rules-derived"],

    ["Blimp", "Lackey", "Rolled 6",
        "Movement changes do not change the underlying rolled 6.",
        "Rules-derived"],

    ["Blimp", "Inchworm", "Rolled 1",
        "Movement changes do not change the underlying die result.",
        "Rules-derived"],

    ["Blimp", "Skipper", "Rolled 1",
        "Movement changes do not change the underlying die result.",
        "Rules-derived"],

    ["Blimp", "Sisyphus", "Rolled 6",
        "Movement changes do not change the underlying die result.",
        "Rules-derived"],

    ["Blimp", "Magician", "Reroll",
        "Magician's reroll can change the die result before movement effects resolve.",
        "Rules-derived"],

    ["Blimp", "Dicemonger", "Reroll",
        "Dicemonger can change the die result before movement resolves.",
        "Rules-derived"],

    ["Blimp", "Banana", "Passing",
        "Normal passing rules apply.",
        "Rules-derived"],

    ["Blimp", "Centaur", "Passing",
        "Normal passing rules apply.",
        "Rules-derived"],

    ["Blimp", "Stickler", "Exact finish",
        "Blimp's final movement must respect Stickler's exact-finish requirement.",
        "Rules-derived"],

    ["Blimp", "Scoocher", "Power activation",
        "A qualifying Blimp power activation can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       CENTAUR
    ------------------------- */

    ["Centaur", "Banana", "Passing and trip",
        "Centaur and Banana can interact when one racer passes the other.",
        "Rules-derived"],

    ["Centaur", "Huge Baby", "Forced movement",
        "Centaur's forced movement must respect Huge Baby's space restriction.",
        "Rules-derived"],

    ["Centaur", "M.O.U.T.H.", "Backward movement",
        "Backward movement changes the range relevant to M.O.U.T.H.'s ability.",
        "Rules-derived"],

    ["Centaur", "Baba Yaga", "Passing and stopping",
        "Centaur's movement can interact with Baba Yaga when passing or stopping.",
        "Rules-derived"],

    ["Centaur", "Suckerfish", "Movement chain",
        "Suckerfish can create a movement chain involving Centaur.",
        "Rules-derived"],

    ["Centaur", "Romantic", "Stopping",
        "Stopping on the relevant space can interact with Romantic.",
        "Rules-derived"],

    ["Centaur", "Stickler", "Exact finish",
        "Backward or forced movement does not circumvent Stickler's exact-finish requirement.",
        "Rules-derived"],

    ["Centaur", "Scoocher", "Hoofwhack",
        "Centaur's Hoofwhack is a power activation that can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       CHEERLEADER
    ------------------------- */

    ["Cheerleader", "Last-place racers", "Last place",
        "Cheerleader moves the current last-place racer two spaces.",
        "Official rule"],

    ["Cheerleader", "Huge Baby", "Simultaneous movement",
        "Cheerleader's displacement can interact with Huge Baby's space restriction.",
        "Rules-derived"],

    ["Cheerleader", "Baba Yaga", "Simultaneous movement",
        "The timing of simultaneous movement affects whether Baba Yaga's effect applies.",
        "Needs verification"],

    ["Cheerleader", "Romantic", "Simultaneous arrival",
        "The August 2026 rule addresses simultaneous arrival and Romantic's trigger.",
        "Official August 2026 rule"],

    ["Cheerleader", "M.O.U.T.H.", "Simultaneous arrival",
        "The August 2026 rule addresses simultaneous arrival and M.O.U.T.H.'s trigger.",
        "Official August 2026 rule"],

    ["Cheerleader", "Suckerfish", "Forced movement",
        "Moving the last-place racer can affect Suckerfish's movement relationship.",
        "Rules-derived"],

    ["Cheerleader", "Flip Flop", "Position",
        "Moving the last-place racer can change positions involved in Flip Flop.",
        "Rules-derived"],

    ["Cheerleader", "Lovable Loser", "Last place",
        "Both abilities depend on the current last-place position.",
        "Rules-derived"],

    ["Cheerleader", "Scoocher", "Power trigger",
        "Cheerleader's ability is a power activation and can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       COACH
    ------------------------- */

    ["Coach", "Gunk", "Movement modification",
        "Coach's +1 and Gunk's -1 interact directly.",
        "Official"],

    ["Coach", "Legs", "Jog",
        "Coach can modify Legs' five-space Jog.",
        "Official"],

    ["Coach", "Alchemist", "Movement modification",
        "Coach can increase Alchemist's replacement movement.",
        "Rules-derived"],

    ["Coach", "Hare", "Movement modification",
        "Coach and Hare can both modify movement.",
        "Rules-derived"],

    ["Coach", "Rocket Scientist", "Movement modification",
        "Coach can modify the movement value that Rocket Scientist uses.",
        "Rules-derived"],

    ["Coach", "Blimp", "Movement modification",
        "Coach can increase Blimp's movement.",
        "Rules-derived"],

    ["Coach", "Lackey", "Die result",
        "Coach changes movement, not the underlying die result.",
        "Rules-derived"],

    ["Coach", "Inchworm", "Die result",
        "Coach changes movement, not the underlying die result.",
        "Rules-derived"],

    ["Coach", "Skipper", "Die result",
        "Coach changes movement, not the underlying die result.",
        "Rules-derived"],

    ["Coach", "Sisyphus", "Die result",
        "Coach changes movement, not the underlying die result.",
        "Rules-derived"],

    ["Coach", "Scoocher", "Power activation",
        "Coach's qualifying ability activation can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       COPYCAT
    ------------------------- */

    ["Copycat", "Huge Baby", "Copied power priority",
        "A copied lead-racer power can take priority over Huge Baby in the relevant interaction.",
        "Official"],

    ["Copycat", "M.O.U.T.H.", "Copy Chomp",
        "Copycat can copy M.O.U.T.H.'s Chomp when M.O.U.T.H. is leading.",
        "Rules-derived"],

    ["Copycat", "Gunk", "Copy Slow",
        "Copycat can acquire Gunk's power when Gunk leads.",
        "Rules-derived"],

    ["Copycat", "Hare", "Copy Hare",
        "Copycat can acquire Hare's power when Hare leads.",
        "Designer discussion"],

    ["Copycat", "Suckerfish", "Copy Follow",
        "Copycat can acquire Suckerfish's power when Suckerfish leads.",
        "Rules-derived"],

    ["Copycat", "Scoocher", "Copy power",
        "Copycat can acquire Scoocher's power when appropriate.",
        "Rules-derived"],

    ["Copycat", "Romantic", "Copy Romance",
        "Copycat can acquire Romantic's power when Romantic leads.",
        "Rules-derived"],

    ["Copycat", "Alchemist", "Copy Alchemist",
        "Copycat can copy Alchemist's power when Alchemist leads.",
        "Rules-derived"],

    ["Copycat", "Baba Yaga", "Copy Baba Yaga",
        "Copycat can copy Baba Yaga's power when Baba Yaga leads.",
        "Rules-derived"],

    ["Copycat", "Banana", "Copy Banana",
        "Copycat can copy Banana's power when Banana leads.",
        "Rules-derived"],

    ["Copycat", "Cheerleader", "Copy Cheerleader",
        "Copycat can copy Cheerleader's power when Cheerleader leads.",
        "Rules-derived"],

    ["Copycat", "Coach", "Copy Coach",
        "Copycat can copy Coach's power when Coach leads.",
        "Rules-derived"],

    ["Copycat", "Duelist", "Copy Duelist",
        "Copycat can copy Duelist's power when Duelist leads.",
        "Rules-derived"],

    ["Copycat", "Hypnotist", "Copy Hypnotist",
        "Copycat can copy Hypnotist's power when Hypnotist leads.",
        "Rules-derived"],

    ["Copycat", "Inchworm", "Copy Inchworm",
        "Copycat can copy Inchworm's power when Inchworm leads.",
        "Rules-derived"],

    ["Copycat", "Lackey", "Copy Lackey",
        "Copycat can copy Lackey's power when Lackey leads.",
        "Rules-derived"],

    ["Copycat", "Leaptoad", "Copy Leaptoad",
        "Copycat can copy Leaptoad's power when Leaptoad leads.",
        "Rules-derived"],

    ["Copycat", "Legs", "Copy Legs",
        "Copycat can copy Legs' power when Legs leads.",
        "Rules-derived"],

    ["Copycat", "Lovable Loser", "Copy Lovable Loser",
        "Copycat can copy Lovable Loser's power when Lovable Loser leads.",
        "Rules-derived"],

    ["Copycat", "Magician", "Copy Magician",
        "Copycat can copy Magician's power when Magician leads.",
        "Rules-derived"],

    ["Copycat", "Party Animal", "Copy Party Animal",
        "Copycat can copy Party Animal's power when Party Animal leads.",
        "Rules-derived"],

    ["Copycat", "Rocket Scientist", "Copy Rocket Scientist",
        "Copycat can copy Rocket Scientist's power when Rocket Scientist leads.",
        "Rules-derived"],

    ["Copycat", "Skipper", "Copy Skipper",
        "Copycat can copy Skipper's power when Skipper leads.",
        "Rules-derived"],

    ["Copycat", "Stickler", "Copy Stickler",
        "Copycat can copy Stickler's power when Stickler leads.",
        "Rules-derived"],

    ["Copycat", "Third Wheel", "Copy Third Wheel",
        "Copycat can copy Third Wheel's power when Third Wheel leads.",
        "Rules-derived"],

    ["Copycat", "Twin", "Copy Twin",
        "Copycat can copy Twin's power when Twin leads.",
        "Rules-derived"],

    ["Copycat", "Egg", "Copy Egg",
        "Copycat can copy Egg's active power.",
        "Rules-derived"],


    /* -------------------------
       DICEMONGER
    ------------------------- */

    ["Dicemonger", "Magician", "Reroll service",
        "Magician's own rerolls do not count as Dicemonger's reroll service.",
        "Designer ruling"],

    ["Dicemonger", "Genius", "Prediction",
        "A Dicemonger reroll can invalidate Genius's predicted result.",
        "Rules-derived"],

    ["Dicemonger", "Inchworm", "Roll 1",
        "A reroll changing a 1 can prevent Inchworm's trigger.",
        "Rules-derived"],

    ["Dicemonger", "Lackey", "Roll 6",
        "A reroll changing a 6 can prevent Lackey's trigger.",
        "Rules-derived"],

    ["Dicemonger", "Skipper", "Roll 1",
        "A reroll changing a 1 can prevent Skipper's trigger.",
        "Rules-derived"],

    ["Dicemonger", "Sisyphus", "Roll 6",
        "A reroll changing a 6 can prevent Sisyphus's trigger.",
        "Rules-derived"],

    ["Dicemonger", "Rocket Scientist", "Final die",
        "The final die result determines the movement used by Rocket Scientist.",
        "Rules-derived"],

    ["Dicemonger", "Scoocher", "Reroll",
        "A qualifying Dicemonger reroll can trigger Scoocher.",
        "Official"],


    /* -------------------------
       DUELIST
    ------------------------- */

    ["Duelist", "Baba Yaga", "Duel and trip",
        "Duelist can duel while sharing Baba Yaga's space and still be tripped.",
        "Official / Designer ruling"],

    ["Duelist", "M.O.U.T.H.", "Duel",
        "Duelist can duel M.O.U.T.H.; placement and timing are unusual.",
        "Designer discussion"],

    ["Duelist", "Huge Baby", "Sharing",
        "Huge Baby prevents ordinary sharing.",
        "Rules-derived"],

    ["Duelist", "Romantic", "Shared space",
        "Duelist's shared-space situation can interact with Romantic.",
        "Rules-derived"],

    ["Duelist", "Suckerfish", "Position",
        "Duelist's position can affect Suckerfish.",
        "Rules-derived"],

    ["Duelist", "Scoocher", "Duel power",
        "Duel is a power activation and can trigger Scoocher.",
        "Rules-derived"],

    ["Duelist", "Stickler", "Exact finish",
        "Duelist's movement must respect Stickler's exact-finish rule.",
        "Official"],

    ["Duelist", "Banana", "Passing",
        "Duelist and Banana can interact through movement and passing.",
        "Rules-derived"],

    ["Duelist", "Centaur", "Passing",
        "Duelist and Centaur can interact through movement and passing.",
        "Rules-derived"],


    /* -------------------------
       EGG
    ------------------------- */

    ["Egg", "Copycat", "Power copying",
        "Egg can interact with Copycat's power-copying effect.",
        "Rules-derived"],

    ["Egg", "Twin", "Borrowed powers",
        "Egg and Twin can both involve borrowed character powers.",
        "Rules-derived"],

    ["Egg", "Scoocher", "Selected power",
        "A selected Egg power can trigger Scoocher when the copied power qualifies.",
        "Rules-derived"],

    ["Egg", "Gunk", "Conditional copying",
        "Egg can use Gunk's power when its copying condition is met.",
        "Rules-derived"],

    ["Egg", "Coach", "Conditional copying",
        "Egg can use Coach's power when its copying condition is met.",
        "Rules-derived"],

    ["Egg", "Baba Yaga", "Conditional copying",
        "Egg can use Baba Yaga's power when its copying condition is met.",
        "Rules-derived"],

    ["Egg", "M.O.U.T.H.", "Conditional copying",
        "Egg can use M.O.U.T.H.'s power when its copying condition is met.",
        "Rules-derived"],

    ["Egg", "Huge Baby", "Conditional copying",
        "Egg can use Huge Baby's power when its copying condition is met.",
        "Rules-derived"],

    ["Egg", "Romantic", "Conditional copying",
        "Egg can use Romantic's power when its copying condition is met.",
        "Rules-derived"],


    /* -------------------------
       FLIP FLOP
    ------------------------- */

    ["Flip Flop", "Hypnotist", "Warp and position",
        "Hypnotist's warp and Flip Flop's position swap interact as positional effects.",
        "Designer discussion"],

    ["Flip Flop", "Banana", "Swap vs passing",
        "Flip Flop's swap is a warp, not ordinary passing.",
        "Rules-derived"],

    ["Flip Flop", "Huge Baby", "Space restriction",
        "Flip Flop cannot create an illegal shared space with Huge Baby.",
        "Rules-derived"],

    ["Flip Flop", "M.O.U.T.H.", "Chomp",
        "The resulting positions can change M.O.U.T.H.'s Chomp opportunity.",
        "Rules-derived"],

    ["Flip Flop", "Romantic", "Warp",
        "The swap does not count as ordinary movement for Romantic's stopping effect.",
        "Official August 2026 rule"],

    ["Flip Flop", "Duelist", "Duel",
        "A swap can create a shared-space situation that causes a duel.",
        "Rules-derived"],

    ["Flip Flop", "Suckerfish", "Position",
        "The swap changes the position relevant to Suckerfish.",
        "Rules-derived"],

    ["Flip Flop", "Stickler", "Finish",
        "A warp does not count as ordinary movement toward the finish.",
        "Rules-derived"],


    /* -------------------------
       GENIUS
    ------------------------- */

    ["Genius", "Magician", "Reroll prediction",
        "Magician's reroll can change the result predicted by Genius.",
        "Rules-derived"],

    ["Genius", "Dicemonger", "Reroll prediction",
        "Dicemonger's reroll can change the predicted result.",
        "Rules-derived"],

    ["Genius", "Gunk", "Movement vs die",
        "Gunk changes movement but does not change the predicted die result.",
        "Rules-derived"],

    ["Genius", "Coach", "Movement vs die",
        "Coach changes movement but does not change the predicted die result.",
        "Rules-derived"],

    ["Genius", "Hare", "Movement vs die",
        "Hare changes movement but does not change the predicted die result.",
        "Rules-derived"],

    ["Genius", "Blimp", "Movement vs die",
        "Blimp's movement changes do not change the die result.",
        "Rules-derived"],

    ["Genius", "Rocket Scientist", "Predicted die",
        "Genius predicts the die while Rocket Scientist can modify the resulting movement.",
        "Rules-derived"],

    ["Genius", "Lackey", "Rolled 6",
        "A predicted 6 interacts with Lackey's six-based ability.",
        "Rules-derived"],

    ["Genius", "Inchworm", "Rolled 1",
        "A predicted 1 interacts with Inchworm's one-based ability.",
        "Rules-derived"],

    ["Genius", "Skipper", "Rolled 1",
        "A predicted 1 interacts with Skipper's one-based ability.",
        "Rules-derived"],

    ["Genius", "Sisyphus", "Rolled 6",
        "A predicted 6 interacts with Sisyphus's six-based ability.",
        "Rules-derived"],

    ["Genius", "Scoocher", "Ability",
        "Genius's ability can trigger Scoocher where the timing qualifies.",
        "Rules-derived"],


    /* -------------------------
       GUNK
    ------------------------- */

    ["Gunk", "Coach", "Direct modification",
        "Coach's +1 and Gunk's -1 directly modify the same movement.",
        "Official"],

    ["Gunk", "Legs", "Jog",
        "Gunk reduces Legs' five-space Jog to four.",
        "Official"],

    ["Gunk", "Alchemist", "Movement replacement",
        "Gunk can reduce Alchemist's replacement movement.",
        "Rules-derived"],

    ["Gunk", "Hare", "Movement modification",
        "Gunk and Hare can modify the same movement value.",
        "Rules-derived"],

    ["Gunk", "Rocket Scientist", "Movement modification",
        "Gunk can modify the movement value before Rocket Scientist's doubling.",
        "Rules-derived"],

    ["Gunk", "Blimp", "Movement modification",
        "Gunk reduces Blimp's movement.",
        "Rules-derived"],

    ["Gunk", "Scoocher", "Repeated activation",
        "Scoocher can move once for each qualifying -1 affecting the main move.",
        "Official"],

    ["Gunk", "M.O.U.T.H.", "Range",
        "Reducing movement can change whether a racer reaches M.O.U.T.H.'s relevant range.",
        "Rules-derived"],

    ["Gunk", "Huge Baby", "Displacement",
        "Gunk can participate in movement sequences involving Huge Baby and Scoocher.",
        "Official"],

    ["Gunk", "Lackey", "Die result",
        "Gunk does not change the underlying die result.",
        "Official"],

    ["Gunk", "Inchworm", "Die result",
        "Gunk changes movement but not the underlying die result.",
        "Official"],


    /* -------------------------
       HARE
    ------------------------- */

    ["Hare", "Gunk", "Movement modification",
        "Hare and Gunk can modify the same movement.",
        "Rules-derived"],

    ["Hare", "Coach", "Movement modification",
        "Hare and Coach can modify movement.",
        "Rules-derived"],

    ["Hare", "Blimp", "Movement modification",
        "Hare can modify Blimp's movement.",
        "Rules-derived"],

    ["Hare", "Rocket Scientist", "Movement modification",
        "Hare can modify the movement value that Rocket Scientist uses.",
        "Rules-derived"],

    ["Hare", "Magician", "Reroll",
        "A Magician reroll can change the die result before Hare's movement effect resolves.",
        "Rules-derived"],

    ["Hare", "Dicemonger", "Reroll",
        "Dicemonger can change the die result before Hare's movement effect resolves.",
        "Rules-derived"],

    ["Hare", "Genius", "Die result",
        "Genius's prediction concerns the die result while Hare affects movement.",
        "Rules-derived"],

    ["Hare", "Banana", "Passing",
        "Hare's movement can cause normal passing interactions with Banana.",
        "Rules-derived"],

    ["Hare", "Centaur", "Passing",
        "Hare's movement can cause normal passing interactions with Centaur.",
        "Rules-derived"],

    ["Hare", "Stickler", "Exact finish",
        "Hare's movement must respect Stickler's exact-finish requirement.",
        "Rules-derived"],

    ["Hare", "Scoocher", "Power activation",
        "Hare's ability can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       HECKLER
    ------------------------- */

    ["Heckler", "Banana", "Trip and recovery",
        "Banana's trip interacts with Heckler's recovery timing.",
        "Rules-derived"],

    ["Heckler", "Baba Yaga", "Trip and recovery",
        "Baba Yaga's trip interacts with Heckler's recovery timing.",
        "Rules-derived"],

    ["Heckler", "Rocket Scientist", "Trip",
        "Rocket Scientist can deliberately cause a trip that interacts with Heckler.",
        "Rules-derived"],

    ["Heckler", "Party Animal", "Trip",
        "Party Animal can create a deliberate trip interaction.",
        "Rules-derived"],

    ["Heckler", "Scoocher", "Power",
        "Heckler's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],

    ["Heckler", "Skipper", "Turn order",
        "Trip and recovery can affect Skipper's turn timing.",
        "Rules-derived"],

    ["Heckler", "Inchworm", "Recovery timing",
        "Trip and recovery timing can interact with Inchworm's response.",
        "Rules-derived"],

    ["Heckler", "Stickler", "Exact finish",
        "Any movement following the interaction must respect Stickler.",
        "Rules-derived"],


    /* -------------------------
       HUGE BABY
    ------------------------- */

    ["Huge Baby", "M.O.U.T.H.", "No sharing",
        "Huge Baby cannot share its space, preventing a normal Chomp situation.",
        "Official"],

    ["Huge Baby", "Baba Yaga", "Sharing",
        "Huge Baby prevents ordinary sharing.",
        "Rules-derived"],

    ["Huge Baby", "Duelist", "Sharing",
        "Huge Baby prevents ordinary sharing required for a normal duel.",
        "Rules-derived"],

    ["Huge Baby", "Romantic", "Shared space",
        "Huge Baby prevents the normal shared-space condition.",
        "Rules-derived"],

    ["Huge Baby", "Suckerfish", "Shared space",
        "Huge Baby prevents normal shared-space interactions.",
        "Rules-derived"],

    ["Huge Baby", "Third Wheel", "Sharing",
        "Third Wheel cannot create an illegal shared space with Huge Baby.",
        "Rules-derived"],

    ["Huge Baby", "Party Animal", "Position",
        "Party Animal has a specific interaction with Huge Baby.",
        "Official"],

    ["Huge Baby", "Banana", "Space restriction",
        "Huge Baby's space restriction applies to Banana.",
        "Designer ruling"],

    ["Huge Baby", "Copycat", "Copied power",
        "A copied lead-racer power can take priority over Huge Baby in the specified interaction.",
        "Official"],

    ["Huge Baby", "Hypnotist", "Displacement",
        "Hypnotist cannot create an illegal shared space and instead displaces as required.",
        "Rules-derived"],

    ["Huge Baby", "Scoocher", "Loop",
        "The Huge Baby/Scoocher interaction can create an infinite loop; resolve it once and stop.",
        "Official"],

    ["Huge Baby", "Leaptoad", "Skipping",
        "Leaptoad can skip over Huge Baby's occupied space.",
        "Rules-derived"],

    ["Huge Baby", "Cheerleader", "Displacement",
        "Cheerleader's displacement can interact with Huge Baby's space restriction.",
        "Rules-derived"],


    /* -------------------------
       HYPNOTIST
    ------------------------- */

    ["Hypnotist", "Baba Yaga", "Warp and trip",
        "Warping Baba Yaga to Hypnotist's space can still produce the applicable trip.",
        "Official / Designer ruling"],

    ["Hypnotist", "Huge Baby", "Displacement",
        "Hypnotist cannot create illegal sharing with Huge Baby.",
        "Rules-derived"],

    ["Hypnotist", "Flip Flop", "Position",
        "Hypnotist's warp interacts with Flip Flop's positional ability.",
        "Designer discussion"],

    ["Hypnotist", "Romantic", "Warp",
        "Warping into a space is not ordinary movement for Romantic's stopping effect.",
        "Official August 2026 rule"],

    ["Hypnotist", "M.O.U.T.H.", "Chomp range",
        "Hypnotist can warp a racer into M.O.U.T.H.'s relevant range.",
        "Rules-derived"],

    ["Hypnotist", "Duelist", "Duel",
        "Warping can create a shared-space situation that produces a duel.",
        "Rules-derived"],

    ["Hypnotist", "Suckerfish", "Position",
        "Warping changes the position relevant to Suckerfish.",
        "Rules-derived"],

    ["Hypnotist", "Third Wheel", "Target",
        "Warping changes the pair of racers relevant to Third Wheel.",
        "Rules-derived"],

    ["Hypnotist", "Scoocher", "Power trigger",
        "Hypnotist's warp is a power activation that can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       INCHWORM
    ------------------------- */

    ["Inchworm", "Magician", "Reroll 1",
        "A Magician reroll changing a 1 can prevent Inchworm's trigger.",
        "Rules-derived"],

    ["Inchworm", "Dicemonger", "Reroll 1",
        "A Dicemonger reroll changing a 1 can prevent Inchworm's trigger.",
        "Rules-derived"],

    ["Inchworm", "Alchemist", "Roll vs movement",
        "Inchworm cares about the die roll rather than the movement that Alchemist ultimately uses.",
        "Rules-derived"],

    ["Inchworm", "Skipper", "Roll 1",
        "When a 1 is rolled, Inchworm wriggles first and Skipper takes its subsequent turn.",
        "Official"],

    ["Inchworm", "Sisyphus", "1 vs 6",
        "Inchworm responds to 1 while Sisyphus responds to 6.",
        "Rules-derived"],

    ["Inchworm", "Gunk", "Die unchanged",
        "Gunk changes movement but not the die result.",
        "Official"],

    ["Inchworm", "Coach", "Movement changed",
        "Coach changes movement but not the die result.",
        "Rules-derived"],

    ["Inchworm", "Rocket Scientist", "Roll 1",
        "A roll of 1 can trigger Inchworm even when Rocket Scientist later modifies movement.",
        "Rules-derived"],

    ["Inchworm", "Scoocher", "Power",
        "Inchworm's qualifying ability can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       LACKEY
    ------------------------- */

    ["Lackey", "Gunk", "Rolled 6",
        "Gunk does not change a rolled 6.",
        "Official"],

    ["Lackey", "Magician", "Reroll 6",
        "A Magician reroll changing a 6 can prevent Lackey's trigger.",
        "Rules-derived"],

    ["Lackey", "Dicemonger", "Reroll 6",
        "A Dicemonger reroll changing a 6 can prevent Lackey's trigger.",
        "Rules-derived"],

    ["Lackey", "Genius", "Prediction",
        "Genius can predict a 6, interacting with Lackey's six-based effect.",
        "Rules-derived"],

    ["Lackey", "Sisyphus", "Rolled 6",
        "Both respond to a 6 but have different effects.",
        "Rules-derived"],

    ["Lackey", "Coach", "Movement vs die",
        "Coach modifies movement rather than the die result.",
        "Rules-derived"],

    ["Lackey", "Rocket Scientist", "Movement",
        "Rocket Scientist doubles movement after the relevant die result.",
        "Rules-derived"],

    ["Lackey", "Scoocher", "Power",
        "Lackey's qualifying ability can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       LEAPTOAD
    ------------------------- */

    ["Leaptoad", "Banana", "Passing",
        "Skipping occupied spaces changes whether Banana is passed.",
        "Rules-derived"],

    ["Leaptoad", "Centaur", "Passing",
        "Skipping occupied spaces changes passing interactions with Centaur.",
        "Rules-derived"],

    ["Leaptoad", "M.O.U.T.H.", "Jumping",
        "Leaptoad can jump over spaces relevant to M.O.U.T.H.",
        "Rules-derived"],

    ["Leaptoad", "Huge Baby", "Jumping",
        "Leaptoad can jump over Huge Baby's occupied space.",
        "Rules-derived"],

    ["Leaptoad", "Romantic", "Simultaneous arrival",
        "The updated simultaneous-arrival rules determine Romantic's interaction.",
        "Official August 2026 rule"],

    ["Leaptoad", "Suckerfish", "Skipped positions",
        "Skipping spaces changes the positions relevant to Suckerfish.",
        "Rules-derived"],

    ["Leaptoad", "Scoocher", "Occupied spaces",
        "Scoocher can move once for each occupied space skipped.",
        "Official"],

    ["Leaptoad", "Stickler", "Exact finish",
        "Leaptoad still has to satisfy Stickler's exact-finish requirement.",
        "Rules-derived"],


    /* -------------------------
       LEGS
    ------------------------- */

    ["Legs", "Gunk", "Jog",
        "Gunk reduces Legs' five-space Jog to four.",
        "Official"],

    ["Legs", "Coach", "Jog",
        "Coach increases Legs' Jog.",
        "Official"],

    ["Legs", "Inchworm", "No die roll",
        "Jog does not involve a normal die roll, so Inchworm does not trigger from a roll.",
        "Rules-derived"],

    ["Legs", "Lackey", "No die roll",
        "Jog does not involve a normal die roll, so Lackey does not trigger from a 6.",
        "Rules-derived"],

    ["Legs", "Sisyphus", "No die roll",
        "Jog does not involve a normal die roll, so Sisyphus does not trigger from a 6.",
        "Rules-derived"],

    ["Legs", "Skipper", "No die roll",
        "Jog does not involve a normal die roll, so Skipper does not trigger from a 1.",
        "Rules-derived"],

    ["Legs", "Rocket Scientist", "Jog",
        "The interaction between Rocket Scientist and Legs' fixed movement needs verification.",
        "Needs verification"],

    ["Legs", "Stickler", "Exact finish",
        "Jog must satisfy Stickler's exact-finish requirement.",
        "Rules-derived"],

    ["Legs", "Banana", "Passing",
        "Jog can cause normal passing interactions.",
        "Rules-derived"],

    ["Legs", "Centaur", "Passing",
        "Jog can cause normal passing interactions.",
        "Rules-derived"],

    ["Legs", "Scoocher", "Jog power",
        "Jog is a power activation that can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       LOVABLE LOSER
    ------------------------- */

    ["Lovable Loser", "Cheerleader", "Last place",
        "Both abilities interact with the current last-place racer.",
        "Rules-derived"],

    ["Lovable Loser", "Flip Flop", "Position",
        "Changing position can change who qualifies for Lovable Loser's effect.",
        "Rules-derived"],

    ["Lovable Loser", "Hare", "Lead vs last",
        "Hare and Lovable Loser care about opposite ends of the race.",
        "Rules-derived"],

    ["Lovable Loser", "M.O.U.T.H.", "Last place",
        "Last-place positioning can affect M.O.U.T.H.'s vulnerability.",
        "Rules-derived"],

    ["Lovable Loser", "Huge Baby", "Displacement",
        "Huge Baby can change who is in last place through displacement.",
        "Rules-derived"],

    ["Lovable Loser", "Party Animal", "Last place",
        "Party Animal's movement can change the last-place racer.",
        "Rules-derived"],

    ["Lovable Loser", "Scoocher", "Power",
        "Lovable Loser's ability is a power and can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       MAGICIAN
    ------------------------- */

    ["Magician", "Dicemonger", "Reroll service",
        "Magician's own rerolls do not count as Dicemonger's reroll service.",
        "Designer ruling"],

    ["Magician", "Inchworm", "Reroll 1",
        "A reroll can prevent Inchworm from responding to an initial 1.",
        "Rules-derived"],

    ["Magician", "Genius", "Prediction",
        "A reroll can change the result Genius predicted.",
        "Rules-derived"],

    ["Magician", "Lackey", "Reroll 6",
        "A reroll can prevent Lackey's response to a 6.",
        "Rules-derived"],

    ["Magician", "Skipper", "Reroll 1",
        "A reroll can prevent Skipper's response to a 1.",
        "Rules-derived"],

    ["Magician", "Sisyphus", "Reroll 6",
        "A reroll can prevent Sisyphus's response to a 6.",
        "Rules-derived"],

    ["Magician", "Rocket Scientist", "Final die",
        "Rocket Scientist uses the final relevant die result.",
        "Rules-derived"],

    ["Magician", "Stickler", "Reroll and finish",
        "The eventual movement after rerolling still has to satisfy Stickler.",
        "Rules-derived"],

    ["Magician", "Scoocher", "Reroll",
        "Scoocher moves on each qualifying reroll even if the rerolled result is ultimately unused.",
        "Official"],


    /* -------------------------
       MASTERMIND
    ------------------------- */

    ["Mastermind", "Copycat", "Pre-race prediction",
        "Copycat does not copy Mastermind's before-race prediction.",
        "Official"],

    ["Mastermind", "Egg", "Pre-race power",
        "Egg's borrowed power must be distinguished from Mastermind's pre-race effect.",
        "Rules-derived"],

    ["Mastermind", "Twin", "Pre-race power",
        "Twin's borrowed power must be distinguished from Mastermind's pre-race effect.",
        "Rules-derived"],

    ["Mastermind", "M.O.U.T.H.", "Elimination",
        "Mastermind can interact with race-ending or elimination effects.",
        "Rules-derived"],

    ["Mastermind", "Sisyphus", "Pre-race effect",
        "Mastermind's pre-race effect interacts with Sisyphus's own pre-race considerations.",
        "Rules-derived"],

    ["Mastermind", "Scoocher", "Race ending",
        "Once the race ends, further interactions stop.",
        "Rules-derived"],


    /* -------------------------
       M.O.U.T.H.
    ------------------------- */

    ["M.O.U.T.H.", "Huge Baby", "No shared space",
        "Huge Baby cannot share space, preventing normal Chomp.",
        "Official"],

    ["M.O.U.T.H.", "Duelist", "Duel",
        "Duelist can duel M.O.U.T.H.; placement is unusual.",
        "Designer discussion"],

    ["M.O.U.T.H.", "Gunk", "Movement reduction",
        "Gunk can slow movement and change whether a racer reaches Chomp range.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Copycat", "Copy Chomp",
        "Copycat can copy Chomp when M.O.U.T.H. is leading.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Baba Yaga", "Trip overlap",
        "Baba Yaga's trip can overlap with M.O.U.T.H.'s Chomp timing.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Banana", "Position",
        "Banana's position affects whether M.O.U.T.H. can reach the relevant racer.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Hypnotist", "Warp",
        "Hypnotist can warp a racer into M.O.U.T.H.'s Chomp range.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Flip Flop", "Warp",
        "Flip Flop's swap can change Chomp opportunities.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Romantic", "Simultaneous arrival",
        "Simultaneous arrival does not trigger Chomp under the August 2026 rule.",
        "Official August 2026 rule"],

    ["M.O.U.T.H.", "Suckerfish", "Movement",
        "Suckerfish movement can move a racer into or out of Chomp range.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Third Wheel", "Warp",
        "Third Wheel can warp into a pair involving M.O.U.T.H.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Party Animal", "Simultaneous movement",
        "Simultaneous movement no longer triggers Chomp under the August 2026 rule.",
        "Official August 2026 rule"],

    ["M.O.U.T.H.", "Stickler", "Finish",
        "Chomp-related movement still interacts with exact-finish requirements.",
        "Rules-derived"],

    ["M.O.U.T.H.", "Scoocher", "Chomp",
        "Chomp is a power activation and can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       PARTY ANIMAL
    ------------------------- */

    ["Party Animal", "Huge Baby", "Space interaction",
        "Party Animal has a specific interaction with Huge Baby.",
        "Official"],

    ["Party Animal", "Romantic", "Simultaneous movement",
        "Simultaneous movement no longer triggers Romantic under the August 2026 rule.",
        "Official August 2026 rule"],

    ["Party Animal", "M.O.U.T.H.", "Simultaneous movement",
        "Simultaneous movement no longer triggers Chomp under the August 2026 rule.",
        "Official August 2026 rule"],

    ["Party Animal", "Baba Yaga", "Timing",
        "The exact timing of the simultaneous movement interaction needs verification.",
        "Needs verification"],

    ["Party Animal", "Banana", "Movement",
        "Party Animal's movement can interact with Banana.",
        "Rules-derived"],

    ["Party Animal", "Centaur", "Movement",
        "Party Animal's movement can interact with Centaur.",
        "Rules-derived"],

    ["Party Animal", "Coach", "Movement modification",
        "Coach can modify Party Animal's movement where applicable.",
        "Rules-derived"],

    ["Party Animal", "Gunk", "Movement modification",
        "Gunk can reduce Party Animal's movement where applicable.",
        "Rules-derived"],

    ["Party Animal", "Rocket Scientist", "Movement",
        "Rocket Scientist can interact with Party Animal's movement.",
        "Rules-derived"],

    ["Party Animal", "Heckler", "Trip",
        "Party Animal can create a deliberate trip interaction with Heckler.",
        "Rules-derived"],

    ["Party Animal", "Scoocher", "Power",
        "Party Animal's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],

    ["Party Animal", "Suckerfish", "Movement chain",
        "The interaction involves complicated simultaneous movement timing.",
        "Needs verification"],

    ["Party Animal", "Stickler", "Exact finish",
        "Party Animal's movement must respect Stickler's exact-finish requirement.",
        "Rules-derived"],


    /* -------------------------
       ROCKET SCIENTIST
    ------------------------- */

    ["Rocket Scientist", "Gunk", "Movement modification",
        "Gunk modifies the movement amount that Rocket Scientist doubles.",
        "Rules-derived"],

    ["Rocket Scientist", "Coach", "Movement modification",
        "Coach modifies the movement amount that Rocket Scientist doubles.",
        "Rules-derived"],

    ["Rocket Scientist", "Hare", "Movement modification",
        "Hare modifies the movement amount that Rocket Scientist doubles.",
        "Rules-derived"],

    ["Rocket Scientist", "Blimp", "Movement modification",
        "Blimp's movement can be doubled by Rocket Scientist.",
        "Rules-derived"],

    ["Rocket Scientist", "Alchemist", "Replacement movement",
        "The precise order of Alchemist's replacement and Rocket Scientist's doubling needs verification.",
        "Needs verification"],

    ["Rocket Scientist", "Legs", "Jog",
        "The interaction between Rocket Scientist and Legs' fixed Jog movement needs verification.",
        "Needs verification"],

    ["Rocket Scientist", "Heckler", "Trip",
        "Rocket Scientist can deliberately trip a racer.",
        "Rules-derived"],

    ["Rocket Scientist", "Inchworm", "Roll 1",
        "A roll of 1 can trigger Inchworm before Rocket Scientist's movement modification.",
        "Rules-derived"],

    ["Rocket Scientist", "Lackey", "Roll 6",
        "A roll of 6 can trigger Lackey while Rocket Scientist later modifies movement.",
        "Rules-derived"],

    ["Rocket Scientist", "Skipper", "Roll 1",
        "A roll of 1 can trigger Skipper while Rocket Scientist later modifies movement.",
        "Rules-derived"],

    ["Rocket Scientist", "Sisyphus", "Roll 6",
        "A roll of 6 can trigger Sisyphus instead of ordinary movement.",
        "Rules-derived"],

    ["Rocket Scientist", "Genius", "Prediction",
        "Genius predicts the die while Rocket Scientist modifies the resulting movement.",
        "Rules-derived"],

    ["Rocket Scientist", "Magician", "Final die",
        "The final die result determines the movement used by Rocket Scientist.",
        "Rules-derived"],

    ["Rocket Scientist", "Dicemonger", "Final die",
        "Dicemonger's reroll can change the final die result.",
        "Rules-derived"],

    ["Rocket Scientist", "Banana", "Passing",
        "Rocket Scientist's movement can create normal passing interactions.",
        "Rules-derived"],

    ["Rocket Scientist", "Centaur", "Passing",
        "Rocket Scientist's movement can create normal passing interactions.",
        "Rules-derived"],

    ["Rocket Scientist", "M.O.U.T.H.", "Stopping",
        "Rocket Scientist's final movement can interact with M.O.U.T.H.'s position.",
        "Rules-derived"],

    ["Rocket Scientist", "Baba Yaga", "Stopping",
        "Rocket Scientist's final movement can interact with Baba Yaga.",
        "Rules-derived"],

    ["Rocket Scientist", "Huge Baby", "Space",
        "Rocket Scientist's movement must respect Huge Baby's space restriction.",
        "Rules-derived"],

    ["Rocket Scientist", "Romantic", "Stopping",
        "Rocket Scientist's final movement can interact with Romantic.",
        "Rules-derived"],

    ["Rocket Scientist", "Scoocher", "Kablooey",
        "Rocket Scientist's Kablooey power can trigger Scoocher.",
        "Rules-derived"],

    ["Rocket Scientist", "Stickler", "Exact finish",
        "Rocket Scientist's doubled movement must still satisfy Stickler's exact-finish requirement.",
        "Rules-derived"],


    /* -------------------------
       ROMANTIC
    ------------------------- */

    ["Romantic", "Suckerfish", "Simultaneous arrival",
        "The previous Suckerfish/Romantic combo is shut down by the August 2026 simultaneous-arrival rule.",
        "Official August 2026 rule"],

    ["Romantic", "Party Animal", "Simultaneous movement",
        "Simultaneous movement no longer triggers Romantic.",
        "Official August 2026 rule"],

    ["Romantic", "Leaptoad", "Simultaneous arrival",
        "The updated simultaneous-arrival rules determine whether Romantic triggers.",
        "Official August 2026 rule"],

    ["Romantic", "Hypnotist", "Warp",
        "Hypnotist's warp is not ordinary movement into the space.",
        "Official August 2026 rule"],

    ["Romantic", "M.O.U.T.H.", "Simultaneous arrival",
        "Simultaneous arrival does not trigger the relevant stopping effect.",
        "Official August 2026 rule"],

    ["Romantic", "Huge Baby", "Shared space",
        "Huge Baby prevents the normal shared-space condition.",
        "Rules-derived"],

    ["Romantic", "Baba Yaga", "Stopping",
        "Baba Yaga's stopping interaction can interact with Romantic.",
        "Rules-derived"],

    ["Romantic", "Banana", "Stopping",
        "Banana's movement can create a Romantic stopping interaction.",
        "Rules-derived"],

    ["Romantic", "Duelist", "Shared space",
        "Duelist's shared-space situation can interact with Romantic.",
        "Rules-derived"],

    ["Romantic", "Scoocher", "Power",
        "Romantic's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       SCOOCHER
    ------------------------- */

    ["Scoocher", "Gunk", "Minus movement",
        "Scoocher can move once for each qualifying -1 affecting the main move.",
        "Official"],

    ["Scoocher", "Dicemonger", "Reroll",
        "A qualifying Dicemonger reroll can trigger Scoocher.",
        "Official"],

    ["Scoocher", "Leaptoad", "Occupied spaces",
        "Scoocher can move once per occupied space skipped by Leaptoad.",
        "Official"],

    ["Scoocher", "Magician", "Reroll",
        "Scoocher moves on each qualifying Magician reroll.",
        "Official"],

    ["Scoocher", "Suckerfish", "Follow",
        "The Suckerfish/Scoocher interaction remains valid after the August 2026 ruling.",
        "Official / Designer ruling"],

    ["Scoocher", "Huge Baby", "Loop",
        "The interaction can create an infinite loop; resolve it once and stop.",
        "Official"],

    ["Scoocher", "Romantic", "Power",
        "Romantic's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Party Animal", "Power",
        "Party Animal's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Duelist", "Duel",
        "Duelist's duel is a power activation and can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Banana", "Trip",
        "Banana's qualifying trip can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Baba Yaga", "Trip",
        "Baba Yaga's trip is a power and can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Centaur", "Hoofwhack",
        "Centaur's Hoofwhack can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Coach", "Power",
        "Coach's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Alchemist", "Power",
        "Alchemist's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Rocket Scientist", "Kablooey",
        "Rocket Scientist's Kablooey can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "M.O.U.T.H.", "Chomp",
        "M.O.U.T.H.'s Chomp is a power and can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Heckler", "Trip",
        "Heckler's qualifying trip power can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Hypnotist", "Warp",
        "Hypnotist's qualifying power activation can trigger Scoocher.",
        "Rules-derived"],

    ["Scoocher", "Third Wheel", "Roll Through",
        "Third Wheel's Roll Through is a power and can trigger Scoocher.",
        "Rules-derived"],


    /* -------------------------
       SISYPHUS
    ------------------------- */

    ["Sisyphus", "Magician", "Reroll 6",
        "A Magician reroll changing a 6 can prevent Sisyphus's trigger.",
        "Rules-derived"],

    ["Sisyphus", "Dicemonger", "Reroll 6",
        "A Dicemonger reroll changing a 6 can prevent Sisyphus's trigger.",
        "Rules-derived"],

    ["Sisyphus", "Genius", "Prediction",
        "Genius's predicted 6 can interact with Sisyphus's six-based effect.",
        "Rules-derived"],

    ["Sisyphus", "Lackey", "Rolled 6",
        "Both respond to a 6 but have different effects.",
        "Rules-derived"],

    ["Sisyphus", "Skipper", "Die result",
        "Sisyphus responds to 6 while Skipper responds to 1.",
        "Rules-derived"],

    ["Sisyphus", "Inchworm", "Die result",
        "Sisyphus responds to 6 while Inchworm responds to 1.",
        "Rules-derived"],

    ["Sisyphus", "Gunk", "Movement",
        "Gunk changes movement but does not change the underlying die result.",
        "Rules-derived"],

    ["Sisyphus", "Coach", "Movement",
        "Coach changes movement but does not change the underlying die result.",
        "Rules-derived"],

    ["Sisyphus", "Rocket Scientist", "Rolled 6",
        "When a 6 is rolled, Sisyphus's warp replaces ordinary movement.",
        "Rules-derived"],

    ["Sisyphus", "Stickler", "Warp",
        "Warping to Start is not ordinary movement toward the finish.",
        "Rules-derived"],

    ["Sisyphus", "Scoocher", "Power",
        "Sisyphus's qualifying ability can trigger Scoocher.",
        "Rules-derived"],

    ["Sisyphus", "Mastermind", "Pre-race",
        "Sisyphus's pre-race effects can interact with Mastermind's pre-race effect.",
        "Rules-derived"],


    /* -------------------------
       SKIPPER
    ------------------------- */

    ["Skipper", "Inchworm", "Roll 1",
        "On a roll of 1, Inchworm acts first and Skipper acts next.",
        "Official"],

    ["Skipper", "Magician", "Reroll 1",
        "A Magician reroll changing a 1 can prevent Skipper's trigger.",
        "Rules-derived"],

    ["Skipper", "Dicemonger", "Reroll 1",
        "A Dicemonger reroll changing a 1 can prevent Skipper's trigger.",
        "Rules-derived"],

    ["Skipper", "Genius", "Prediction",
        "Genius can predict a 1, interacting with Skipper's ability.",
        "Rules-derived"],

    ["Skipper", "Gunk", "Die unchanged",
        "Gunk changes movement but does not change the die result.",
        "Official"],

    ["Skipper", "Coach", "Movement",
        "Coach changes movement but not the die result.",
        "Rules-derived"],

    ["Skipper", "Alchemist", "Roll 1",
        "A roll of 1 still triggers Skipper even when Alchemist replaces the movement.",
        "Rules-derived"],

    ["Skipper", "Rocket Scientist", "Movement",
        "Rocket Scientist modifies movement after the relevant die result.",
        "Rules-derived"],

    ["Skipper", "Scoocher", "Extra turn",
        "Skipper's qualifying extra-turn ability can trigger Scoocher according to timing.",
        "Rules-derived"],


    /* -------------------------
       STICKLER
    ------------------------- */

    ["Stickler", "Duelist", "Exact finish",
        "Duelist's movement must respect Stickler's exact-finish requirement.",
        "Official"],

    ["Stickler", "Legs", "Exact finish",
        "Legs' Jog must respect Stickler's exact-finish requirement.",
        "Rules-derived"],

    ["Stickler", "Rocket Scientist", "Exact finish",
        "Rocket Scientist's doubled movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Hare", "Exact finish",
        "Hare's movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Alchemist", "Exact finish",
        "Alchemist's replacement movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Coach", "Exact finish",
        "Coach-modified movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Gunk", "Exact finish",
        "Gunk-modified movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Blimp", "Exact finish",
        "Blimp's movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Suckerfish", "Exact finish",
        "Suckerfish's forced movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Centaur", "Exact finish",
        "Centaur's backward or forced movement does not circumvent exact finish.",
        "Rules-derived"],

    ["Stickler", "Banana", "Exact finish",
        "Banana-related movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Baba Yaga", "Exact finish",
        "Baba Yaga-related movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Huge Baby", "Exact finish",
        "Movement involving Huge Baby must still respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Party Animal", "Exact finish",
        "Party Animal's movement must respect exact finish.",
        "Rules-derived"],

    ["Stickler", "Scoocher", "Exact finish",
        "Scoocher's movement must respect exact finish.",
        "Rules-derived"],


    /* -------------------------
       SUCKERFISH
    ------------------------- */

    ["Suckerfish", "Romantic", "Simultaneous arrival",
        "The previous combo is shut down by the August 2026 simultaneous-arrival rule.",
        "Official August 2026 rule"],

    ["Suckerfish", "Scoocher", "Follow",
        "The Suckerfish/Scoocher interaction remains valid after the August 2026 rule.",
        "Official / Designer ruling"],

    ["Suckerfish", "Huge Baby", "Position",
        "Huge Baby's space restriction affects Suckerfish's positioning.",
        "Rules-derived"],

    ["Suckerfish", "Baba Yaga", "Trip",
        "Suckerfish movement can create a Baba Yaga trip interaction.",
        "Rules-derived"],

    ["Suckerfish", "Banana", "Movement",
        "Suckerfish's movement can interact with Banana's position.",
        "Rules-derived"],

    ["Suckerfish", "M.O.U.T.H.", "Range",
        "Suckerfish can move a racer into or out of M.O.U.T.H.'s range.",
        "Rules-derived"],

    ["Suckerfish", "Stickler", "Exact finish",
        "Suckerfish's movement must respect exact finish.",
        "Rules-derived"],

    ["Suckerfish", "Duelist", "Position",
        "Suckerfish's movement can change a Duelist interaction.",
        "Rules-derived"],

    ["Suckerfish", "Leaptoad", "Skipped spaces",
        "Leaptoad's skipped spaces can affect Suckerfish's movement relationship.",
        "Rules-derived"],

    ["Suckerfish", "Hypnotist", "Warp",
        "Hypnotist's warp changes Suckerfish's relevant position.",
        "Rules-derived"],

    ["Suckerfish", "Third Wheel", "Pair",
        "Third Wheel's warp can change Suckerfish's target or pair.",
        "Rules-derived"],

    ["Suckerfish", "Party Animal", "Simultaneous movement",
        "The interaction involves simultaneous movement and needs verification.",
        "Needs verification"],

    ["Suckerfish", "Centaur", "Forced movement",
        "The interaction involving Centaur forcing movement of the followed racer needs verification.",
        "Needs verification"],


    /* -------------------------
       THIRD WHEEL
    ------------------------- */

    ["Third Wheel", "Romantic", "Warp into pair",
        "Third Wheel can warp into a pair; updated simultaneous-arrival rules determine Romantic's trigger.",
        "Official August 2026 rule"],

    ["Third Wheel", "M.O.U.T.H.", "Warp into pair",
        "Third Wheel can warp into a pair involving M.O.U.T.H.",
        "Rules-derived"],

    ["Third Wheel", "Huge Baby", "Sharing",
        "Third Wheel cannot create an illegal shared space with Huge Baby.",
        "Rules-derived"],

    ["Third Wheel", "Duelist", "Duel",
        "Third Wheel can create a shared-space situation that causes a duel.",
        "Rules-derived"],

    ["Third Wheel", "Baba Yaga", "Trip",
        "Warping onto Baba Yaga can trigger the applicable trip.",
        "Rules-derived"],

    ["Third Wheel", "Banana", "Warp",
        "Third Wheel's warp is not ordinary passing.",
        "Rules-derived"],

    ["Third Wheel", "Suckerfish", "Target",
        "Third Wheel can change the pair or target relevant to Suckerfish.",
        "Rules-derived"],

    ["Third Wheel", "Scoocher", "Roll Through",
        "Roll Through is a power and can trigger Scoocher.",
        "Rules-derived"],

    ["Third Wheel", "Stickler", "Exact finish",
        "Subsequent movement must respect Stickler's exact-finish requirement.",
        "Rules-derived"],


    /* -------------------------
       TWIN
    ------------------------- */

    ["Twin", "Copycat", "Copy",
        "Copycat can copy Twin's active power.",
        "Rules-derived"],

    ["Twin", "Egg", "Borrowed powers",
        "Twin and Egg can both involve borrowed character powers.",
        "Rules-derived"],

    ["Twin", "Scoocher", "Borrowed power",
        "A borrowed Twin power can trigger Scoocher if that power qualifies.",
        "Rules-derived"],

    ["Twin", "Gunk", "Conditional copying",
        "Twin can use Gunk's power when the relevant condition is met.",
        "Rules-derived"],

    ["Twin", "Coach", "Conditional copying",
        "Twin can use Coach's power when the relevant condition is met.",
        "Rules-derived"],

    ["Twin", "Blimp", "Conditional copying",
        "Twin can use Blimp's power when the relevant condition is met.",
        "Rules-derived"],

    ["Twin", "M.O.U.T.H.", "Conditional copying",
        "Twin can use M.O.U.T.H.'s power when the relevant condition is met.",
        "Rules-derived"],

    ["Twin", "Huge Baby", "Conditional copying",
        "Twin can use Huge Baby's power when the relevant condition is met.",
        "Rules-derived"],

    ["Twin", "Baba Yaga", "Conditional copying",
        "Twin can use Baba Yaga's power when the relevant condition is met.",
        "Rules-derived"],

    ["Twin", "Romantic", "Conditional copying",
        "Twin can use Romantic's power when the relevant condition is met.",
        "Rules-derived"],

    ["Twin", "Mastermind", "Pre-race power",
        "The distinction between Twin borrowing Mastermind's pre-race power and ordinary active powers needs verification.",
        "Needs verification"],

    ["Twin", "Sisyphus", "Pre-race power",
        "The interaction between Twin's borrowed power and Sisyphus's pre-race effects needs verification.",
        "Needs verification"]

];


/* =========================================================
   PREPARE INTERACTIONS
========================================================= */

const interactions = interactionData.map(row => ({
    character: row[0],
    with: row[1],
    topic: row[2],
    details: row[3],
    status: row[4]
}));


/* =========================================================
   DOM ELEMENTS
========================================================= */

const athleteGrid = document.getElementById("athlete-grid");
const searchInput = document.getElementById("search");
const resultCount = document.getElementById("result-count");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

const filterButtons = document.querySelectorAll(".filter");


/* =========================================================
   STATE
========================================================= */

let activeFilter = "all";


/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getInitials(name) {
    const words = name
        .replace(/\./g, "")
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 1) {
        return words[0].substring(0, 2).toUpperCase();
    }

    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();
}


function getInteractionsFor(name) {

    return interactions.filter(item =>
        item.character === name ||
        item.with === name
    );

}


function getOtherCharacter(interaction, currentName) {

    if (interaction.character === currentName) {
        return interaction.with;
    }

    return interaction.character;

}


function getStatusClass(status) {

    const lower = status.toLowerCase();

    if (
        lower.includes("needs verification")
    ) {
        return "verification";
    }

    if (
        lower.includes("official")
    ) {
        return "official";
    }

    return "derived";
}


function getStatusLabel(status) {

    return status;
}


/* =========================================================
   SEARCH / FILTER
========================================================= */

function matchesSearch(athlete, query) {

    if (!query) {
        return true;
    }

    const lowerQuery = query.toLowerCase();

    const athleteText = [
        athlete.name,
        athlete.category,
        athlete.power,
        athlete.description,
        athlete.official
    ]
        .join(" ")
        .toLowerCase();

    if (athleteText.includes(lowerQuery)) {
        return true;
    }

    const relatedInteractions =
        getInteractionsFor(athlete.name);

    return relatedInteractions.some(interaction =>
        [
            interaction.character,
            interaction.with,
            interaction.topic,
            interaction.details,
            interaction.status
        ]
            .join(" ")
            .toLowerCase()
            .includes(lowerQuery)
    );
}


function matchesFilter(athlete) {

    if (activeFilter === "all") {
        return true;
    }

    return athlete.category === activeFilter;
}


/* =========================================================
   RENDER CARDS
========================================================= */

function renderAthletes() {

    const query =
        searchInput.value.trim().toLowerCase();

    const filtered = athletes.filter(athlete =>
        matchesFilter(athlete) &&
        matchesSearch(athlete, query)
    );

    athleteGrid.innerHTML = "";

    resultCount.textContent =
        `${filtered.length} racer${filtered.length === 1 ? "" : "s"}`;

    if (filtered.length === 0) {

        athleteGrid.innerHTML = `
            <div class="no-results">
                <h3>No racers found</h3>
                <p>
                    Try a different character, ability,
                    interaction, or search term.
                </p>
            </div>
        `;

        return;
    }


    filtered.forEach((athlete, index) => {

        const athleteInteractions =
            getInteractionsFor(athlete.name);

        const card =
            document.createElement("article");

        card.className = "athlete-card";

        card.tabIndex = 0;

        card.setAttribute(
            "role",
            "button"
        );

        card.setAttribute(
            "aria-label",
            `View ${athlete.name}`
        );

        card.innerHTML = `

            <span class="card-number">
                ${String(
                    athletes.indexOf(athlete) + 1
                ).padStart(2, "0")}
            </span>

            <div class="avatar">
                ${escapeHTML(
                    getInitials(athlete.name)
                )}
            </div>

            <h2 class="card-name">
                ${escapeHTML(athlete.name)}
            </h2>

            <p class="card-power">
                ${escapeHTML(athlete.power)}
            </p>

            <p class="card-description">
                ${escapeHTML(athlete.description)}
            </p>

            <span class="type">
                ${escapeHTML(athlete.category)}
            </span>

            <span class="interaction-count">
                ${athleteInteractions.length}
                interaction${athleteInteractions.length === 1 ? "" : "s"}
            </span>

        `;


        card.addEventListener(
            "click",
            () => openModal(athlete.name)
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openModal(athlete.name);
                }

            }
        );


        athleteGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN MODAL
========================================================= */

function openModal(name) {

    const athlete =
        athletes.find(
            item => item.name === name
        );

    if (!athlete) {
        return;
    }

    const athleteInteractions =
        getInteractionsFor(name);


    athleteInteractions.sort(
        (a, b) =>
            getOtherCharacter(a, name)
                .localeCompare(
                    getOtherCharacter(b, name)
                )
    );


    const interactionHTML =
        athleteInteractions.length > 0

        ?

        athleteInteractions.map(
            interaction => {

                const otherCharacter =
                    getOtherCharacter(
                        interaction,
                        name
                    );

                const statusClass =
                    getStatusClass(
                        interaction.status
                    );

                const isVerification =
                    interaction.status
                        .toLowerCase()
                        .includes(
                            "needs verification"
                        );


                return `

                    <article
                        class="interaction ${statusClass}"
                    >

                        <div class="interaction-top">

                            <span class="interaction-with">
                                ${escapeHTML(
                                    otherCharacter
                                )}
                            </span>

                            <span class="interaction-status">
                                ${escapeHTML(
                                    getStatusLabel(
                                        interaction.status
                                    )
                                )}
                            </span>

                        </div>

                        <div class="interaction-topic">
                            ${escapeHTML(
                                interaction.topic
                            )}
                        </div>

                        <div class="interaction-details">
                            ${escapeHTML(
                                interaction.details
                            )}
                        </div>

                        ${
                            isVerification
                            ?
                            `
                                <div class="interaction-warning">
                                    ⚠ Needs verification
                                </div>
                            `
                            :
                            ""
                        }

                    </article>

                `;

            }
        ).join("")

        :

        `
            <div class="no-results">
                No interaction entries are currently
                recorded for this racer.
            </div>
        `;


    modalContent.innerHTML = `

        <div class="modal-header">

            <div class="modal-avatar">
                ${escapeHTML(
                    getInitials(
                        athlete.name
                    )
                )}
            </div>

            <div>

                <div class="modal-number">
                    RACER
                    ${String(
                        athletes.indexOf(athlete) + 1
                    ).padStart(2, "0")}
                </div>

                <h2
                    id="modal-title"
                    class="modal-title"
                >
                    ${escapeHTML(
                        athlete.name
                    )}
                </h2>

                <p class="modal-power-name">
                    ${escapeHTML(
                        athlete.power
                    )}
                </p>

            </div>

        </div>


        <section class="info-section">

            <h3>
                Ability
            </h3>

            <div class="official-text">
                ${escapeHTML(
                    athlete.official
                )}
            </div>

        </section>


        <section class="info-section">

            <h3>
                Plain-English Explanation
            </h3>

            <div class="official-text">
                ${escapeHTML(
                    athlete.description
                )}
            </div>

        </section>


        <section class="info-section">

            <div class="interaction-heading">

                <h3>
                    Character Interactions
                </h3>

                <span>
                    ${athleteInteractions.length}
                </span>

            </div>

            <p class="interaction-summary">
                Interactions involving
                <strong>
                    ${escapeHTML(athlete.name)}
                </strong>
                are shown below. Each entry preserves
                its source/status classification.
            </p>

            <div class="interaction-list">
                ${interactionHTML}
            </div>

        </section>

    `;


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    modalClose.focus();

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

}


/* =========================================================
   EVENT LISTENERS
========================================================= */

searchInput.addEventListener(
    "input",
    renderAthletes
);


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );

            button.classList.add("active");

            activeFilter =
                button.dataset.filter;

            renderAthletes();

        }
    );

});


modalClose.addEventListener(
    "click",
    closeModal
);


document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {
            closeModal();
        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderAthletes();


/* =========================================================
   OPTIONAL GLOBAL ACCESS
========================================================= */

window.MagicalAthlete = {

    athletes,

    interactions,

    openModal,

    closeModal

};
