import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'
import gamesList from '../data/gamesList'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Game from './Game'
import HouseRules from './HouseRules'

function Games({ navigation }) {

  const navigateToGame = (game) => {
    if (game.customRules.length > 0) {
      navigation.navigate(game.name, { game })
    } else {
      navigation.navigate("Selected game", { game })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.gamesGrid}>
        {gamesList.games.map(game => {
          return (
            <TouchableOpacity 
              style={styles.gameCard} 
              key={game.id} 
              onPress={() => navigateToGame(game)}
            >
              <Card style={styles.card}>
                <Image 
                  source={require(`../assets/gameicons/${game.iconName}.png`)} 
                  style={styles.gameIcon} 
                />
                <Text style={styles.gameName}>{game.name}</Text>
              </Card>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: wp("10%"),
    alignItems: 'center'
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  gameCard: {
    width: wp("40%"),
    margin: wp("2.5%")
  },
  card: {
    alignItems: 'center',
    padding: wp("2%"),
    borderRadius: wp("5%")
  },
  gameIcon: {
    width: wp("35%"),
    height: wp("35%"),
    resizeMode: 'contain'
  },
  gameName: {
    marginTop: hp("1%"),
    fontSize: wp("4%"),
    textAlign: 'center'
  }
});

export default Games