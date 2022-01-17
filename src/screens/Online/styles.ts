import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottieContainer: {
    paddingTop: 90,
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottieAnimation: {
    width: 350,
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  startButton: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: Colors.app.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    top: -49
  },
  offlineText: {
    flex: 2,
    color: 'green',
    fontSize: 15,
    marginTop: 50
  }
})

export default styles
