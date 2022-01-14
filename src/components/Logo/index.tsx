import { View } from 'react-native'

import { StyledText } from '../StyledText'
import styles from './styles'

export function Logo(): React.ReactElement {
  return (
    <View style={styles.container}>
      <StyledText fontFamily="MADE-TOMMY-Bold" style={styles.mainText}>
        Delivery
      </StyledText>
      <StyledText style={styles.secondText}>App</StyledText>
    </View>
  )
}
