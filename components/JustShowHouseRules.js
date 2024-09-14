import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { height: screenHeight } = Dimensions.get('window');

function JustShowHouseRules(props) {
  const [displayHRules, setDisplayHRules] = useState(false);
  const [currentHouseRules, setCurrentHouseRules] = useState([]);
  const [moreThanThree, setMoreThanThree] = useState(false);

  useEffect(() => {
    setMoreThanThree(props.houseRules.length > 3);
    setCurrentHouseRules(props.houseRules);
  }, [props.houseRules]);

  useEffect(() => {
    let list = props.houseRules.filter(rule => rule.checked);
    setDisplayHRules(list.length > 0);
  }, [props.houseRules]);

  if (displayHRules) {
    return (
          <View>
            <View style={styles.rulesContainer}>
              {currentHouseRules.map(rule => (
                <View key={rule.id} style={styles.houseRulesNav}>
                  {rule.checked && (
                    <Icon.Button backgroundColor="#ff6103" onPress={() => props.navigation.navigate("House rules")}>
                      {rule.name}
                    </Icon.Button>
                  )}
                </View>
              ))}
            </View>
            <View style={styles.cardContainer}>
              <Card style={styles.card} onPress={() => props.navigation.navigate("Punishment Wheel")} contentStyle={styles.cardContent}>
                <Card.Content>
                  <Text style={styles.cardText}>Random Punishment</Text>
                </Card.Content>
              </Card>
            </View>
          </View>
    );
  } else {
    return (
          <View style={styles.cardContainer}>
            <Card style={styles.card} onPress={() => props.navigation.navigate("House rules")} contentStyle={styles.cardContent}>
              <Card.Content>
                <Text style={styles.cardText}>Click here to add some house rules!</Text>
              </Card.Content>
            </Card>
            <Card style={styles.card} onPress={() => props.navigation.navigate("Punishment Wheel")} contentStyle={styles.cardContent}>
              <Card.Content>
                <Text style={styles.cardText}>Random Punishment</Text>
              </Card.Content>
            </Card>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSingle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    paddingTop: 20, // Add buffer to the top
  },
  containerMulti: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
    paddingTop: 20, // Add buffer to the top
  },
  containerMultiMoreThanThree: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
    paddingBottom: '7%',
    paddingTop: 20, // Add buffer to the top
  },
  rulesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%'
  },
  houseRulesNav: {
    padding: 3,
  },
  cardHousing: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: '10%'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    marginTop: '10%'
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    height: screenHeight * 0.1, // 10% of the screen height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF', // Poppy blue background color
  },
  cardContent: {
    padding: 10, // Ensure consistent padding around the card content
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF', // White text color for readability
  },
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(JustShowHouseRules);