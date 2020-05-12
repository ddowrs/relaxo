import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {getRandomInt} from '../common/utils';

const Grid = ({overlap, value, changed}) => {
  const containerWidth = useRef(new Animated.Value(0)).current;
  const internalWidth = useRef(new Animated.Value(0)).current;

  const scaleIn = (animValue, toValue, delay = 0, duration = 240) => {
    Animated.timing(animValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const delay = getRandomInt(300, 10);
    Animated.parallel([
      scaleIn(containerWidth, 1, delay),
      scaleIn(internalWidth, 1, delay),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (changed) {
      internalWidth.setValue(0);
      scaleIn(internalWidth, 1, (changed - 1) * 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changed]);

  return (
    <View style={[styles.container, {left: overlap * -1}]}>
      <Animated.View
        style={[
          styles.borderContainer,
          value >= 0 && styles.border,
          {transform: [{scale: containerWidth}]},
        ]}
      />
      <View style={value >= 0 && styles.internal}>
        <Animated.View
          style={[
            value > 0 && styles.withValue,
            {transform: [{scale: internalWidth}]},
          ]}>
          {value > 1 && <Text style={styles.text}>{value - 1}</Text>}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    overflow: 'hidden',
  },
  borderContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  internal: {
    position: 'absolute',
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withValue: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Grid;