import React, { useState } from 'react';



const BoxForm = (props) => {
	const [setcolor, setColor] = useState("");
	const [boxes, listBoxes] = useState([]);
	const [u, updateState] = useState([]);
	
	const validateColor = (e) => {
		e.preventDefault();
		
		var c_style = new Option().style;
		c_style.color = setcolor;
		 
		if (c_style.color != "") {
			alert("This color exists. Creating box...");
			createBox();
		} else {
			alert("This color does not exist.");
		}
	};
	
	const createBox = () => {
		boxes.push(setcolor);
		updateState([]);
		// Not sure what happened here. updateState is necessary for the color boxes to render, but it has to be updated with an empty list...
	};

	return(
		<div>
			<form onSubmit={ validateColor }>
			
				<div className="formbox_1">
					<label>Color </label>
					<input type="text" onChange={
							(e) => setColor(e.target.value)
						} id="form_firstname"/>
					<input id="submit_btn" type="submit" value="Add" />
				</div>
				
				<br/>
							
			</form>
			
			<div className="formbox_2">
				
				{boxes.map((e) => (<div className="color_box" style={{backgroundColor:e}}></div>))}
					
			</div>
		</div>		
		
	);
};



export default BoxForm;