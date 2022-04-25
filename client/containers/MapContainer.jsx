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
	const [coords, setCoords] = React.useState();
	
	React.useEffect(() => {
		if (!markers.length) {
			fetch('/api')
			  .then(resp => resp.json())
			  .then(data => {
				  setMarkers(data)
			  })
		}
	}, [])

	const changeCoords = (lat, lng) => {
		setCoords([lat, lng])
	}

	const markersArray = markers.map(marker => {
	return (
	<Marker 
		changeCoords= {changeCoords}
		key = {marker._id}
		id = {marker._id}
		clinicName = {marker.clinic}
		position = {{
			lat: Number(marker.latitude), 
			lng: Number(marker.longitude),
		}}
		/>
		)
	})
	return (
		<>
		<Wrapper apiKey={'AIzaSyAJdQ-ID6_clf4WGWk5F8bt3CnNMlHCXRs'} render={render}>
			<MapComponent
				changeCoords = {changeCoords}
				coords = {coords}
			>
				{markersArray}
			</MapComponent>
		</Wrapper>
		</>
	);
};

export default MapContainer;
