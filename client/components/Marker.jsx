import React from 'react';
import { InfoWindow } from 'google-maps-react';

const Marker = (options) => {
	const [marker, setMarker] = React.useState();
	// const [coords, setCoords] = React.useState()

	// loop through fetched data here
	// const infoWindow = new google.maps.InfoWindow(
	// 	// {content: options.clinicName}
	// );

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

			marker.addListener('click', (options) => {
				// setCoords([marker.position.lat, marker.position.lng])
				// setMarkerCoords([marker.position, marker.key])
				// let reviews = await fetch('/api/' + options.key)
				// reviews = reviews.json()
				// console.log(reviews)
				console.log('this is the marker:', marker)

				const starObj = {
					1: '✩',
					2: '✩✩',
					3: '✩✩✩',
					4: '✩✩✩✩',
					5: '✩✩✩✩✩'
				}

				const contentString = 
				`<div>
					<h1>` + marker.clinicName + `</h1>
					<h3>Review 1</h3>
					<ul>
						
						<li><strong>Rating:</strong>` + starObj[3] + ` /*reviews[i].rating*/</li>
						<li><strong>Service Type:</strong> service /*reviews[i].rating*/</li>
						<li><strong>Cost:</strong> cost /*reviews[i].rating*/</li>
						<li><strong>Review:</strong> review /*reviews[i].rating*/</li>
					</ul>
				</div>`

				console.log('we are logging the marker clinic ' + marker.clinicName)
				const infoWindow = new google.maps.InfoWindow(
					{content: contentString}
				);


				infoWindow.open({
					// content: String(marker.clinicName),
					anchor: marker,
					map: options.map,
					shouldFocus: true,
				});
			});
			// console.log('this is the marker log'+ options); 
		}
	}, [marker, options]);
	return null;
};

export default Marker;

// "location_id" bigint NOT NULL,
// "service_type" varchar NOT NULL,
// "cost" varchar NOT NULL,
// "rating" integer NOT NULL,
// "review" varchar NOT NULL,