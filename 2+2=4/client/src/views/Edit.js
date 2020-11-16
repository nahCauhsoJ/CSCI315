import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductEditForm from '../components/ProductEditForm';

const Edit = props => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + props.id)
            .then(res=>{
                setProduct(res.data);
            });
    },[props.id])
    return (
        <div>
            <ProductEditForm id={props.id}/>
        </div>
    )
}

export default Edit;