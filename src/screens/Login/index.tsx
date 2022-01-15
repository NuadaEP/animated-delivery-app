import { useRef } from 'react'
import { View, SafeAreaView, TextInput } from 'react-native'

import type IReference from '../../constants/types/IReference'
import { Button, Logo } from '../../components'

import styles from './styles'
import type { StackScreenProps } from '@react-navigation/stack'
import type { RootStackParamList } from '../../constants/types/IRootStackParamList'

export function Login({
  navigation
}: StackScreenProps<RootStackParamList, 'Login'>) {
  const passwordField: IReference = useRef(null)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Logo />
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
          secureTextEntry
          ref={passwordField}
          style={styles.input}
          onSubmitEditing={() => navigation.navigate('Offline')}
        />
        <Button
          text="Entrar"
          onPress={() => navigation.navigate('Offline')}
          blue
        />
      </View>
    </SafeAreaView>
  )
}
