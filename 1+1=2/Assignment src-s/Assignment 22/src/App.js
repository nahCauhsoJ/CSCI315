import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import IAmYourFather from './Components/IAmYourFather';
import No from './Components/NOOOOooOOeeNooeeoe';

function App() {
  return (
	<div className="app">
		<IAmYourFather />
		<Router>
			<No path="/:typetype/:apiid"/>
		</Router>
	</div>
  );
}

export default App;
