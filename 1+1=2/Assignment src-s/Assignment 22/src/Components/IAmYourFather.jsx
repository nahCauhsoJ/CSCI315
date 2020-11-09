import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const IAmYourFather = (props) => {
	const [typetype, setType] = useState("films");
	const [apiid, setApiid] = useState(0);
	
	const NOOOOOooooo = (e) => {
		e.preventDefault();
		navigate(`/${typetype}/${apiid}`);
	};
	

	return(
		<div>
			<form onSubmit={ NOOOOOooooo }>
			
				<div className="formbox_1">
					<label>Search for: </label>
					{/*Sadly, the api doesn't allow me to get a list of available types, so I need to hard-code it here.*/}
					<select onChange={(e) => setType(e.target.value)}>
						<option value="films">Films</option>
						<option value="people">People</option>
						<option value="planets">Planets</option>
						<option value="species">Species</option>
						<option value="starships">Star Ships</option>
						<option value="vehicles">Vehicles</option>
					</select>
					<label>ID: </label>
					<input type="text" onChange={(e) => setApiid(e.target.value)}/>
					<input id="submit_btn" type="submit" value="Search" />
				</div>
				
				<br/>
							
			</form>
		</div>		
		
	);
};



export default IAmYourFather;