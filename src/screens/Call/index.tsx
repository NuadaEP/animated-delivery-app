import React, { useCallback, useEffect, useMemo } from 'react';
import { Image, SafeAreaView, Animated, Vibration, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';
import type { StackScreenProps } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';

import type { RootStackParamList } from '../../constants/types/IRootStackParamList';

import styles from './styles';

export default function Call({
  navigation,
}: StackScreenProps<RootStackParamList, 'Call'>) {
  const callPhone = useMemo(() => require('../../assets/lottie/call_phone.json'), []);
  const callPhoneMain = useMemo(() => require('../../assets/gifAnimations/call_phone_main.gif'), []);
  const callMusic = useMemo(() => require('../../assets/sounds/notification_sound.mp3'), []);

  const inputRange = useMemo(() => [-350, 0], []);
  const outputRange = useMemo(() => [2, 1], []);

  const sound = useMemo(() => new Audio.Sound(), [Audio]);

  const LottieViewAnimated = useMemo(() => Animated.createAnimatedComponent(LottieView), [LottieView, Animated]);

  const translateY = useMemo(() => new Animated.Value(0), []);

  const animatedEvent = useMemo(() => Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  ), [translateY, Animated]);

  const stopSound = useCallback(async () => await sound.unloadAsync(), [sound]);

  const onHandlerStateChange = useCallback(async (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      if (translationY <= -450) {
        stopSound();

        Vibration.cancel();

        navigation.navigate('Map');
      } else {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true
        }).start();
      }
    }
  }, [translateY, Vibration, stopSound]);

  const audio = useCallback(async () => {
    await Audio.requestPermissionsAsync();

    await sound.loadAsync(callMusic);
    await sound.playAsync();
  }, [sound, Audio, callMusic]);

  useEffect(() => {
    audio();

    Vibration.vibrate([1000, 1000], true);
  }, [audio, Vibration]);

  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.mainAnimation}>
        <Image style={styles.callPhoneMainAnimation} source={callPhoneMain} resizeMode="contain" />
      </View>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={[
          styles.callPhone,
          {
            translateY: translateY.interpolate({
              inputRange: [-350, 0],
              outputRange: [-150, 0],
              extrapolate: 'clamp',
            })
          }
        ]}>
          <LottieViewAnimated style={[
            styles.callPhoneAnimation,
            {
              transform: [
                {
                  scaleY: translateY.interpolate({
                    inputRange,
                    outputRange,
                    extrapolate: 'clamp',
                  })
                },
                {
                  scaleX: translateY.interpolate({
                    inputRange,
                    outputRange,
                    extrapolate: 'clamp',
                  })
                }
              ]
            }
          ]} source={callPhone} autoPlay />
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  );
}
