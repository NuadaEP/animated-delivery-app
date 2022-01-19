import {
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo
} from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

import { getPixelSize, Colors } from '../../constants'
import { Directions, StyledText } from '../../components'

import styles from './styles'

export function Map() {
  const [location, setLocation] = useState({
    latitude: -22.2602992,
    longitude: -48.5517889,
    accuracy: 1,
    altitude: 10,
    altitudeAccuracy: 5,
    heading: 1,
    speed: 0
  })

  const [navigate, setNavigate] = useState(false)
  const [canNavigate, setCanNavigate] = useState(false)

  const mapView = useRef<any>(null)

  const destination = useMemo(
    () => ({ longitude: -48.5621955, latitude: -22.3005805 }),
    []
  )

  const handleLocation = useCallback(async () => {
    await Location.requestForegroundPermissionsAsync()

    const { coords }: SetStateAction<any> =
      await Location.getLastKnownPositionAsync()

    setLocation(coords)
  }, [Location, setLocation])

  useEffect(() => {
    handleLocation()
  }, [])

  const onLocationChange = useCallback(
    ({ nativeEvent: { coordinate } }) => {
      const accuracyDifference = coordinate.accuracy - location.accuracy

      if (navigate && accuracyDifference > 5) {
        setLocation({
          ...location,
          accuracy: coordinate.accuracy,
          altitude: coordinate.altitude,
          heading: coordinate.heading,
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          speed: coordinate.speed
        })
      }
    },
    [navigate]
  )

  const onDirectionReady = useCallback(
    result => {
      mapView.current.fitToCoordinates([...result.coordinates], {
        edgePadding: {
          right: getPixelSize(50),
          left: getPixelSize(50),
          top: getPixelSize(50),
          bottom: getPixelSize(50)
        },
        animated: true
      })

      setCanNavigate(true)
    },
    [mapView]
  )

  const onPressRide = useCallback(
    (zoom: number, heading?: number) => {
      mapView.current.animateCamera({
        center: {
          latitude: location.latitude,
          longitude: location.longitude
        },
        pitch: 1,
        heading: heading || location.heading,
        altitude: location.altitude,
        zoom
      })

      setNavigate(!navigate)
    },
    [mapView, navigate]
  )

  const buttonOffset = useMemo(() => new Animated.Value(0), [])
  const TouchableOpacityAnimated = useMemo(
    () => Animated.createAnimatedComponent(TouchableOpacity),
    []
  )

  useEffect(() => {
    if (canNavigate) {
      Animated.spring(buttonOffset, {
        toValue: 100,
        bounciness: 10,
        useNativeDriver: false
      }).start()
    }
  }, [canNavigate])

  return (
    <SafeAreaView style={styles.container}>
      {canNavigate && (
        <TouchableOpacityAnimated
          style={[
            styles.startRideButton,
            {
              transform: [
                {
                  scaleX: buttonOffset.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 1],
                    extrapolate: 'clamp'
                  })
                },
                {
                  scaleY: buttonOffset.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 1],
                    extrapolate: 'clamp'
                  })
                }
              ]
            }
          ]}
          activeOpacity={0.8}
          onPress={!navigate ? () => onPressRide(18) : () => onPressRide(15, 0)}
        >
          <StyledText style={styles.startRideText}>
            {navigate ? 'Cheguei!' : 'Iniciar'}
          </StyledText>
        </TouchableOpacityAnimated>
      )}
      <MapView
        style={styles.mapView}
        ref={mapView}
        showsUserLocation
        showsMyLocationButton={false}
        showsCompass={false}
        loadingEnabled={false}
        loadingIndicatorColor={Colors.app.blue}
        onUserLocationChange={onLocationChange}
      >
        <Directions
          destination={destination}
          origin={location}
          onReady={onDirectionReady}
          resetOnChange={canNavigate}
        />
        <Marker coordinate={destination} anchor={{ x: 0, y: 0.1 }}>
          <View style={styles.locationBox}>
            <Text style={styles.locationText}>P90 Cowork</Text>
          </View>
        </Marker>
        <Marker coordinate={destination} anchor={{ x: 0, y: 0.1 }}>
          <View style={styles.locationBox}>
            <View style={styles.locationTimeBox}>
              <Text style={styles.locationTimeText}>8</Text>
              <Text style={styles.locationTimeTextSmall}>MIN</Text>
            </View>
            <Text style={styles.locationText}>P90 Cowork</Text>
          </View>
        </Marker>
        <Marker coordinate={destination} anchor={{ x: 0, y: 0.5 }}>
          <View style={styles.destinationPoint} />
        </Marker>
      </MapView>
    </SafeAreaView>
  )
}
