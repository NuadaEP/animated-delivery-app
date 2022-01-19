import MapViewDirections from 'react-native-maps-directions'

import { Colors } from '../../constants'

interface IGeolocation {
  latitude: number
  longitude: number
}

interface DirectionsProps<T> {
  destination: IGeolocation
  origin: IGeolocation
  onReady(result: T): void
  resetOnChange: boolean
}

export function Directions<T>({
  destination,
  origin,
  onReady,
  resetOnChange
}: DirectionsProps<T>) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyAHHPzM_FnCR4WQdalyPoOIxAYhQEKlPFY"
      strokeWidth={3}
      strokeColor={Colors.app.blue}
      optimizeWaypoints
      precision="high"
      resetOnChange={resetOnChange}
    />
  )
}
