import React, { Component } from 'react';
import MapContainer from './containers/MapContainer.jsx';
import CreateReview from './components/CreateReview.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



class App extends Component {
	render() {
		return (
			<div className='main-container'>
			{/* <Router>
				<Routes>
					<Route path='/' element={<MapContainer />} />
					<Route path='/review' element={<CreateReview />} /> */}
				<MapContainer/>
				{/* </Routes>
			</Router> */}
			</div>
		);
	}
}

export default App;
