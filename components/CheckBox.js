import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

function CheckBox({ label, status, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Checkbox status={status} />
        <Text style={{ fontSize: wp("3%"),fontWeight: 'bold' }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CheckBox;