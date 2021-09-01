import React, {useState} from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native'
import gamesList from '../data/gamesList'

import Game from './Game'
import HouseRules from './HouseRules'


function Games ({ navigation }) {

    // const renderGames = () => {
    //     for(let i in gamesList) {
    //         console.log(i)
    //         if(i.name == undefined) {
    //             console.log(i.name)
    //         }
    //     }
    // }

    // const [letsGoNavigator, setLetsGoNavigator] = useState(false)

    const changeView = (game) => {
        // console.log(game.id, game.name)
        navigation.navigate("Selected game", {game})
    }

    // const navigatorPlz = () => {
    //     setLetsGoNavigator(!letsGoNavigator)
    // }

    return (
        <>
        <Text>Hi this is the Games</Text>
        {gamesList.games.map(game => {
            return (
                
                <div key={game.id}>
                <br></br>
                <Button onPress={() => navigation.navigate("Selected game", {game})} title={game.name}/>
                </div>
                
                )
            })}
            {/* <button onClick={() => navigatorPlz()}>navigate</button> */}
        
        {/* {letsGoNavigator && navigation.navigate("House rules")} */}
        </>
    )
}

export default Games