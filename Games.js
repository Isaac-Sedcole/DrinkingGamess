import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import gamesList from './gamesList'


function Games () {

    const renderGames = () => {
        for(let i in gamesList) {
            console.log(i)
            if(i.name == undefined) {
                console.log(i.name)
            }
        }
    }

    return (
        <>
        <Text>Hi this is the Games</Text>
        {gamesList.map(game => {
            return game.name
        })}
        </>
    )
}

export default Games