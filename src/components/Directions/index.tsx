import MapViewDirections from 'react-native-maps-directions'

import Colors from '../../constants/Colors'

interface IGeolocation {
  latitude: number
  longitude: number
}

interface IProps {
  destination: IGeolocation
  origin: IGeolocation
  onReady(result: any): void
  resetOnChange: boolean
}

export default function Directions({
  destination,
  origin,
  onReady,
  resetOnChange
}: IProps) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyCD_811GmrjMKLCC2_kqKKB_AfgZpfbk_8"
      strokeWidth={3}
      strokeColor={Colors.app.blue}
      optimizeWaypoints
      precision="high"
      resetOnChange={resetOnChange}
    />
  )
}