import AnimatedLottieView from 'lottie-react-native'
import type { StyleProp, ViewStyle } from 'react-native'

type AnimatedImageProp = {
  source: string | NodeRequire | any
  style?: StyleProp<ViewStyle>
  loop?: boolean
}

export function AnimatedImage({
  source,
  style,
  loop = true
}: AnimatedImageProp): React.ReactElement {
  return (
    <AnimatedLottieView
      source={source}
      autoPlay
      loop={loop}
      cacheStrategy="weak"
      style={style}
    />
  )
}
