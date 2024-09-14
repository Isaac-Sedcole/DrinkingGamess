import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SpinningWheel from './SpinningWheel';
import punishmentWheel from '../data/punishmentWheel';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

function PunishmentWheel(props) {
  const punishWheel = punishmentWheel.punishmentWheel.map((item, index) => ({
    ...item,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color for each segment
  }));

  const onFinish = (value) => {
    props.navigation.navigate('Showing a house rule', { rule: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SpinningWheel rewards={punishWheel} onFinish={onFinish} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PunishmentWheel;