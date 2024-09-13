import { connect } from "react-redux"
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

function NavHouseRules(props) {

  const [displayHRules, setDisplayHRules] = useState(false)
  const [moreThanThree, setMoreThanThree] = useState(false)

  useEffect(() => {
    setMoreThanThree(props.houseRules.length > 3)
  }, [props.houseRules])

  useEffect(() => {
    let list = props.houseRules.filter(rule => rule.checked)
    setDisplayHRules(list.length > 0)
  }, [props.houseRules])

  if (displayHRules) {
    return (
      <View style={styles.container}>
        <View style={[styles.header, moreThanThree && styles.headerMoreThanThree]}>
          <View style={styles.backButton}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={styles.cardHousing}>
            <View style={styles.rulesContainer}>
              {props.houseRules.map(rule => (
                rule.checked && (
                  <View key={rule.id} style={styles.houseRulesNav}>
                    <Icon.Button backgroundColor="#ff6103" onPress={() => props.navigation.navigate("House rules")}>
                      {rule.name}
                    </Icon.Button>
                  </View>
                )
              ))}
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Icon.Button onPress={() => props.navigation.navigate("Punishment Wheel")}>
            Random Punishment
          </Icon.Button>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
          </View>
          <View style={styles.houseRulesMain}>
            <Icon.Button onPress={() => props.navigation.navigate("House rules")}>
              Click here to add some house rules!
            </Icon.Button>
          </View>
        </View>
        <View style={styles.footer}>
          <Icon.Button onPress={() => props.navigation.navigate("Punishment Wheel")}>
            Random Punishment
          </Icon.Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerMoreThanThree: {
    flexDirection: 'column',
  },
  backButton: {
    flex: 1,
  },
  cardHousing: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  rulesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  houseRulesNav: {
    padding: 3,
  },
  houseRulesMain: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules
  }
}

export default connect(mapStateToProps)(NavHouseRules)