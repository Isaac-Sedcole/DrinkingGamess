import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

function CheckBox({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: hp("0.8%"),
    backgroundColor: "#2196F3",
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