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
                A: "snake eyes",
                2: "you",
                3: "me",
                4: "categories",
                5: "gecko",
                6: "social",
                7: "heaven",
                8: "mate",
                9: "rhyme",
                10: "waterfall",
                J: "make a rule",
                Q: "question master",
                K: "fill vessel",
                JOKER: "the fool"
            },
            customRules: [
                "snakeEyes", "you", "me", "whores", "gecko", "dicks", "heaven", "mate", "waterfall", "social", "rhyme", "NHIE", "qMaster", "categories", "helmet", "makeARule", "qCreation","bigBooty","theFool","highLow", "fillVessel"
            ],
            customRulesData : {
              A: ["snake eyes"],
              2: ["you"],
              3: ["me"],
              4: ["categories", "whores", "big booty"],
              5: ["gecko", "helmet"],
              6: ["social", "dicks"],
              7: ["heaven"],
              8: ["mate"],
              9: ["rhyme", "never have i ever"],
              10: ["waterfall"],
              J: ["make a rule"],
              Q: ["qMaster", "qCreation"],
              K: ["fill vessel"],
              JOKER : ["the fool", "high low"]
            },
            ruleDescription: {
                snakeEyes: "Snake Eyes: Any player who looks you in the eyes must drink",
                waterfall: "Waterfall: Everyone drinks and cannot stop until the person to their right has stopped, starting at the card drawer",
                you: "You: Pick someone to take 2x Drinks",
                me: "Me: You take 3x Drinks",
                whores: "Whores: Ladies drink",
                dicks: "Dicks: Men Drink",
                social: "Social: Everyone drinks",
                gecko: "Gecko: Everyone must place 3 limbs on the nearest wall, last player drinks",
                heaven: "Heaven: You may point at the roof at any time; last person to copy must drink",
                mate: "Mate: Choose someone who must drink every time you do (No chains)",
                rhyme: "Rhyme: Pick a word, around the circle; players must rhyme with that word until an error is made, no repeats!",
                categories: "Categories: Pick a category, around the circle, others must say a word in that category until an error is made, no repeats!",
                NHIE: "Never Have I Ever (NHIE): Card drawer speaks, losers drink",
                qMaster: "Question Master: If any player answers a question you have asked, they must drink",
                king: "King: Pour your drink into the cup, 4th king drinks",
                helmet: "Helmet: If you have a spare drinks box, this can be placed on a players head and they must not speak until the helmet is placed on another or the game ends.",
                makeARule: "Make A Rule: Player makes a rule that will be in play until the end of the game, so long as it does not interfere with normal game rules.",
                qCreation: "Queasy Creation: Combine any three drinks from the table into a shot glass and give it to someone",
                bigBooty: "Big Booty: WRITE DESCRIPTION LATER",
                theFool: "The Fool: Take a shot",
                highLow: "High-Low: Card drawer fills a shot glass with liquor, then players High or low, if successful, passes shot to the left and play continues",
            }
        },
        {
            id: 2,
            name: "Smash Cup",
            suggestedPlayers: "4+",
            drunkOMeter: 4,
            gameDuration: "10-15 mins",
            itemsRequired: ["2 Ping pong balls", "many cups"],
            explanationBlurb: "get yo balls in the cup boi",
            rules: {
                rules: "Setting up the game requires a flat surface that players can stand around (a table works best). Grab 20 or so cups and fill them about 1/3 with your drink of choice, then place them all together in the middle of the table. 2 players opposite each other start with an empty cup and a ball, these players must bounce the ball on the table and into the empty cup. If the player is successful on the first attempt, they may pass their cup and ball to any player on the table, if successful after the first attempt, the player may pass their cup and ball to the left. If a player moves their cup to a player still completing the bounce, they may stack their cup in that player’s cup (forming a tower), this player must now choose a cup from the center to drink from and play with that cup (passing their original tower to the left)",
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
                rules: "The game progresses in a series of turns clockwise. Each turn starts with all players putting one finger on the rim of the cup. When all fingers are on the rim, the player whose turn it is announces, 'three - two - one' followed by a number.The number is the player's guess at how many fingers will remain on the cup. All participating players, including the player whose turn it is, have the option to keep their finger on the cup or to remove it from the cup after the 'three - two - one' count. If a players guesses correctly they must say 'Thanks you ladies and gentlemen for playing fingers with me.' If they do so without smiling they are removed from the game (a win), an incorrect guess keeps the player active in the game."
            },
            customRules: [],
            ruleDescription: null
        }
    ]
}
