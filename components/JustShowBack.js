import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

// Scaling function
const rem = (value) => screenWidth * (value / 375); // Assuming 375 is the base width (e.g., iPhone 6/7/8)

function JustShowBack(props) {
  const [moreThanThree, setMoreThanThree] = useState(false);
  const [currentHouseRules, setCurrentHouseRules] = useState([]);
  const [displayHRules, setDisplayHRules] = useState(false);

  useEffect(() => {
    setMoreThanThree(props.houseRules.length > 3);
    setCurrentHouseRules(props.houseRules);
    let list = props.houseRules.filter(rule => rule.checked);
    setDisplayHRules(list.length > 0);
  }, [props.houseRules]);

  const navigateToPunishmentWheel = () => {
    props.navigation.navigate("Punishment Wheel");
  };

  const navigateToHouseRules = () => {
    props.navigation.navigate("House rules");
  };

  return (
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
          <View style={styles.flex}>
            <Icon.Button 
              onPress={navigateToPunishmentWheel} 
              backgroundColor="#1E90FF" 
              color="#fff"
              style={styles.fullWithWithButton}
            >
              Random Punishment
            </Icon.Button>
          </View>
        )}
      </View>
      {displayHRules && 
        <View style={styles.footer}>
          <Icon.Button 
            onPress={navigateToPunishmentWheel} 
            backgroundColor="#1E90FF" 
            color="#fff"
            style={styles.fullWidthButton}
          >
            Random Punishment
          </Icon.Button>
        </View>
      }
    </View>
);
}

const styles = StyleSheet.create({
safeArea: {
flex: 1,
paddingTop: 30, // Add buffer to the top
},
container: {
paddingTop: rem(40),
},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
},
backButtonContainer: {
marginRight: rem(10),
marginLeft: rem(20),
},
rulesContainer: {
flexDirection: 'row',
flexWrap: 'nowrap',
},
houseRulesNav: {
padding: rem(3),
},
footer: {
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'column',
paddingTop: rem(5)
},
flex: {
flex: 1,
alignItems: 'center',
},
fullWidthButton: {
width: screenWidth - rem(40), // Adjusting for padding/margin
justifyContent: 'center',
},
fullWithWithButton: {
width: screenWidth - rem(110),
justifyContent: 'center',
}
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(JustShowBack);