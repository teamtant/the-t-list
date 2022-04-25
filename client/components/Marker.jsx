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
				  .then(data => console.log(data))

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
					anchor: marker,
					map: options.map,
					shouldFocus: true,
				});
			});
		}
	}, [marker, options]);
	return null;
};

export default Marker;