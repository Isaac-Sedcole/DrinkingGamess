import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome5'

function CheckBox({ title, onPress, size }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Icon  size={size} name={title}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: hp("0.8%"),
    backgroundColor: "red",
    borderRadius: wp(".5%"),
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("1%"),
    height: hp("4.4%")
  },
  
});

export default CheckBox;