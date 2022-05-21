import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native'
import { Card } from 'react-native-paper'
import gamesList from '../data/gamesList'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Game from './Game'
import HouseRules from './HouseRules'


function Games({ navigation }) {

  const navigateToGame = (game) => {
    // console.log(game.name)
    if(game.customRules.length > 0) {
      navigation.navigate(game.name, {game})
    } else {
      navigation.navigate("Selected game", { game })}
    }

    const nav2WHeel = () => {
      navigation.navigate("Punishment Wheel")
    }
    
    return (
      <View style={[styles.container, {
        flexDirection: "column",
        alignItems: 'center'
      }]}>
      {/* <View><Button onPress={() => nav2WHeel()} title={"Wheel"} /> </View> */}
      <Card style={[styles.gamesDisplay]}>
        {gamesList.games.map(game => {
          return (
            <View style={[styles.fixedSingularGame]} key={game.id}>
              <Button onPress={() => navigateToGame(game)} title={game.name} />
            </View>
          )
        })}
      </Card>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: wp("10%"),
    alignItems: 'center'
  },
  gamesDisplay: {
    paddingLeft: wp('8%'),
    paddingTop: hp('2%'),
    borderRadius: wp("5%"),
    width: wp("90%"),
    height: hp("6.5%") * gamesList.games.length
  },
  singleGameDisplay: {
    paddingTop: hp("2.5%"),
    paddingLeft: wp("90%")/3,
    width: wp("60%")
  },
  fixedSingularGame:{
    padding: 5,
    width: 300
  },
  fixedGamesDisplay: {
    borderRadius: 20,
    paddingTop: 20,
    width: 300,
    height: 58 * gamesList.games.length
  },

});

export default Games