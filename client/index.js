/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import App from './App.jsx';

import styles from './scss/styles.scss';

// render(
//     // <BrowserRouter>
//         <App />,
//     /*{/* </BrowserRouter>, *//*}*/
//   document.getElementById('root')
// );

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);