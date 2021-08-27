import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Games from "../components/Games"
import Game from "../components/Game"

//IRRELEVANT
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const screens = {
    Games: {
        screen: Games
    },
    Game: {
        screen: Game
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)