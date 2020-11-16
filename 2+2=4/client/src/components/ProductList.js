import React from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';

const ProductList = props => {
	const detail = (e) => {
		e.preventDefault();
		navigate(e.target.href);
	};
	
	const deleteProduct = e => {
        e.preventDefault();
		const x = e.target.getAttribute("linkmee");
		axios.post('http://localhost:8000/api/product/' + e.target.getAttribute("linkmeh") + '/del', {obj_id:x})
			.then(props.recentSet(false));
	};
	
    return (
        <div>
            {props.products.map((product, idx)=>
				<div key={idx} className="prod_list">
					<a href={idx} onClick={detail}>{product.title}</a>
					<input type="button" linkmeh={idx} linkmee={product._id.toString()} onClick={deleteProduct} value="Delete This Product"/>
					<br/>
				</div>
            )}
        </div>
    )
}

export default ProductList;