import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Scaling function
const rem = (value) => screenWidth * (value / 375); // Assuming 375 is the base width (e.g., iPhone 6/7/8)

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
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButtonContainer}>
            <Icon.Button 
              onPress={() => props.navigation.goBack()} 
              name="arrow-left" 
              backgroundColor="#1E90FF" 
              color="#fff" 
            />
          </View>
          {displayHRules && (
            <ScrollView horizontal contentContainerStyle={styles.rulesContainer}>
              {props.houseRules.map(rule => (
                rule.checked && (
                  <View key={rule.id} style={styles.houseRulesNav}>
                    <Icon.Button 
                      backgroundColor="#ff6103" 
                      color="#fff" 
                      onPress={navigateToHouseRules}
                    >
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
            <Icon.Button 
              onPress={navigateToHouseRules} 
              backgroundColor="#1E90FF" 
              color="#fff"
            >
              House Rules
            </Icon.Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 20, // Add buffer to the top
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: rem(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rem(10),
  },
  backButtonContainer: {
    marginRight: rem(10),
  },
  rulesContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  houseRulesNav: {
    padding: rem(3),
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rem(20),
  },
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(NoShowPunishment);