import React, { useMemo } from 'react';
import {View, Image, SafeAreaView} from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';

import StyledText from '../../components/StyledText';
import Button from '../../components/Button';
import type { RootStackParamList } from '../../constants/types/IRootStackParamList';

import styles from './styles';

export default function Root({
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) {
  const logo = useMemo(() => require('../../assets/images/logo.png'), []);
  const driver = useMemo(() => require('../../assets/gifAnimations/driver.gif'), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} resizeMode="center" style={styles.image} />
        <Image source={driver} resizeMode="center" style={styles.driver} />
      </View>
      <View style={styles.buttonContainer}>
        <StyledText style={styles.titleText}>
          Ganhe dinheiro com Toyougo
        </StyledText>
        <Button onPress={() => false} text="Cadastre-se" blue />

        <Button text="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};
