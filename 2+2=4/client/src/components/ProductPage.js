import React from 'react'
const ProductPage = props => {
	const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product{props.idx}')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
            {product.map((product)=>{return 
				<center>
					<h3>{product.title}</h3>
					<p>{product.price}</p>
					<p>{product.desc}</p>
				</center>
            })}
        </div>
    )
}

export default ProductPage;