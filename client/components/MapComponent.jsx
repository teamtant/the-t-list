import React, {useState} from 'react';
// import GoogleMapReact from 'google-map-react';
import { InfoWindow } from 'google-maps-react';
// import { Link, Navigate } from 'react-router-dom';
import CreateReview from './CreateReview.jsx';


const MapComponent = ({ children }) => {
	const ref = React.useRef(null);
	const [map, setMap] = React.useState();
	const [coords, setCoords] = React.useState();

	const infoWindow = new google.maps.InfoWindow({
		content: 'To leave a review at this location, click the "Post a review" button below!'
	})

	const [review, setReview] = React.useState(false)

	React.useEffect(() => {
		if (ref.current && !map) {
			setMap(
				new window.google.maps.Map(ref.current, {
					center: { lat: 40.7338, lng: -74.0022 },
					zoom: 12,
				})
			);
		}

		if (map) {
			map.addListener('click', (mapsMouseEvent) => {
				const mapClickLat = mapsMouseEvent.latLng.lat();
				const mapClickLng = mapsMouseEvent.latLng.lng();
				// console.log(mapClickLat, mapClickLng);
				const marker = new google.maps.Marker({
					position: {lat: mapClickLat, lng: mapClickLng},
					map: map
				})
				infoWindow.open({
					anchor: marker,
					map: map,
					shouldFocus: true,
				});
				setCoords([mapClickLat, mapClickLng])
			});
		}
	}, [ref, map]);

	const style = {
		width: '1000px',
		height: '800px',
	};
	const reviewForm = []
	if (review) {
		reviewForm.push(<CreateReview coords={coords} />)
	}

	return (
		<>
			<div ref={ref} style={style} />
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					// set the map prop on the child component
					return React.cloneElement(child, { map });
				}
			})}
			<button
			className='review-btn'
			style={{ width: '200px', height: '30px' }}
			onClick = {()=> setReview(true)}
		>
			Post a Review
		</button>
			{reviewForm}
		</>
	);
};

export default MapComponent;
