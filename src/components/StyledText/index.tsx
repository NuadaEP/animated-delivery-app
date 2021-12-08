import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font'

interface ITextProps extends TextProps {
  fontWeight?: 'bold' | 'normal';
  children?: string;
}

export default function StyledText(props: ITextProps) {

  let [fontsLoaded] = useFonts({
    'MADE-TOMMY-Black_PERSONAL-USE': require('../../assets/fonts/MADE-TOMMY-Regular_PERSONAL-USE.otf'),
  });

  if (props.fontWeight === 'bold') {
    [fontsLoaded] = useFonts({
      'MADE-TOMMY-Black_PERSONAL-USE': require('../../assets/fonts/MADE-TOMMY-Bold_PERSONAL-USE.otf'),
    });
  }

  if (!fontsLoaded) return <AppLoading />

  return <Text {...props} style={[props.style, { fontFamily: 'MADE-TOMMY-Black_PERSONAL-USE' }]} />;
}
