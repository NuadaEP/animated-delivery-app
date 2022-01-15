import { View, SafeAreaView } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'

import { StyledText, Button, AnimatedImage, Logo } from '../../components'
import type { RootStackParamList } from '../../constants/types/IRootStackParamList'

import styles from './styles'

export function Root({
  navigation
}: StackScreenProps<RootStackParamList, 'Root'>) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <AnimatedImage
          source={require('../../assets/lottie/scooter.json')}
          style={styles.driver}
        />

        <Logo />
      </View>
      <View style={styles.buttonContainer}>
        <StyledText style={styles.titleText}>
          Ganhe dinheiro com DeliveryApp
        </StyledText>
        <Button onPress={() => false} text="Cadastre-se" blue />

        <Button text="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  )
}
