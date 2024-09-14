import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, Easing, TouchableOpacity, Alert } from 'react-native';
import Svg, { G, Path, Text as SvgText, Line } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SpinningWheel = React.memo(({ rewards, onFinish }) => {
  const [spinResult, setSpinResult] = useState({ winner: null, lastIndex: null, selectedIndex: null });
  const [accumulatedRotation, setAccumulatedRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Keep accumulated rotation within 0-360 range
    if (accumulatedRotation >= 360) {
      setAccumulatedRotation(accumulatedRotation % 360);
    }
  }, [accumulatedRotation]);

  const getTextColor = useCallback((bgColor) => {
    const color = bgColor.substring(1); // Remove the '#'
    const rgb = parseInt(color, 16); // Convert hex to integer
    const r = (rgb >> 16) & 0xff; // Extract red
    const g = (rgb >> 8) & 0xff; // Extract green
    const b = (rgb >> 0) & 0xff; // Extract blue

    // Calculate brightness (standard formula)
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return brightness > 186 ? '#000' : '#fff'; // Choose black or white based on brightness
  }, []);

  const segmentData = useMemo(() => {
    return rewards.map((reward, index) => {
      const angle = (360 / rewards.length) * index;
      const largeArcFlag = 360 / rewards.length > 180 ? 1 : 0;
      const pathData = `
        M 50 50
        L ${50 + 50 * Math.cos((angle * Math.PI) / 180)} ${50 + 50 * Math.sin((angle * Math.PI) / 180)}
        A 50 50 0 ${largeArcFlag} 1 ${50 + 50 * Math.cos(((angle + 360 / rewards.length) * Math.PI) / 180)} ${50 + 50 * Math.sin(((angle + 360 / rewards.length) * Math.PI) / 180)}
        Z
      `;
      const textAngle = angle + (360 / rewards.length) / 2;
      const textX = 50 + 30 * Math.cos((textAngle * Math.PI) / 180);
      const textY = 50 + 30 * Math.sin((textAngle * Math.PI) / 180);
      const textColor = getTextColor(reward.color);

      return {
        pathData,
        textAngle,
        textX,
        textY,
        textColor,
      };
    });
  }, [rewards, getTextColor]);

  const spin = useCallback(() => {
    if (isSpinning || rewards.length === 0) {
      Alert.alert('Error', 'No rewards available to spin.');
      return;
    }

    setIsSpinning(true);
    spinValue.setValue(accumulatedRotation); // Reset spin value to accumulated rotation

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rewards.length);
    } while (randomIndex === spinResult.lastIndex && rewards.length > 1);

    const anglePerSegment = 360 / rewards.length;
    const spinTo = accumulatedRotation + (randomIndex * anglePerSegment + 360 * 5); // Spin 5 times

    Animated.timing(spinValue, {
      toValue: spinTo,
      duration: 5000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      const finalRotation = spinTo % 360;
      const selectedIndex = Math.floor((finalRotation + 360) % 360 / anglePerSegment) % rewards.length; // Calculate the selected index
      setSpinResult({
        winner: rewards[selectedIndex],
        lastIndex: randomIndex,
        selectedIndex,
      });
      onFinish(rewards[selectedIndex]);
      setAccumulatedRotation(finalRotation); // Update accumulated rotation to the final position
      setIsSpinning(false);
    });
  }, [isSpinning, accumulatedRotation, rewards, spinResult.lastIndex]);

  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: spinInterpolate }] }}>
        <Svg width={wp('80%')} height={wp('80%')} viewBox="0 0 100 100">
          <G>
            {segmentData.map((segment, index) => {
              const isSelected = index === spinResult.selectedIndex; // Check if this segment is selected
              return (
                <G key={index}>
                  <Path
                    d={segment.pathData}
                    fill={rewards[index].color}
                    stroke={isSelected ? 'yellow' : 'none'}
                    strokeWidth={isSelected ? 2 : 0}
                  />
                  <SvgText
                    x={segment.textX}
                    y={segment.textY}
                    fill={segment.textColor}
                    fontSize="3"
                    fontWeight="bold"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    transform={`rotate(${segment.textAngle}, ${segment.textX}, ${segment.textY})`}
                  >
                    {rewards[index].name}
                  </SvgText>
                </G>
              );
            })}
          </G>
        </Svg>
      </Animated.View>
      <TouchableOpacity
        onPress={spin}
        style={styles.spinButton}
        accessibilityLabel="Spin the wheel"
        accessibilityRole="button"
        disabled={isSpinning} // Disable the button while spinning
      >
        <Text style={styles.spinButtonText}>Spin</Text>
      </TouchableOpacity>
      {spinResult.winner && (
        <View style={styles.winnerContainer}>
          <Text style={styles.winnerText}>Selected Reward: {spinResult.winner.name}</Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinButton: {
    marginTop: hp('2%'),
    padding: hp('1%'),
    backgroundColor: '#ff6103',
    borderRadius: 10,
  },
  spinButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerContainer: {
    marginTop: hp('2%'),
  },
  winnerText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
});

export default SpinningWheel;
