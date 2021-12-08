import { StyleSheet, Platform } from 'react-native';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapView: {
    width: Layout.window.width,
    height: Layout.window.height + 30,
  },
  locationBox: {
    backgroundColor: '#fff',
    elevation: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        marginTop: 20,
      },
      android: {
        marginTop: 10,
        marginLeft: 10,
      }
    })
  },
  locationText: {
    marginHorizontal: 10,
    marginVertical: 8,
    fontSize: 14,
    color: '#333',
  },
  locationTimeBox: {
    backgroundColor: Colors.app.blue,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  locationTimeText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  locationTimeTextSmall: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  destinationPoint: {
    borderWidth: 5,
    borderColor: Colors.app.blue,
    borderRadius: 200,
    backgroundColor: 'white',
    width: 15,
    height: 15
  },
  startRideButton: {
    position: 'absolute',
    zIndex: 999,
    top: Layout.window.height - 130,
    left: Layout.window.width / 2.8,

    width: 100,
    height: 100,
    borderRadius: 100,

    backgroundColor: Colors.app.blue,
    elevation: 3,

    justifyContent: "center",
    alignItems: "center"
  },
  startRideText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
