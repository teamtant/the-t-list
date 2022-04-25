//apiKey: 'AIzaSyAJdQ - ID6_clf4WGWk5F8bt3CnNMlHCXRs'\
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import MapComponent from '../components/MapComponent.jsx';
import Marker from '../components/Marker.jsx';
// when we have other components built out, remember to import them here

const MapContainer = () => {
	const render = (status) => {
		return <h1>{status}</h1>;
	};

	const [markers, setMarkers] = React.useState([])
	
	React.useEffect(() => {
		fetch('/api')
		  .then(resp => resp.json())
		  .then(data => {
			  setMarkers(data)
			//   console.log(data)
		  })
	}, [])

	const markersArray = markers.map(marker => {
	return (
	<Marker 
		key = {marker._id}
		clinicName = {marker.clinic}
		position = {{
			lat: Number(marker.latitude), 
			lng: Number(marker.longitude),
		}}
		/>
		)
	})
	// loop here and create array of markers
	console.log(markersArray)
	return (
		<>
		<Wrapper apiKey={'AIzaSyAJdQ-ID6_clf4WGWk5F8bt3CnNMlHCXRs'} render={render}>
			<MapComponent>
				{/* <Marker
					// reviewText = {data}
					position={{
						lat: 40.69743317190694,
						lng: -73.93473004589146,
					}} */}
				{markersArray}
				{/* // /> */}
			</MapComponent>
		</Wrapper>
		</>
	);
};

export default MapContainer;
