import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import store from './store';
import './App.css';

export default function App() {
	return (
		<Provider store={store} className='App'>
			<Routes />
		</Provider>
	);
}
