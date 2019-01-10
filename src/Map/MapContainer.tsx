import { GoogleApiWrapper, Map } from 'google-maps-react'
import * as React from 'react'
import { ILocation } from 'src/App/AppContainer';

interface IProps {
    google: any
    locationData: ILocation[]
}


const MapContainer = (props: IProps) => {
    return (
        <Map
            google={props.google}
            containerStyle={{ height: '35vh', width: '100vw' }}
            zoom={9}
            zoomControl={false}
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={false}
            initialCenter={{ lat: 38.98, lng: -77.65 }}
            centerAroundCurrentLocation={true} />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAUHE9Nfip-d0aSKDCSZnuuEauicRkZkBY',
    libraries: ['geometry']
})(MapContainer)