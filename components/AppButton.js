import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

function CheckBox({ title, onPress, buttonColour }) {
  let theButtonColour = buttonColour || '#2196F3'
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: theButtonColour, elevation: hp("0.8%"),borderRadius: wp("1%"),paddingVertical: hp("1%"),paddingHorizontal: wp("1%")}}>
        <Text style={[styles.appButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: hp("0.8%"),
    borderRadius: wp("1%"),
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("1%")
  },
  appButtonText: {
    fontSize: hp("2%"),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default CheckBox;