import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import houseRules from '../data/houseRules'


function HouseRules ({ navigation }) {

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
        {houseRules.houseRules.map(rule => {
            return (
                
                <div key={rule.id}>
                <br></br>
                <TouchableHighlight onPress={() => changeView(game)}><Text>{rule.name}</Text></TouchableHighlight>
                </div>
                
            )
        })}
        </>
    )
}

export default HouseRules