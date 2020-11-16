import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
const Detail = props => {
    const [product, setProduct] = useState({});
	
	const deleteProduct = e => {
        e.preventDefault();
		const x = product._id.toString();
		if (product !== {}) {
			axios.post('http://localhost:8000/api/product/' + props.id + '/del', {obj_id:x})
				.then(navigate("../"))
		};
	};
	
	const editProduct = e => {
        e.preventDefault();
		navigate(`/${props.id}/edit`);
	};
	
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [props.id]);
    return (
        <div>
            <h3>{product.title}</h3>
			<p>Price: ${product.price}</p>
			<p>Description: {product.desc}</p>
			<input type="button" onClick={editProduct} value="Edit This Product"/> <br/>
			<input type="button" onClick={deleteProduct} value="Delete This Product"/>
        </div>
    )
}

export default Detail;