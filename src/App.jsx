import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import Header from './components/header/Header';
import PlayerInitializer from './components/player/PlayerInitializerContainer';
import store from './store';

import './App.css';

export default function App() {
	return (
		<Provider store={store} className='App'>
			<div>
				<PlayerInitializer />
				<Header />
				<Routes />
			</div>
		</Provider>
	);
}
