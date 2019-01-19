import * as React from 'react'
import MapContainer from '../Map/MapContainer';
import { Main } from '../styles/Main'
import Location from './Location'
import SearchInput from './SearchInput'

export interface ILocation {
    location_id: string
    location_name: string
    street_address: string
    extended_address: string
    locality: string
    region: string
    postal_code: string
    phone: string
    website: string
    hours_of_operation: string
    latitude: number
    longitude: number
    is_primary: string
    in_planning: string
    open_to_public: string
    location_type: string
    location_type_display: string
    country_iso_code: string
    year_opened: string
    year_closed: string
    status: string
    status_display: string
    forwarding_id: string
    create_date: string
    update_date: string
    brewery_id: string
    distance: number
    brewery: IBrewery
    country: ICountry
}

export interface IBrewery {
    brewery_id: string
    brewery_name: string
    name_short_display: string
    description: string
    website: string
    established: string
    is_organic: string
    images: IImage
    status: string
    status_display: string
    create_date: string
    update_date: string
    is_mass_owned: string
    brand_classification: string
}

export interface IImage {
    image_icon: string
    image_medium: string
    image_large: string
    image_medium_square: string
    image_large_square: string
}

export interface ICountry {
    iso_code: string
    name: string
    display_name: string
    iso_three: string
    number_code: number
    create_date: string
}

const AppContainer = () => {
    const [search, setSearch] = React.useState('20132')
    const [loading, setLoading] = React.useState(false)
    const [locations, setLocations] = React.useState([] as ILocation[])
    const [searchCoords, setSearchCoords] = React.useState({} as { lat: number, lng: number })

    const onSearchSubmit = (searchString: string) => {
        setSearch(searchString)
    }

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:3001/pgsearch/${search}?radius=10`)
            const json = await response.json()
            setSearchCoords(json.result.searchCoords)
            setLocations(json.result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLocations([])
            setLoading(false)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [search])

    let items: any
    loading ? items = (<p>Loading...</p>) : items = (<ul>{locations.map(i => <Location key={i.location_id} locationData={i} />)}</ul>)

    return (
        <Main>
            <div style={{ padding: '.5rem', height: '100%', backgroundColor: '#242f3e' }}>
                <SearchInput onSearchSubmit={onSearchSubmit} />
            </div>
            <MapContainer searchCoords={searchCoords} locationData={locations} />
            <div style={{ height: '100%', backgroundColor: '#242f3e', color: 'white', overflow: 'auto' }}>
                {items}
                <div style={{ backgroundColor: 'steelblue', color: 'white' }}>Footer</div>
            </div>
        </Main>
    )

}


export default AppContainer