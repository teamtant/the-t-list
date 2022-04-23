import React from 'react';
import { InfoWindow } from 'google-maps-react';

const Marker = (options) => {
	const [marker, setMarker] = React.useState();

	const infoWindow = new google.maps.InfoWindow({
		content: 'Review Data',
	});

	React.useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker());
		}

		// remove marker from map on unmount
		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	React.useEffect(() => {
		if (marker) {
			marker.setOptions(options);

			marker.addListener('click', () => {
				infoWindow.open({
					anchor: marker,
					map: options.map,
					shouldFocus: true,
				});
			});
			console.log(options);
		}
	}, [marker, options]);
	return null;
};

export default Marker;
