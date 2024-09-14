import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function NoShowPunishment(props) {
  const [displayHRules, setDisplayHRules] = useState(false);
  const [moreThanThree, setMoreThanThree] = useState(false);

  useEffect(() => {
    setMoreThanThree(props.houseRules.length > 3);
  }, [props.houseRules]);

  useEffect(() => {
    let list = props.houseRules.filter(rule => rule.checked);
    setDisplayHRules(list.length > 0);
  }, [props.houseRules]);

  const navigateToHouseRules = () => {
    props.navigation.navigate("House rules");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Icon.Button onPress={() => props.navigation.goBack()} name="arrow-left" />
        </View>
        {displayHRules && (
          <ScrollView horizontal contentContainerStyle={styles.rulesContainer}>
            {props.houseRules.map(rule => (
              rule.checked && (
                <View key={rule.id} style={styles.houseRulesNav}>
                  <Icon.Button backgroundColor="#ff6103" onPress={navigateToHouseRules}>
                    {rule.name}
                  </Icon.Button>
                </View>
              )
            ))}
          </ScrollView>
        )}
      </View>
      {!displayHRules && (
        <View style={styles.footer}>
          <Icon.Button onPress={navigateToHouseRules}>
            House Rules
          </Icon.Button>
        </View>
      )}
    </View>
  );
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
  backButtonContainer: {
    marginRight: 10,
  },
  rulesContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  houseRulesNav: {
    padding: 3,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(NoShowPunishment);