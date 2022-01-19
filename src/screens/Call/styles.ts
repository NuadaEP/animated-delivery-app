import { StyleSheet } from 'react-native'
import { Layout } from '../../constants'

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainAnimation: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  callPhoneMainAnimation: {
    width: Layout.window.width
  },
  callPhone: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  callPhoneAnimation: {
    width: 120,
    height: 120
  }
})

export default styles
