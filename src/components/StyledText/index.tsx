import { Text, TextProps } from 'react-native'

import type { Fonts } from '../../constants/Fonts'

interface ITextProps extends TextProps {
  fontFamily?: Fonts
}

export function StyledText(props: ITextProps) {
  const fontFamily = props.fontFamily || 'MADE-TOMMY-Regular'

  return <Text {...props} style={[props.style, { fontFamily }]} />
}
