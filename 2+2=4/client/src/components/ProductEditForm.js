import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const ProductEditForm = props => {
	
	const [obj_id, setId] = useState("");
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [desc, setDesc] = useState("");
	
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/' + props.id, {
			obj_id,
            title,
            price,
			desc
        })
            .then(res=>{
				navigate("../../");
			})
            .catch(err=>console.log(err));
    }
	
	useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => {
				setId(res.data._id.toString());
				setTitle(res.data.title);
				setPrice(res.data.price);
				setDesc(res.data.desc);
			})
    }, [props.id])
	
    return (
        <form onSubmit={onSubmitHandler}>
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

export default ProductEditForm;