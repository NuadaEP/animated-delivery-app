import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 40
  },
  secondText: {
    fontSize: 20,
    color: Colors.app.blue
  }
})

export default styles
