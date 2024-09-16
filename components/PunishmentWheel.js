import React from 'react';
import { StyleSheet, View } from 'react-native';
import SpinningWheel from './SpinningWheel';
import punishmentWheel from '../data/punishmentWheel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function PunishmentWheel(props) {
  const punishWheel = punishmentWheel.punishmentWheel.map((item, index) => ({
    ...item,
    color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`, // Random color for each segment
  }));

  const onFinish = (value) => {
    props.navigation.navigate('Showing a house rule', { rule: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.tickerContainer}>
        <View style={styles.ticker} />
      </View>
      <View style={styles.margin}>
        <SpinningWheel rewards={punishWheel} onFinish={onFinish} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tickerContainer: {
    position: 'absolute',
    top: '8%',
    left: '50%',
    zIndex: 1,
  },
  ticker: {
    width: 0,
    height: 0,
    borderLeftWidth: wp('2%'),
    borderRightWidth: wp('2%'),
    borderBottomWidth: wp('4%'),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    transform: [{ rotate: '180deg' }], // Rotate the ticker by 45 degrees
  },
  margin: {
    marginTop: hp('10%'),
  },
});

export default PunishmentWheel;