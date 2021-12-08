import React, { SetStateAction, useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import Colors from '../../constants/Colors';
import { getPixelSize } from '../../constants/Utils';
import type IReference from '../../constants/types/IReference';
import Directions from '../../components/Directions';
import StyledText from '../../components/StyledText';

import styles from './styles';

export default function Map()  {
  const [ location, setLocation ] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  });
  const [navigate, setNavigate] = useState(false);
  const [canNavigate, setCanNavigate] = useState(false);

  const mapView: IReference = useRef(null);
  const camera = useMemo(() => ({
    center: {
      latitude: location.latitude,
      longitude: location.longitude,
    },
    altitude: location.altitude,
    heading: location.heading,
    pitch: 1,
    zoom: 12
  }), [location]);
  const destination = useMemo(() => ({ longitude: -48.5621955, latitude: -22.3005805 }), []);

  const handleLocation = useCallback(async () => {
    await Location.requestPermissionsAsync();

    const { coords }: SetStateAction<any> = await Location.getLastKnownPositionAsync();

    setLocation({
      ...coords ,
      latitudeDelta: coords.latitude,
      longitudeDelta: coords.longitude,
    });
  }, [Location, setLocation]);

  const onLocationChange = useCallback(({ nativeEvent: { coordinate } }) => {
    if (navigate) {
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
  }, [navigate]);

  const onDirectionReady = useCallback(result => {
    mapView.current.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: getPixelSize(50),
        left: getPixelSize(50),
        top: getPixelSize(50),
        bottom: getPixelSize(50)
      }
    });

    setCanNavigate(true);
  }, [mapView]);

  const onPressRide = useCallback(() => {
    mapView.current.animateCamera({...camera, zoom: 18}, 1000);

    setNavigate(!navigate);
  }, [navigate, setNavigate, camera]);

  useEffect(() => {
    handleLocation();
  }, []);

  const buttonOffset = useMemo(() => new Animated.Value(0), []);
  const TouchableOpacityAnimated = useMemo(() => Animated.createAnimatedComponent(TouchableOpacity), []);

  useEffect(() => {
    if (canNavigate === true) {
      Animated.spring(buttonOffset, {
        toValue: 100,
        bounciness: 10,
        useNativeDriver: false
      }).start()
    }
  }, [canNavigate]);

  return (
    <SafeAreaView style={styles.container}>
      {canNavigate === true &&
        (
          <TouchableOpacityAnimated style={[
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
          ]} activeOpacity={0.8} onPress={onPressRide}>
            <StyledText  style={styles.startRideText}>
              {
                navigate
                ? 'Cheguei!'
                : 'Iniciar'
              }
            </StyledText>
          </TouchableOpacityAnimated>
        )
      }
      <MapView
        style={styles.mapView}
        ref={mapView}
        showsUserLocation
        showsMyLocationButton={false}
        showsCompass={false}
        loadingEnabled
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
  );
}
