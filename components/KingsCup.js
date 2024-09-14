import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppButton from "./AppButton";

function KingsCup(props) {
  const [showRules, setShowRules] = useState(false);
  const [showRuleModal, setShowRuleModal] = useState(false);
  const [currentRule, setCurrentRule] = useState({});
  const [showKingsCupCustom, setShowKingsCupCustom] = useState(false);
  const [oldShowKingsCupCustom, setOldShowKingsCupCustom] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);

  const gameName = props.route.params.game.name;
  const rulesObj = props.route.params.game.rules;

  const activateShowRules = () => {
    setShowRules(!showRules);
  };

  useEffect(() => {
    setShowRules(false);
    setShowKingsCupCustom(false);
    setOldShowKingsCupCustom(false);
    setShowRuleModal(false);
  }, []);

  const ruleDescObj = props.route.params.game.ruleDescription;

  const rules = Object.keys(rulesObj).map(key => (
    <option value={key} key={key}>{rulesObj[key]}</option>
  ));
  const ace = rules.splice(9, 1);
  rules.unshift(ace[0]);

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
    setCurrentRule(newObj);
    setShowRuleModal(true);
  };

  const activateShowKingsCupRules = () => {
    setShowKingsCupCustom(true);
  };

  const activateOldShowKingsCupRules = () => {
    setOldShowKingsCupCustom(true);
  };

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    if (buttonWidth === 0 || width < buttonWidth) {
      setButtonWidth(width);
    }
  };

  return (
    <ScrollView style={styles.scrollViewCont}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.titleText}>{gameName}</Text>
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
            <Button mode="contained" onPress={activateShowRules} style={styles.button}>
              {showRules ? 'Hide Rules' : 'Show Rules'}
            </Button>
            {showRules && (
              <View style={styles.rulesContainer}>
                {rules.map(rule => (
                  <View key={rule.props.children} style={styles.ruleItem}>
                    <View style={[
                      styles.ruleNumberContainer,
                      rule.props.value === 'JOKER' && styles.jokerNumberContainer
                    ]}>
                      <Text style={[
                        styles.ruleNumber,
                        rule.props.value === 'JOKER' && styles.jokerNumber
                      ]}>{rule.props.value}</Text>
                    </View>
                    <View style={[styles.ruleDescriptionContainer, { width: buttonWidth }]}>
                      <AppButton onPress={() => activateShowRuleModal(rule.props.children)} title={rule.props.children} onLayout={onLayout} />
                    </View>
                  </View>
                ))}
                <Button mode="contained" onPress={activateShowKingsCupRules} style={styles.button}>
                  Custom Rules
                </Button>
                {showKingsCupCustom && props.navigation.navigate("Show kings cup custom rules")}
              </View>
            )}
          </Card.Content>
        </Card>
      </View>
      {showRuleModal && props.navigation.navigate("Showing a rule", { rule: currentRule })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    backgroundColor: '#f5f5f5',
  },
  scrollViewCont: {
    flex: 1,
  },
  card: {
    marginVertical: hp('2%'),
    padding: wp('3%'), // Reduced padding
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  titleText: {
    fontFamily: 'sans-serif',
    fontSize: wp('7%'), // Reduced font size
    color: '#2F4F4F',
    fontWeight: '600',
    marginBottom: hp('1%'), // Reduced margin
  },
  subTitleText: {
    fontFamily: 'sans-serif',
    fontSize: wp('4.5%'), // Reduced font size
    color: '#2F4F4F',
    fontWeight: '600',
    marginTop: hp('1%'), // Reduced margin
  },
  xxtraSubText: {
    fontFamily: 'sans-serif',
    fontSize: wp('4%'), // Reduced font size
    color: '#2d5287',
    fontWeight: '600',
    marginTop: hp('0.5%'), // Reduced margin
  },
  subText: {
    fontFamily: 'sans-serif-light',
    fontSize: wp('3.5%'), // Reduced font size
    fontWeight: '500',
    color: '#008B8B',
    marginTop: hp('0.5%'), // Reduced margin
  },
  rulesContainer: {
    marginTop: hp('1%'), // Reduced margin
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('0.5%'), // Reduced margin
    padding: wp('1%'), // Reduced padding
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  ruleNumberContainer: {
    backgroundColor: '#ff6103',
    borderRadius: wp('5%'), // Make it circular
    width: wp('8%'),
    height: wp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('2%'),
  },
  jokerNumberContainer: {
    width: wp('12%'), // Larger width for "JOKER"
  },
  ruleNumber: {
    fontFamily: 'sans-serif',
    fontSize: wp('4%'), // Reduced font size
    color: '#ffffff',
    fontWeight: '600',
  },
  jokerNumber: {
    fontSize: wp('3%'), // Smaller font size for "JOKER"
  },
  ruleDescriptionContainer: {
    flex: 1,
  },
  button: {
    marginTop: hp('1%'), // Reduced margin
    backgroundColor: '#ff6103',
  },
});

export default KingsCup;