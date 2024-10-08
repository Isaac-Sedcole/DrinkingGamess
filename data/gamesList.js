export default {
  games: [
    {
      id: 1,
      name: "Kings Cup",
      iconName: "KingsCup",
      suggestedPlayers: "4-10",
      drunkOMeter: 8,
      gameDuration: "40-60 mins",
      itemsRequired: ["Pack of cards", "Large bowl/cup"],
      explanationBlurb: `To set up the game, evenly spread a deck of cards face down around the cup. All cards must touch the cards on either side, creating a ‘chain' of cards, then place the cup/bowl in the middle of this circle.

To play King's Cup, players must take turns picking cards, going around the circle. Each card in the deck corresponds to a specific mini-game shown below. If, when picking up a card, a player breaks the circle of cards, that player must finish the rest of their drink.

The game finishes when the last King is drawn and that person must drink whatever is in the King's Cup.`,
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
        Q: "q master",
        K: "fill vessel",
        JOKER: "the fool"
      },
      customRules: [
        "snakeEyes", "you", "me", "whores", "gecko", "dicks", "heaven", "mate", "waterfall", "social", "rhyme", "NHIE", "q master", "categories", "helmet", "makeARule", "qCreation", "bigBooty", "theFool", "highLow", "fillVessel"
      ],
      customRulesData: [{data: "A", place: 1}, {data: "2", place: 2}, {data: "3", place: 3}, {data: "4", place: 4}, {data: "5", place: 5}, {data: "6", place: 6}, {data: "7", place: 7}, {data: "8", place: 8}, {data: "9", place: 9}, {data: "10", place: 10}, {data: "J", place: 11}, {data: "Q", place: 12}, {data: "K", place: 13},{data: "JOKER", place: 14}],
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
        fillVessel: "King: Pour your drink into the cup, 4th king drinks",
      }
    },
    {
      id: 2,
      name: "Smash Cup",
      iconName: "SmashCup",
      suggestedPlayers: "4+",
      drunkOMeter: 4,
      gameDuration: "10-15 mins",
      itemsRequired: ["2 Ping pong balls", "many cups"],
      explanationBlurb: "get yo balls in the cup boi",
      rules: {
        rules: `Setting up the game requires a flat surface that players can stand around (a table works best). Grab 20 or so cups and fill them about 1/3 with your drink of choice, then place them all together in the middle of the table.

2 players opposite each other start with an empty cup and a ball. These players must bounce the ball on the table and into the empty cup. If the player is successful on the first attempt, they may pass their cup and ball to any player on the table. If successful after the first attempt, the player may pass their cup and ball to the left.

If a player moves their cup to a player still completing the bounce, they may stack their cup in that player's cup (forming a tower). This player must now choose a cup from the center to drink from and play with that cup (passing their original tower to the left).
        `,
    },
      customRules: [],
      ruleDescription: null
    },
    {
      id: 3,
      name: "Taxi Driver",
      iconName: "TaxiDriver",
      suggestedPlayers: "2+",
      drunkOMeter: 7,
      gameDuration: "2-20 mins",
      itemsRequired: ["Pack of cards", "Large bowl or cup"],
      explanationBlurb: "A high/low based card game that can be quick for some and deadly for others. Best played in a group and with a deck without jokers",
      rules: {
        rules: `Deal 8 cards face up in a line. The 'driver' chooses which side to start on and calls if the next card is higher, lower, or the same. A card is then dealt on top of the first card in the line. If the driver is correct, they proceed to the next card. If the driver is wrong, they start again from the start and drink once per card they have traveled (including the card they were on).

If the same numbered card is dealt, this counts as a fail and the driver must choose someone else to hop in the car (drink when the driver drinks). If the driver calls 'same' and is correct, they win the game instantly. The game is also over if the driver makes it to the end and guesses the last card correctly.`,
    },
      customRules: [],
      ruleDescription: null
    },
    {
      id: 4,
      name: "Fingers",
      iconName: "Fingers",
      suggestedPlayers: "4+",
      drunkOMeter: 2,
      gameDuration: "2-10 mins",
      itemsRequired: ["Bowl or Glass"],
      explanationBlurb: "A quick guessing game usually used and an icebreaker using nothing but a glass and your fingers.",
      rules: {
        rules: `The game progresses in a series of turns clockwise. Each turn starts with all players putting one finger on the rim of the cup. When all fingers are on the rim, the player whose turn it is announces, 'three - two - one' followed by a number. The number is the player's guess at how many fingers will remain on the cup.
    
All participating players, including the player whose turn it is, have the option to keep their finger on the cup or to remove it from the cup after the 'three - two - one' count. If a player guesses correctly, they must say 'Thank you ladies and gentlemen for playing fingers with me.' If they do so without smiling, they are removed from the game (a win). An incorrect guess keeps the player active in the game.`,
    },
      customRules: [],
      ruleDescription: null
    },
    {
      id: 5,
      name: "Horses",
      iconName: "Horses",
      suggestedPlayers: "4+",
      drunkOMeter: 5,
      gameDuration: "2 mins per round",
      itemsRequired: ["Pack of cards", "Music and/or Singing"],
      explanationBlurb: "A card game based on suits, bet on a horse, place your bets, and then start flipping!",
      rules: {},
      customRules: ["setup", "gameplay", "betting", "music"],
      ruleDescription: {
        setup: "Firstly take the 4 Ace cards out of the deck and place them in a line together. Next place a card of each suit down like a ladder that the Ace cards need to climb. You can make this ladder as long as you want just be sure to keep an equal amount of suited cards in that line (eg multiples of 4, 1 of each suit) the remaining cards are shuffled into a deck.",
        gameplay: "With all the horses lined up, flip one card from the deck face up, depending on what suit that card is, the corresponding Ace will move one space for ward on the ladder. For example, if you flip a card and it is a diamond, the diamond ace will move 1 space forward. Repeat this process until one of the Aces has reached the end of the ladder",
        betting: "You can bet drinks (or anything else) on the outcome of the race, bet before the race starts, if you lose you must drink and if you win you can nominate other players to drink. You can multiply the drinks for the winner if you choose as it's more likely to lose than win. For example, say I bet one drink on my horse, if I lose I drink once, if I win, I can nominate 4",
        music: "This game is best played to the 'Lone Ranger Theme Song,' singing this song as the game is played is also encouraged."
      }
    },
    {
      id: 6,
      name: "Beer Pong",
      iconName: "BeerPong",
      suggestedPlayers: "2 or 4",
      drunkOMeter: 7,
      gameDuration: "10 - 20 mins",
      itemsRequired: ["20 plastic cups", "1 - 2 ping pong balls"],
      explanationBlurb: "A classic American drinking game that consists of throwing balls into cups across a table",
      rules: {},
      customRules: ["setUp", "throwingRules", "defenceRules", "redemptionBasics", "redemption1", "redemption2", "additionalRules"],
      ruleDescription: {
        setUp: `Arrange 10 plastic cups in a triangle on each side of a large table; fill these cups with your alcoholic beverage (or water, you can drink from another vessel). Separate into 2 teams. The objective of the game is to throw a ball into the opposition's cups whilst standing behind your own cups. When a team reaches 0 cups, they lose.`,
        throwingRules: `When throwing a ball, the player's elbow must be behind the table. If a ball lands in a cup, that cup is eliminated and taken away (and drunk if alcoholic). If the ball goes into the opposition's cup after bouncing at least once on the table, this counts as 2x. The defending team must select the closest cup of their choice to remove in addition to the cup that was hit, and drink for both.
    
If a ball lands in any of the cups that have already been eliminated, the thrower of that ball must take a drink. If 2 balls land in the same cup, this is called an explosion; all other cups touching this cup are therefore eliminated. If the ball bounces back to your team after you throw, you may throw it again; however, this shot must be a trick shot. If a player throws a ball and hits neither the table nor the cups, this shameful player must drink once.`,
        defenceRules: `The defending team may grab or slap a ball if it has bounced off the table at any point. If you catch a ball that bounces off the rim of your cups with one hand (without the ball touching the table or your body), you may give out a sip to the thrower of that ball.
    
If a ball is thrown into a cup and is spinning around the rim, the defending team may blow into the cup in an attempt to force the ball out. If the ball successfully flies out, the cup may stay in play. If the ball stays in the cup or touches the liquid in the cup, then said cup is eliminated and must be drunk.`,
        redemptionBasics: `A redemption shot is the last chance a team may have after their cups have all been eliminated. If they hit a cup, then the game may continue. There are 2 versions of redemption:`,
        redemption1: `The team with 0 cups may keep throwing without being interrupted regardless of the shot. If the ball lands in a cup, they may throw again until they miss. If all members of the team miss, then the game ends. However, if the team attempting redemption manages to get all the opposition's cups, both teams place one cup back on the table and the game continues.`,
        redemption2: `The team with 0 cups gets 1 throw each. If this throw lands in a cup, they may place their last cup back on the table and play continues.`,
        additionalRules: `If a player knocks over any of their own cups, this counts as the cup being eliminated and must be drunk or put to the side. Use one ball for single-player teams and two balls for doubles.`,
    },  
    },
    {
      id: 7,
      name: "Cheers Governor",
      iconName: "CheersGov",
      suggestedPlayers: "5+",
      drunkOMeter: 4,
      gameDuration: "10 - 20 mins",
      itemsRequired: ["nothing"],
      explanationBlurb: "Count to 21 and drink as the game evolves as you play",
      rules: {},
      customRules: ["adRules"],
      ruleDescription: `Choose a player to start; this player starts on the number 1. Each player may say between 1 and 3 numbers on their turn, counting upwards. For example, the first player could say 1, 2, and 3. It is then the next player's turn. Repeat the process until someone is forced to say the number 21.

When a player says the number 21, they must drink, and all other players must say 'cheers governor.' The governor may now make a new rule which will be played every round moving forward. Some examples of rules could be: the player that says X number must drink, or instead of saying the number 7, say my name. Play until it's too complicated.`,},
    {
      id: 8,
      name: "Booze or no Booze",
      iconName: "BoozeOrNoBooze",
      suggestedPlayers: "4+",
      drunkOMeter: 8,
      gameDuration: "10 mins",
      itemsRequired: ["Shot glasses"],
      explanationBlurb: "Try to guess which is alcohol and which is not by the reaction of your friends",
      rules: {
        rules: `Fill as many shot glasses as you like, half with water and half with clear liquor (like gin or vodka). Choose someone to start; this person picks a shot glass at random and drinks it. The person to their left has to guess whether they drank alcohol or water based on their reaction.
    
If the guesser is correct, the drinker must pick another shot glass and drink it. The next person to guess is then moved one more person to the left. If the guesser is wrong, they must now pick a glass to drink, and the person to their left guesses.`,
    },
      customRules: [],
      ruleDescription: null
    }
  ]
}

