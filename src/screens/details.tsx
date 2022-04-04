import React, { useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  Easing,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import Header from '../components/header';
import ModalView from '../components/modalView';

import ImageY from '../images/Yosemite.jpg';

const { width, height } = Dimensions.get('window');

export default function Details() {
  const imageOpacity = useSharedValue(0);
  const modalPosition = useSharedValue(height + 100);

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        imageOpacity.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const modalStyle = useAnimatedStyle(() => {
    return {
      height: modalPosition.value,
    };
  });

  useEffect(() => {
    imageOpacity.value = withTiming(
      1,
      {
        duration: 500,
        easing: Easing.ease,
      },
      () => {
        modalPosition.value = withTiming(height - 400, {
          duration: 1500,
          easing: Easing.bounce,
        });
      }
    );
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar hidden />
      <Animated.View style={[imageStyle, modalStyle]}>
        <ImageBackground
          source={ImageY}
          style={{
            width: '100%',
            height: height - 400,
          }}
        >
          <Header />
        </ImageBackground>
      </Animated.View>

      <ModalView />
    </GestureHandlerRootView>
  );
}
