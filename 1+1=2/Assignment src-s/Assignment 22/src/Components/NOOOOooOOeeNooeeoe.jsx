import React, { useState, useEffect } from 'react';
import dd from './DrunkDroids.png';

const NOOOOooOOeeNooeeoe = (props) => {
	const [failing, askKenobi] = useState(false);
	
	const [resultz, setResult] = useState({});
	const [resulttype, setResultType] = useState("films");
	const [attrz, setAttributes] = useState([]);
	
	const readable_title = {
		"films":["title","Film Title"],
		"people":["name","Name"],
		"planets":["name","Name"],
		"species":["name","Name"],
		"starships":["name","Name"],
		"vehicles":["name","Name"]
	}
	const readable_attr = {
		"films":[["episode_id","Film Episode Number"],["release_date","Release Date"],["director","Director"],["producer","Producer"]],
		"people":[["gender","Gender"],["height","Height (cm)"],["mass","Weight (kg)"],["birth_year","Year of Birth"]],
		"planets":[["diameter","Diameter (km)"],["population","Population"],["climate","Climate"],["terrain","Terrain"]],
		"species":[["classification","Classification"],["designation","Designation"],["average_lifespan","Average Lifespan (yrs)"],["language","Language"],["average_height","Average Height (cm)"]],
		"starships":[["model","Model No."],["starship_class","Starship Class"],["cost_in_credits","Cost (galactic credits)"],["crew","Crew Needed"],["passengers","Max. Passengers"]],
		"vehicles":[["model","Model No."],["vehicle_class","Vehicle Class"],["cost_in_credits","Cost (galactic credits)"],["crew","Crew Needed"],["passengers","Max. Passengers"]]
	}
	
	useEffect(() => {
		setResultType(props.typetype);
		setAttributes([]);
		setResult({});
		askKenobi(false);
		
		fetch(`https://swapi.dev/api/${props.typetype}/${props.apiid}`)
		.then(response => response.json())
		.then(response => {
			if (response.url) {
				setResult(response);
				setAttributes(readable_attr[props.typetype]);
			} else {
				askKenobi(true);
			}
		})
		.catch(error => {askKenobi(true);})
	}, [props.typetype,props.apiid]);

	return(
		<div>
			{failing ? <img src={dd} alt="These aren't the droids you're looking for"/>:""}
			
			<h2>{resultz[readable_title[resulttype][0]]}</h2>
			<div className="formbox_2">
				{attrz && attrz.map((e) => (
					<div className="color_box">
						<label style={{fontWeight:"bold"}}>{e[1]}: </label>
						<span>{resultz[e[0]]}</span>
					</div>
				))}
			</div>
		</div>		
		
	);
};



export default NOOOOooOOeeNooeeoe;