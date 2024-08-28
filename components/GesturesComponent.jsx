import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, PinchGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import { State } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const GesturesComponent = () => {
  const scale = React.useRef(new Animated.Value(1)).current;
  const translateX = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(0)).current;

  const handleTap = (event) => {
    console.log('Tapped!', event.nativeEvent);
  };

  const handlePan = Animated.event(
    [{ nativeEvent: { translationX: translateX, translationY: translateY } }],
    { useNativeDriver: false }
  );

  const handlePinch = Animated.event(
    [{ nativeEvent: { scale } }],
    { useNativeDriver: false }
  );

  const onPanStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true
      }).start();
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TapGestureHandler onHandlerStateChange={handleTap}>
        <PanGestureHandler
          onGestureEvent={handlePan}
          onHandlerStateChange={onPanStateChange}
        >
          <PinchGestureHandler onGestureEvent={handlePinch}>
            <Animated.View
              style={[
                styles.box,
                {
                  transform: [
                    { translateX },
                    { translateY },
                    { scale }
                  ]
                }
              ]}
            >
              <Text style={styles.text}>Gesture Box</Text>
            </Animated.View>
          </PinchGestureHandler>
        </PanGestureHandler>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
});

export default GesturesComponent;
