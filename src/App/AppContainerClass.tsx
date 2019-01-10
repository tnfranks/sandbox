// import * as React from 'react'

// import MapContainer from '../Map/MapContainer';
// import { Main } from '../styles/Main'
// import ItemsContainer from './ItemsContainer';

// export interface IState {
//     loading: boolean
//     locations: ILocations[]
// }

// export interface IProps {
//     key: string
// }

// export interface ILocations {
//     location_id: string
//     location_name: string
// }

// class AppContainer extends React.Component<{}, IState> {
//     public state = {
//         loading: false,
//         locations: [] as ILocations[]
//     }

//     public componentDidMount() {
//         this.setState({ loading: true }, () => {
//             fetch('http://localhost:3001/pgsearch/bend,%20or&radius=20')
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data.data[2].location_id)
//                     this.setState({ loading: false, locations: data.data })
//                 })
//                 .catch(err => console.log(err))
//         })
//     }

//     public render() {        
//         return (
//             <Main>
//                 <MapContainer />
//                 {this.state.loading ? <div /> : <div style={{height: '50vh', overflow: 'auto'}}><ul>{this.state.locations.map(i => <ItemsContainer key={i.location_id} location_name={i.location_name} />)}</ul></div>}
//             </Main>
//         )
//     }
// }

// export default AppContainer