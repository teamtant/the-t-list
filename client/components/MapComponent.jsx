import React from 'react';
// import GoogleMapReact from 'google-map-react';

const MapComponent = ({ children }) => {
	const ref = React.useRef(null);
	const [map, setMap] = React.useState();

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
				console.log(mapClickLat, mapClickLng);
			});
		}
	}, [ref, map]);

	const style = {
		width: '500px',
		height: '500px',
	};

	return (
		<>
			<div ref={ref} style={style} />
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					// set the map prop on the child component
					return React.cloneElement(child, { map });
				}
			})}
		</>
	);
};

export default MapComponent;

// <div className='Map' style={{ height: '100vh', width: '100%' }}>
// 	<GoogleMapReact>
// 		bootstrapURLKeys={{ key: 'AIzaSyAJdQ - ID6_clf4WGWk5F8bt3CnNMlHCXRs' }}
// 		defaultCenter:
// 		{{
// 			lat: 37.42216,
// 			lng: -122.08427,
// 		}}
// 		defaultZoom: {11}
// 	</GoogleMapReact>
// </div>
// <h1>hello world</h1>
