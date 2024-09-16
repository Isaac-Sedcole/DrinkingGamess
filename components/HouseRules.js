import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { setHouseRules } from '../actions';
import houseRulesList from '../data/houseRules';
import CheckBox from './CheckBox';
import { connect } from 'react-redux';
import { Card } from 'react-native-paper';

function HouseRules(props) {
  const [currentRules, setCurrentRules] = useState([]);
  const [fullHouseRules, setFullHouseRules] = useState([]);
  const [showHouseRuleModal, setShowHouseRuleModal] = useState(false);
  const [currentHouseRule, setCurrentHouseRule] = useState({});

  useEffect(() => {
    setCurrentRules(props.houseRules);
    setFullHouseRules(houseRulesList.houseRules.map(rule => rule));
    if (showHouseRuleModal) {
      setShowHouseRuleModal(!showHouseRuleModal);
    }
  }, []);

  useEffect(() => {
    props.dispatch(setHouseRules(currentRules));
  }, [currentRules]);

  const handleCheckBox = (index, addedRule) => {
    if (showHouseRuleModal) {
      setShowHouseRuleModal(!showHouseRuleModal);
    }
    const rules = [...fullHouseRules];
    rules[index].checked = !rules[index].checked;
    setFullHouseRules(rules);

    setCurrentRules(currentRulers => {
      let newArr = currentRulers.filter(rule => rule.id !== addedRule.id);
      return newArr.length === currentRules.length ? [...newArr, addedRule] : [...newArr];
    });
  };

  const activateShowHouseRuleModal = houseRule => {
    let ruleDescription = fullHouseRules.filter(rule => houseRule.id === rule.id);
    setCurrentHouseRule(ruleDescription[0]);
    setShowHouseRuleModal(true);
  };

  return (
    <>
      <ScrollView style={styles.scrollViewCont}>
        <View style={styles.container}>
          <Text style={styles.titleText}>House Rules</Text>
          <View style={styles.rulesContainer}>
            {fullHouseRules.map(rule => (
              <Card key={rule.id} style={styles.cardContainer}>
                <View style={styles.cardTitle}>
                  <Card.Title
                    style={styles.cardTitleContent}
                    title={
                      <View style={styles.centeredContent}>
                        <CheckBox
                          label={rule.name}
                          status={rule.checked ? 'checked' : 'unchecked'}
                          onPress={() => handleCheckBox(rule.id - 1, rule)}
                        />
                      </View>
                    }
                  />
                </View>
                <View style={styles.cardContent}>
                  <Card.Content>
                    <Button onPress={() => activateShowHouseRuleModal(rule)} title="Rule Description" />
                  </Card.Content>
                </View>
              </Card>
            ))}
          </View>
        </View>
      </ScrollView>

      {showHouseRuleModal && props.navigation.navigate('Showing a house rule', { rule: currentHouseRule })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  scrollViewCont: {
    flex: 1,
  },
  rulesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardContainer: {
    flexBasis: '45%',
    margin: '2%',
    padding: '2%',
  },
  cardTitle: {
    alignItems: 'center',
  },
  cardTitleContent: {
    alignSelf: 'center',
  },
  cardContent: {
    justifyContent: 'center',
  },
  centeredContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    color: '#2F4F4F',
    fontWeight: '600',
    marginBottom: 20,
  },
});

const mapStateToProps = globalState => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(HouseRules);