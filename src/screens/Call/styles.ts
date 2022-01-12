import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainAnimation: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center'
    // backgroundColor: '#fff',
  },
  callPhoneMainAnimation: {
    width: Layout.window.width * 1.2,
    height: Layout.window.height / 1.5
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
