import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Scaling function
const rem = (value) => screenWidth * (value / 375); // Assuming 375 is the base width (e.g., iPhone 6/7/8)

function NoShowPunishment(props) {
  const [displayHRules, setDisplayHRules] = useState(false);
  const [moreThanThree, setMoreThanThree] = useState(false);

  useEffect(() => {
    console.log('House Rules:', props.houseRules);
    setMoreThanThree(props.houseRules.length > 3);
  }, [props.houseRules]);

  useEffect(() => {
    let list = props.houseRules.filter(rule => rule.checked);
    console.log('Checked Rules:', list);
    setDisplayHRules(list.length > 0);
  }, [props.houseRules]);

  const navigateToHouseRules = () => {
    props.navigation.navigate("House rules");
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Icon.Button 
            onPress={() => props.navigation.goBack()} 
            name="arrow-left" 
            backgroundColor="#1E90FF" 
            color="#fff" 
          />
        </View>
        {displayHRules ? (
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
        ) : (
          <View style={styles.footer}>
            <Icon.Button 
              onPress={navigateToHouseRules} 
              backgroundColor="#1E90FF" 
              color="#fff"
            >
              Click here to add some house rules!
            </Icon.Button>
          </View>
        )}
      </View>
    </View>
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
    paddingVertical: rem(40),
  },
  backButtonContainer: {
    marginRight: rem(10),
    marginLeft: rem(10),
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
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Ensure the footer takes up the remaining space
  },
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(NoShowPunishment);