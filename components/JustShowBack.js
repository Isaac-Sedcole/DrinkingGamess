import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

function JustShowBack(props) {
  const [moreThanThree, setMoreThanThree] = useState(false);
  const [currentHouseRules, setCurrentHouseRules] = useState([]);

  useEffect(() => {
    setMoreThanThree(props.houseRules.length > 3);
    setCurrentHouseRules(props.houseRules);
  }, [props.houseRules]);

  if (currentHouseRules.length > 0) {
    return (
      <View style={moreThanThree ? styles.containerMultiMoreThanThree : styles.containerMulti}>
        <View style={styles.backButtonContainer}>
          <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
        </View>
        <View style={styles.cardHousing}>
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
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.containerSingle}>
        <View style={styles.backButtonContainer}>
          <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerSingle: {
    flex: 1,
    marginTop: '7%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMulti: {
    flex: 1,
    marginTop: '9%',
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerMultiMoreThanThree: {
    flex: 1,
    marginTop: '9%',
    paddingBottom: '7%',
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
  houseRulesNav: {
    padding: 3,
  },
  cardHousing: {
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center',
  },
  rulesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(JustShowBack);