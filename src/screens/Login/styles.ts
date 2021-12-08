import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 50,
  },
  formContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  }
});

export default styles;
