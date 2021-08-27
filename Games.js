import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import gamesList from './gamesList'



function Games () {

    // const renderGames = () => {
    //     for(let i in gamesList) {
    //         console.log(i)
    //         if(i.name == undefined) {
    //             console.log(i.name)
    //         }
    //     }
    // }

    const changeView = (gameId) => {

    }

    return (
        <>
        <Text>Hi this is the Games</Text>
        {gamesList.games.map(game => {
            return (
                <>
                <div key={game.id}>
                <br></br>
                <TouchableHighlight onPress={() => changeView(game.id)}><Text>{game.name}</Text></TouchableHighlight>
                </div>
                </>
            )
        })}
        </>
    )
}

export default Games