import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = props => {
	
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [desc, setDesc] = useState("");
	
	const [err, Wrong] = useState(false);
	
    const onSubmitHandler = e => {
        e.preventDefault();
		if (title.length > 0 && price.length > 0) {
			Wrong(false);
			if (desc.length < 1) {const desc = "No Description"}
				
			axios.post('http://localhost:8000/api/product', {
				title,
				price,
				desc
			})
				.then(res=>{
					console.log(res);
					props.recentSet(false);
					setTitle("");
					setPrice("");
					setDesc("");
				})
				.catch(err=>console.log(err))
			
		} else {
			Wrong(true);
		}
    }
	
    return (
        <form onSubmit={onSubmitHandler}>
			{err ?  <h2 style={{color:"red"}}>Please complete the form</h2> : ""}
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
			<p>
                <label>Price</label><br/>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
			<p>
                <label>Description</label><br/>
                <input type="text" value={desc} onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;