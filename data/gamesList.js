export default {
    games: [
        {
            id: 1,
            name: "Kings Cup",
            suggestedPlayers: "4-10",
            drunkOMeter: 8,
            gameDuration: "40-60 mins",
            itemsRequired: ["Pack of cards", "Large bowl/cup"],
            explanationBlurb: "To set up the game, evenly spread a deck of cards face down around the cup. All cards much touch the cards on either side, creating a ‘chain’ of cards, then place the cup/bowl in the middle of this circle. To play king’s cup, players must take turns picking cards, going around the circle. Each card in the deck corresponds to a specific mini game shown below. If, when picking up a card, a player breaks the circle of cards, that player must finish the rest of their drink. The Game finishes when the last King is drawn and that person must drink whatever is in the king’s cup",
            rules: {
                ace: "snake eyes",
                two: "you",
                three: "me",
                four: "categories",
                five: "gecko",
                six: "social",
                seven: "heaven",
                eight: "mate",
                nine: "rhyme",
                ten: "waterfall",
                jack: "make a rule",
                queen: "question master",
                king: "fill vessel",
                joker: "the fool"
            },
            customRules: [
                "snakeEyes", "you", "me", "whores", "gecko", "dicks", "heaven", "mate", "waterfall", "social", "rhyme", "neverHaveIEver", "questionMaster", "categories", "helmet", "makeARule", "queasyCreation", "king"
            ],
            ruleDescription: {
                snakeEyes: "Any player who looks you in the eyes must drink",
                waterfall: "Everyone drinks and cannot stop until the person to their right has stopped, starting at the card drawer",
                you: "Pick someone to take 2x Drinks",
                me: "You take 3x Drinks",
                whores: "Ladies drink",
                dicks: "Men Drink",
                social: "Everyone drinks",
                gecko: "Everyone must place 3 limbs on the nearest wall, last player drinks",
                heaven: "You may point at the roof at any time; last person to copy must drink",
                mate: "Choose someone who must drink every time you do (No chains)",
                rhyme: "Pick a word, around the circle; players must rhyme with that word until an error is made, no repeats!",
                categories: "Pick a category, around the circle, others must say a word in that category until an error is made, no repeats!",
                neverHaveIEver: "Card drawer speaks, losers drink",
                questionMaster: "If any player answers a question you have asked, they must drink",
                king: "Pour some drink into the cup, 4th king drinks",
                helmet: "If you have a spare drinks box, this can be placed on a players head and they must not speak until the helmet is placed on another or the game ends.",
                makeARule: "Player makes a rule that will be in play until the end of the game, so long as it does not interfere with normal game rules.",
                queasyCreation: "Combine any three drinks from the table into a shot glass and give it to someone",
                bigBooty: "WRITE DESCRIPTION LATER",
                theFool: "(typically the joker card): Take a shot",
                hiLo: "(Typically Joker): Card drawer fills a shot glass with liquor, then players High or low, if successful, passes shot to the left and play continues",
                king: "Empty your vessel into the kings cup"
            }
        },
        {
            id: 2,
            name: "Smash Cup",
            suggestedPlayers: "4+",
            drunkOMeter: 4,
            gameDuration: "10-20 mins",
            itemsRequired: ["Pack of cards", "Large bowl or cup"],
            explanationBlurb: "get yo balls in the cup boi",
            rules: {
                rules: "PLACEHOLDER",
                inTheCup: "if you bounce the ball into the cup you make hand the ball and cup to the next person",
                inTheCupFirstGo: "if you bounce the ball into the cup on the first go you make hand the ball and cup to any other person",
                getDunked: "if your cup gets dunked, then you must consume before continuing to play",
                spill: "if someone spills they must consume the drink before continuing to play"
            },
            customRules: [],
            ruleDescription: null
        },
        {
            id: 3,
            name: "Taxi Driver",
            suggestedPlayers: "2+",
            drunkOMeter: 7,
            gameDuration: "2-20 mins",
            itemsRequired: ["Pack of cards", "Large bowl or cup"],
            explanationBlurb: "A high/low based card game that can be quick for some and deadly for others. Best played in a group and with a deck without jokers",
            rules: {
                rules: "Deal 8 cards face up in a line. The “driver’ choses which side to start on and calls if the next card is higher, lower or the same. A card is then dealt on top of the first card in the line, if the driver is correct they proceed to the next card, if the driver is wrong they start again from the start and drink once per card they have traveled (including the card they were on). If the same numbered card is dealt, this counts as a fail and the driver must choose someone else to hop in the car (drink when the driver drinks). If the driver calls “same’ and is correct, they win the game instantly. The game is also over if the drivers makes it to the end and guesses the last card correctly.",
            },
            customRules: [],
            ruleDescription: null
        },
        {
            id: 4,
            name: "Fingers",
            suggestedPlayers: "4+",
            drunkOMeter: 2,
            gameDuration: "2-10 mins",
            itemsRequired: ["Bowl or Glass"],
            explainationBlurb: "A quick guessing game usually used and an icebreaker using nothing but a glass and your fingers.",
            rules: {
                rules: "The game progresses in a series of turns clockwise.Each turn starts with all players putting one finger on the rim of the cup.When all fingers are on the rim, the player whose turn it is announces, 'three - two - one' followed by a number.The number is the player's guess at how many fingers will remain on the cup. All participating players, including the player whose turn it is, have the option to keep their finger on the cup or to remove it from the cup after the 'three - two - one' count. If a players guesses correctly they must say 'Thanks you ladies and gentlemen for playing fingers with me.' If they do so without smiling they are removed from the game (a win), an incorrect guess keeps the player active in the game."
            },
            customRules: [],
            ruleDescription: null
        }
    ]
}
