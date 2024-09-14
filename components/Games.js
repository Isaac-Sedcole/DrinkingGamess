import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import gamesList from '../data/gamesList';

const { width: screenWidth } = Dimensions.get('window');

// Scaling function
const rem = (value) => screenWidth * (value / 375); // Assuming 375 is the base width (e.g., iPhone 6/7/8)

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingVertical: rem(20),
    alignItems: 'center'
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  gameCard: {
    width: rem(150),
    margin: rem(10)
  },
  card: {
    alignItems: 'center',
    padding: rem(10),
    borderRadius: rem(10)
  },
  gameIcon: {
    width: rem(130),
    height: rem(130),
    resizeMode: 'contain'
  },
  gameName: {
    marginTop: rem(10),
    fontSize: rem(16),
    textAlign: 'center'
  }
});

export default Games;