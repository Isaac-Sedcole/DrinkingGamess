import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// Scaling function
const rem = (value) => screenWidth * (value / 375); // Assuming 375 is the base width (e.g., iPhone 6/7/8)

function JustShowBack(props) {
  const [moreThanThree, setMoreThanThree] = useState(false);
  const [currentHouseRules, setCurrentHouseRules] = useState([]);

  useEffect(() => {
    setMoreThanThree(props.houseRules.length > 3);
    setCurrentHouseRules(props.houseRules);
  }, [props.houseRules]);

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
        <ScrollView horizontal contentContainerStyle={styles.rulesContainer}>
          {currentHouseRules.map(rule => (
            rule.checked && (
              <View key={rule.id} style={styles.houseRulesNav}>
                <Icon.Button 
                  backgroundColor="#ff6103" 
                  color="#fff" 
                  onPress={() => props.navigation.navigate("House rules")}
                >
                  {rule.name}
                </Icon.Button>
              </View>
            )
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: rem(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  backButtonContainer: {
    marginRight: rem(10),
  },
  rulesContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  houseRulesNav: {
    padding: rem(3),
  },
});

const mapStateToProps = (globalState) => {
  return {
    houseRules: globalState.houseRules,
  };
};

export default connect(mapStateToProps)(JustShowBack);