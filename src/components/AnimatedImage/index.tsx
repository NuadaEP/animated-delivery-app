import AnimatedLottieView from 'lottie-react-native'
import type { StyleProp, ViewStyle } from 'react-native'

type AnimatedImageProp = {
  source: string | NodeRequire | any
  style?: StyleProp<ViewStyle>
}

export function AnimatedImage({
  source,
  style
}: AnimatedImageProp): React.ReactElement {
  return (
    <AnimatedLottieView
      source={source}
      autoPlay
      loop
      cacheStrategy="weak"
      style={style}
    />
  )
}
