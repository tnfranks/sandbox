import * as React from 'react'
import { ILocation } from './AppContainer'

interface IProps {
    key: string
    locationData: ILocation
}

const ItemsContainer = (props: IProps) => {
    return (
        <li>{props.locationData.brewery.brewery_name}</li>
    )
}

export default ItemsContainer