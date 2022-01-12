import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 50,
    top: 110,
    zIndex: 999
  },
  driver: {
    height: 400,
    top: 40
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    marginBottom: 30,
    fontSize: 15
  }
})

export default styles
