import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lottieContainer: {
    paddingTop: 90
  },
  lottieAnimation: {
    width: 400,
    height: 400,
    backgroundColor: '#FFFFFF'
  },
  buttonContainer: {
    flex: 2,
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
    color: 'red',
    fontSize: 15,
    marginTop: 50
  }
})

export default styles
