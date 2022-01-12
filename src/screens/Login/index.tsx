import React, {useRef, useMemo} from 'react';
import {View, Image, SafeAreaView, TextInput} from 'react-native';

import type IReference from '../../constants/types/IReference';
import Button from '../../components/Button';

import styles from './styles';
import type {StackScreenProps} from '@react-navigation/stack';
import type {RootStackParamList} from '../../constants/types/IRootStackParamList';

export default function Login({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
  const passwordField: IReference = useRef(null);

  const logo = useMemo(() => require('../../assets/images/logo.png'), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} resizeMode="center" style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordField.current.focus()}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          ref={passwordField}
          style={styles.input}
        />
        <Button
          text="Entrar"
          onPress={() => navigation.navigate('Offline')}
          blue
        />
      </View>
    </SafeAreaView>
  );
}
