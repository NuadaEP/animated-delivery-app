import React from 'react';
import { TouchableOpacity } from 'react-native';

import StyledText from '../StyledText';

import styles from './styles';

interface IButton {
  text: string;
  blue?: boolean;
  onPress(data: Object<T> | void): void | any;
}

export default function Button({ text, onPress, blue = false }: IButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.buttonShape, blue ? styles.blue : styles.white ]}>
    <StyledText style={blue ? styles.textForBlueButton : styles.textForWhiteButton}>{text}</StyledText>
  </TouchableOpacity>
  )
}
