import { useEffect, useMemo } from 'react'
import { SafeAreaView, Animated } from 'react-native'

import styles from './styles'

interface IProps {
  attepted: boolean
  navigate: () => undefined | Animated.EndCallback
}

export function InvokeSplash({ attepted, navigate }: IProps) {
  const coverCircle = useMemo(() => new Animated.Value(0), [])
  const logoOpacity = useMemo(() => new Animated.Value(0), [])
  const logo = useMemo(() => require('../../assets/images/logo_black.png'), [])

  const animatedStyle = useMemo(
    () => ({
      view: {
        transform: [
          {
            scaleX: coverCircle.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 20],
              extrapolate: 'clamp'
            })
          },
          {
            scaleY: coverCircle.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 20],
              extrapolate: 'clamp'
            })
          }
        ]
      },
      image: {
        opacity: logoOpacity.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        })
      }
    }),
    [coverCircle, logoOpacity]
  )

  useEffect(() => {
    if (attepted === true) {
      Animated.sequence([
        Animated.timing(coverCircle, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false
        }),

        Animated.delay(100),

        Animated.timing(logoOpacity, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false
        }),

        Animated.delay(1000),

        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        })
      ]).start(navigate())
    }
  }, [attepted, navigate])

  return (
    <SafeAreaView>
      <Animated.View style={[styles.viewAnimated, animatedStyle.view]} />

      <Animated.Image
        style={[styles.imageAnimated, animatedStyle.image]}
        source={logo}
        resizeMode="contain"
      />
    </SafeAreaView>
  )
}
