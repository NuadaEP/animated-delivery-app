import { useCallback, useMemo } from 'react'
import { View, SafeAreaView, TouchableOpacity, Animated } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'

import type { RootStackParamList } from '../../constants/types/IRootStackParamList'
import { AnimatedImage, StyledText } from '../../components'
import { Colors } from '../../constants'

import styles from './styles'

export function Online({
  navigation
}: StackScreenProps<RootStackParamList, 'Online'>) {
  const buttonArounded = useMemo(() => new Animated.Value(0), [])

  const inputRange = useMemo(() => [0, 50, 100], [])
  const outputRange = useMemo(() => [1, 1.7, 2], [])

  const aroundedUp = useCallback(() => {
    Animated.timing(buttonArounded, {
      duration: 3000,
      toValue: 100,
      useNativeDriver: false
    }).start(() => {
      buttonArounded.addListener(({ value }) => {
        if (value >= 85) navigation.navigate('Offline')
      })
    })
  }, [buttonArounded, navigation])

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
        <AnimatedImage
          source={require('../../assets/lottie/weiting.json')}
          style={styles.lottieAnimation}
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
              {
                backgroundColor: buttonArounded.interpolate({
                  inputRange: [0, 100],
                  outputRange: [Colors.app.blue, '#ff0000'],
                  extrapolate: 'clamp'
                }),
                opacity: buttonArounded.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0.8, 0.5],
                  extrapolate: 'clamp'
                }),
                transform: [
                  {
                    scaleY: buttonArounded.interpolate({
                      inputRange,
                      outputRange,
                      extrapolate: 'clamp'
                    })
                  },
                  {
                    scaleX: buttonArounded.interpolate({
                      inputRange,
                      outputRange,
                      extrapolate: 'clamp'
                    })
                  }
                ]
              }
            ]}
          ></Animated.View>
          <StyledText style={styles.startButtonText}>FINISH</StyledText>
        </TouchableOpacity>
      </View>
      <StyledText
        style={styles.offlineText}
        onPress={() => navigation.navigate('Call')}
      >
        Voc?? est?? online
      </StyledText>
    </SafeAreaView>
  )
}
