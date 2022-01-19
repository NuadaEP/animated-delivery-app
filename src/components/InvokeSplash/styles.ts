import { StyleSheet } from 'react-native'
import { Colors, Layout } from '../../constants'

const styles = StyleSheet.create({
  viewAnimated: {
    borderRadius: 100,
    backgroundColor: Colors.app.blue,
    width: 100,
    height: 100,
    position: 'absolute',
    left: Layout.window.width / 2 - 50,
    top: Layout.window.height / 2 + 110,
    zIndex: 998
  },
  imageAnimated: {
    maxWidth: 200,
    maxHeight: 200,
    position: 'absolute',
    zIndex: 999,
    left: Layout.window.width / 2 - 100,
    top: Layout.window.height / 2 - 50
  }
})

export default styles
