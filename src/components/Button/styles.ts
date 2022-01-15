import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'

const styles = StyleSheet.create({
  buttonShape: {
    width: Layout.window.width / 1.5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.5
  },
  blue: {
    backgroundColor: Colors.app.blue,
    borderColor: Colors.app.blue,
    marginBottom: 10
  },
  white: {
    backgroundColor: 'white',
    borderColor: 'black',
    marginBottom: 10
  },
  textForBlueButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15.5
  },
  textForWhiteButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15.5
  }
})

export default styles
