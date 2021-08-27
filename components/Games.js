import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import gamesList from '../data/gamesList'

import Game from './Game'


function Games ({ navigation }) {

    // const renderGames = () => {
    //     for(let i in gamesList) {
    //         console.log(i)
    //         if(i.name == undefined) {
    //             console.log(i.name)
    //         }
    //     }
    // }

    const changeView = (game) => {
        // console.log(game.id, game.name)
        navigation.navigate("Selected game", {game})
    }

    return (
        <>
        <Text>Hi this is the Games</Text>
        {gamesList.games.map(game => {
            return (
                
                <div key={game.id}>
                <br></br>
                <TouchableHighlight onPress={() => changeView(game)}><Text>{game.name}</Text></TouchableHighlight>
                </div>
                
            )
        })}
        </>
    )
}

export default Games