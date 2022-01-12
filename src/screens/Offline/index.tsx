import { useCallback, useMemo } from 'react'
import { View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'
import LottieView from 'lottie-react-native'

import type { RootStackParamList } from '../../constants/types/IRootStackParamList'
import StyledText from '../../components/StyledText'
import Colors from '../../constants/Colors'

import styles from './styles'

export default function Offline({
  navigation
}: StackScreenProps<RootStackParamList, 'Offline'>) {
  const buttonArounded = useMemo(() => new Animated.Value(0), [])
  const lottieAnimation = useMemo(
    () => require('../../assets/lottie/scooter-home.json'),
    []
  )

  const animationMemo = useMemo(
    () => ({
      transform: [
        {
          scaleY: buttonArounded.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [1, 1.7, 2],
            extrapolate: 'clamp'
          })
        },
        {
          scaleX: buttonArounded.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [1, 1.7, 2],
            extrapolate: 'clamp'
          })
        }
      ],

      backgroundColor: buttonArounded.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.app.blue, '#00d684'],
        extrapolate: 'clamp'
      }),

      opacity: buttonArounded.interpolate({
        inputRange: [0, 100],
        outputRange: [0.8, 0.5],
        extrapolate: 'clamp'
      })
    }),
    [Colors]
  )

  const aroundedUp = useCallback(() => {
    Animated.timing(buttonArounded, {
      duration: 3000,
      toValue: 100,
      useNativeDriver: false
    }).start(() => {
      buttonArounded.addListener(({ value }) => {
        if (value >= 85) navigation.navigate('Online')
      })
    })
  }, [navigation])

  const aroundedDown = useCallback(() => {
    Animated.timing(buttonArounded, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false
    }).start()
  }, [buttonArounded])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          style={styles.lottieAnimation}
          source={lottieAnimation}
          autoPlay
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.startButton}
          onPressIn={aroundedUp}
          onPressOut={aroundedDown}
        >
          <Animated.View
            style={[
              styles.startButton,
              {
                top: 10
              },
              animationMemo
            ]}
          ></Animated.View>
          <StyledText style={styles.startButtonText}>INICIAR</StyledText>
        </TouchableOpacity>
      </View>
      <StyledText style={styles.offlineText}>Você está offline</StyledText>
    </SafeAreaView>
  )
}
