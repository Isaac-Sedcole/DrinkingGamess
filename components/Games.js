import React, {useState} from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native'
import { Card } from 'react-native-paper'
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

    // const changeView = (game) => {
    //     // console.log(game.id, game.name)
    //     navigation.navigate("Selected game", {game})
    // }

    // const navigatorPlz = () => {
    //     setLetsGoNavigator(!letsGoNavigator)
    // }

    let contWidth = 300
    let contHeight = 58

    return (
        <View style={[styles.container, {
            flexDirection: "column",
            alignItems: 'center'
          }]}>
            <Card style={{width: contWidth, height: contHeight*gamesList.games.length, borderRadius: 20}}>
        {gamesList.games.map(game => {
            return (
                
                <View style={{paddingLeft:contWidth/3, width:200}}key={game.id}>

                <br></br>
                <Button onPress={() => navigation.navigate("Selected game", {game})} title={game.name}/>
                </View>
                
                )
              })}
              </Card>
            {/* <button onClick={() => navigatorPlz()}>navigate</button> */}
        
        {/* {letsGoNavigator && navigation.navigate("House rules")} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default Games