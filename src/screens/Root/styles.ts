import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flex: 2,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  driver: {},
  image: {
    width: '70%'
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
