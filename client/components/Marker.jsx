/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { InfoWindow } from 'google-maps-react';

const Marker = (options) => {
	const [marker, setMarker] = React.useState();


	React.useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker());
		}

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
				marker.changeCoords([marker.position.lat(), marker.position.lng()], marker.id)

				fetch('/api/' + marker.id)
				    .then(response => response.json())
			        .then(data => {

						console.log(data)
						let reviews = data[0];

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
							<ul>
								<li><strong>Rating:</strong>` + starObj[String(reviews.rating)] + `</li>
								<li><strong>Service Type:</strong>` + reviews.service_type +`</li>
								<li><strong>Cost:</strong>` + reviews.cost + `</li>
								<li><strong>Review:</strong>` + reviews.review + `</li>
							</ul>
						</div>`
		
						const infoWindow = new google.maps.InfoWindow(
							{content: contentString}
						);
		
		
						infoWindow.open({
							anchor: marker,
							map: options.map,
							shouldFocus: true,
						});
					})	
			});
		}
	}, [marker, options]);
	return null;
};

export default Marker;