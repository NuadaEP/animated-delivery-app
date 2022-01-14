import { View, Image, SafeAreaView } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'

import { StyledText, Button } from '../../components'
import type { RootStackParamList } from '../../constants/types/IRootStackParamList'

import styles from './styles'
import AnimatedLottieView from 'lottie-react-native'

export function Root({
  navigation
}: StackScreenProps<RootStackParamList, 'Root'>) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <AnimatedLottieView
          source={require('../../assets/lottie/scooter.json')}
          autoPlay
          loop
          cacheStrategy="weak"
          style={styles.driver}
        />
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="center"
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <StyledText style={styles.titleText}>
          Ganhe dinheiro com Toyougo
        </StyledText>
        <Button onPress={() => false} text="Cadastre-se" blue />

        <Button text="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  )
}
