import './App.css';
import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import Edit from './views/Edit';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
		<Router>
			<Main path="/"/>
			<Detail path="/:id"/>
			<Edit path="/:id/edit"/>
		</Router>
    </div>
  );
}

export default App;
