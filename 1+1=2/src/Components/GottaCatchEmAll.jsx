import React, { useState, useEffect } from 'react';



const GottaCatchEmAll = (props) => {
	const [poke, setPoke] = useState([]);
	const [gotpoke, getPoke] = useState(false);
	
	useEffect(() => {
		if (gotpoke) {
			fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
			.then(response => response.json())
			.then(response => setPoke(response.results))
		}
	}, [gotpoke]);
	
	const pikaCHUUUUU = (e) => {
		e.preventDefault();
		if (!gotpoke) {getPoke(true);}
	};

	return(
		<div>
			<form onSubmit={ pikaCHUUUUU }>
			
				<div className="formbox_1">
					<input id="submit_btn" type="submit" value="Fetch Pokemon" />
				</div>
				
				<br/>
							
			</form>
			
			<ul className="formbox_2">
				{poke.length > 0 && poke.map((e) => (<li style={{textTransform: 'capitalize'}}>{e.name}</li>))}
			</ul>
		</div>		
		
	);
};



export default GottaCatchEmAll;