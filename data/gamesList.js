export default {
    games: [
        {
            id: 1,
            name: "Kings Cup",
            suggestedPlayers: "4+",
            drunkOMeter: 6,
            itemsRequired: ["Pack of cards", "Large bowl or cup"],
            explanationBlurb: "its the kings cup",
            rules: {
                ace: "snake eyes",
                two: "you",
                three: "me",
                four: "whores",
                five: "gecko",
                six: "dicks",
                seven: "heaven",
                eight: "mate",
                nine: "big booty",
                ten: "waterfall",
                jack: "make a rule",
                queen: "question master",
                king: "empty your vessel into the kings cup"
            },
            customRules: [
                "snake eyes", "you", "me", "whores", "gecko", "dicks", "heaven", "mate" 
            ],
            ruleDescription: {
                snakeEyes: "If you look this person in the yes you must drink",

            }
        },
        {
            id: 2,
            name: "Smash Cup",
            suggestedPlayers: "4+",
            drunkOMeter: 4,
            itemsRequired: ["Pack of cards", "Large bowl or cup"],
            explanationBlurb: "get yo balls in the cup boi",
            rules: {
                inTheCup: "if you bounce the ball into the cup you make hand the ball and cup to the next person",
                inTheCupFirstGo: "if you bounce the ball into the cup on the first go you make hand the ball and cup to any other person",
                getDunked: "if your cup gets dunked, then you must consume before continuing to play",
                spill: "if someone spills they must consume the drink before continuing to play"
            },
            customRules: [],
            ruleDescription: {

            }
        },
        {
            id: 3,
            name: "Taxi Driver",
            suggestedPlayers: "2+",
            drunkOMeter: 7,
            itemsRequired: ["Pack of cards", "Large bowl or cup"],
            explanationBlurb: "Its taxi driver",
            rules: {
                higher: "choose if the next card flipped will be higher than the current card - if correct you move forward",
                lower: "choose if the next card flipped will be lower than the current card - if correct you move forward",
                same: "choose if the next card flipped will be lower than the current card - if correct you win",
                incorrect: "if incorrect go back to the start"
            },
            customRules: [],
            ruleDescription: {

            }
        }
    ]
}
