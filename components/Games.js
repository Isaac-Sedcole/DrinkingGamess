import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import gamesList from '../data/gamesList';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Game from './Game';
import HouseRules from './HouseRules';

function Games({ navigation }) {

  const navigateToGame = (game) => {
    if (game.customRules.length > 0) {
      navigation.navigate(game.name, { game });
    } else {
      navigation.navigate("Selected game", { game });
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'KingsCup':
        return require('../assets/GameIcons/KingsCup.png');
      case 'SmashCup':
        return require('../assets/GameIcons/SmashCup.png');
      case 'TaxiDriver':
        return require('../assets/GameIcons/TaxiDriver.png');
      case 'Fingers':
        return require('../assets/GameIcons/Fingers.png');
      case 'Horses':
        return require('../assets/GameIcons/Horses.png');
      case 'BeerPong':
        return require('../assets/GameIcons/BeerPong.png');
      case 'CheersGov':
        return require('../assets/GameIcons/CheersGov.png');
      case 'BoozeOrNoBooze':
        return require('../assets/GameIcons/BoozeOrNoBooze.png');
      // Add more cases as needed
      default:
        return require('../assets/knob.png'); // Fallback icon
    }
  };

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
                  source={getIcon(game.iconName)} 
                  style={styles.gameIcon} 
                />
                <Text style={styles.gameName}>{game.name}</Text>
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
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

export default Games;