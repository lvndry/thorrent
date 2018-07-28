import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/routes.jsx';
import store from './store.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
				<Routes />
		</Provider>
    );
  }
}

export default App;
