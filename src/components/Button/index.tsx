import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import { StyledText } from '../StyledText'

import styles from './styles'

interface IButton<T = void> {
  text: string
  blue?: boolean
  onPress(data: T): void | any
}

export function Button({
  text,
  onPress,
  blue = false
}: IButton<GestureResponderEvent>) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonShape, blue ? styles.blue : styles.white]}
    >
      <StyledText
        style={blue ? styles.textForBlueButton : styles.textForWhiteButton}
      >
        {text}
      </StyledText>
    </TouchableOpacity>
  )
}
