import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from "./AppButton";

function BeerPong(props) {
  const [currentRule, setCurrentRule] = useState({});
  const [showRuleModal, setShowRuleModal] = useState(false);
  const [activeRule, setActiveRule] = useState('');

  useEffect(() => {
    setShowRuleModal(false);
  }, []);

  const gameName = props.route.params.game.name;
  const ruleDescObj = props.route.params.game.ruleDescription;
  const rules = props.route.params.game.customRules;
  const rulesDescription = Object.keys(ruleDescObj).map(key => (
    <option value={key} key={key}>{ruleDescObj[key]}</option>
  ));

  const activateShowRuleModal = (ruleNeedingDescription) => {
    const matchingWord = ruleNeedingDescription.replace(/\s/g, "");
    const theDescription = rulesDescription.filter(rule => {
      if (rule.props.value.toLowerCase() === matchingWord.toLowerCase()) {
        return rule;
      }
    });
    const newObj = { name: theDescription[0].props.value, desc: theDescription[0].props.children };
    if (currentRule.name === ruleNeedingDescription) {
      setShowRuleModal(!showRuleModal);
    } else {
      setCurrentRule(newObj);
      setShowRuleModal(true);
    }
    setActiveRule(ruleNeedingDescription);
  };

  return (
    <ScrollView style={styles.scrollViewCont}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.titleText}>{gameName}</Text>
            <AppButton onPress={() => props.navigation.navigate("Play Beer Pong")} title="Start Game" buttonColour="red" />
            <Text style={styles.xxtraSubText}>
              This game is suggested for {props.route.params.game.suggestedPlayers} players
            </Text>
            <Text style={styles.xxtraSubText}>
              DrunkOMeter reaches a solid {props.route.params.game.drunkOMeter}/10
            </Text>
            <Text style={styles.subTitleText}>You will need:</Text>
            <Text style={styles.subText}>
              {props.route.params.game.itemsRequired.join(', ')}
            </Text>
            <Text style={styles.subTitleText}>How to Play:</Text>
            <Text style={styles.subText}>
              {props.route.params.game.explanationBlurb}
            </Text>
            <View style={styles.rulesContainer}>
              {rules.map(rule => (
                <View key={rule} style={styles.ruleItem}>
                  <AppButton onPress={() => activateShowRuleModal(rule)} title={rule} />
                </View>
              ))}
              {activeRule && (
                <Card style={styles.activeRuleCard}>
                  <Card.Content>
                    <Text style={styles.activeRuleText}>Active Rule: {activeRule}</Text>
                    {showRuleModal && (
                      <Text style={styles.rulesText}>{currentRule.desc}</Text>
                    )}
                  </Card.Content>
                </Card>
              )}
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#f0f8ff', // Light blue background
  },
  scrollViewCont: {
    flex: 1,
  },
  card: {
    marginVertical: hp('2%'),
    padding: wp('5%'),
    borderRadius: 15, // More rounded corners
    backgroundColor: '#ffffff',
    elevation: 5,
  },
  titleText: {
    fontFamily: 'sans-serif',
    fontSize: wp('8%'),
    color: '#1e90ff', // Dodger blue
    fontWeight: '700',
    marginBottom: hp('2%'),
  },
  subTitleText: {
    fontFamily: 'sans-serif',
    fontSize: wp('5%'),
    color: '#104e8b', // Deeper blue
    fontWeight: '700', // Bolder font weight
    marginTop: hp('2%'),
  },
  xxtraSubText: {
    fontFamily: 'sans-serif',
    fontSize: wp('4.5%'),
    color: '#5f9ea0', // Cadet blue
    fontWeight: '500',
    marginTop: hp('1%'),
  },
  subText: {
    fontFamily: 'sans-serif',
    fontSize: wp('4%'),
    fontWeight: '400',
    color: '#20b2aa', // Light sea green
    marginTop: hp('1%'),
  },
  rulesText: {
    fontFamily: 'sans-serif',
    fontSize: wp('4%'),
    color: '#2d5287', // Cadet blue
    fontWeight: '500',
    marginTop: hp('1%'),
  },
  rulesContainer: {
    marginTop: hp('1%'),
  },
  ruleItem: {
    marginVertical: hp('0.5%'),
  },
  activeRuleCard: {
    marginTop: hp('1%'),
    backgroundColor: '#f0f0f0', // Light grey background
    borderRadius: 15,
    elevation: 3,
  },
  activeRuleText: {
    fontFamily: 'sans-serif',
    fontSize: wp('4%'),
    color: '#ff6103',
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    marginTop: hp('2%'),
    backgroundColor: '#ff4500', // Orange red
  },
});

export default BeerPong;