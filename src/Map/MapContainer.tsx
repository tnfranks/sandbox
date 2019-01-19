import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import * as React from 'react'
import { ILocation } from 'src/App/AppContainer';

interface IProps {
    google: any
    searchCoords: { lat: number; lng: number }
    locationData: ILocation[]
}


const MapContainer = (props: IProps) => {
    const [bounds, setBounds] = React.useState(new props.google.maps.LatLngBounds({ lat: 38.98, lng: -77.65 }))
    const styles = [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
            elementType: 'labels.text.fill',
            featureType: 'administrative.locality',
            stylers: [{ color: '#d59563' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'poi',
            stylers: [{ color: '#d59563' }]
        },
        {
            elementType: 'geometry',
            featureType: 'poi.park',
            stylers: [{ color: '#263c3f' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'poi.park',
            stylers: [{ color: '#6b9a76' }]
        },
        {
            elementType: 'geometry',
            featureType: 'road',
            stylers: [{ color: '#38414e' }]
        },
        {
            elementType: 'geometry.stroke',
            featureType: 'road',
            stylers: [{ color: '#212a37' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'road',
            stylers: [{ color: '#9ca5b3' }]
        },
        {
            elementType: 'geometry',
            featureType: 'road.highway',
            stylers: [{ color: '#746855' }]
        },
        {
            elementType: 'geometry.stroke',
            featureType: 'road.highway',
            stylers: [{ color: '#1f2835' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'road.highway',
            stylers: [{ color: '#f3d19c' }]
        },
        {
            elementType: 'geometry',
            featureType: 'transit',
            stylers: [{ color: '#2f3948' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'transit.station',
            stylers: [{ color: '#d59563' }]
        },
        {
            elementType: 'geometry',
            featureType: 'water',
            stylers: [{ color: '#17263c' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'water',
            stylers: [{ color: '#515c6d' }]
        },
        {
            elementType: 'labels.text.stroke',
            featureType: 'water',
            stylers: [{ color: '#17263c' }]
        }
    ]

    const newIcon = {
        fillColor: '#39ff14',
        fillOpacity: 1,
        path: google.maps.SymbolPath.CIRCLE, // 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
        scale: 6,
        strokeWeight: 0
    }

    const mouser = (something: any) => {
        console.log('location', something.position)
    }

    React.useEffect(() => {
        const newBounds = new props.google.maps.LatLngBounds()
        for (const location of props.locationData) {
            newBounds.extend(new props.google.maps.LatLng(location.latitude, location.longitude))
        }
        setBounds(newBounds)
    }, [props.locationData])

    const markers = props.locationData.map(location => {
        return (
            <Marker
                key={location.location_id}
                position={{ lat: location.latitude, lng: location.longitude }}
                icon={newIcon}
                onClick={mouser} />
        )
    })

    return (
        <Map
            google={props.google}
            containerStyle={{ height: '35vh', width: '100vw' }}
            styles={styles}
            zoom={9}
            bounds={bounds}
            zoomControl={false}
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={false}
            initialCenter={{ lat: 38.98, lng: -77.65 }}
            center={props.searchCoords}
            centerAroundCurrentLocation={true}>
            {markers}
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAUHE9Nfip-d0aSKDCSZnuuEauicRkZkBY',
    libraries: ['geometry']
})(MapContainer)