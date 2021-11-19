import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product'
const DisplayProduct = () => {
    const [product, setProduct] = useState([])
    const products =product.slice(0,6);
    useEffect(() => {
        fetch('https://tranquil-atoll-17638.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">Our products</h2>
        <div className="products-container">
            {
                products.map(product => <Product key={product._id} product={product}/>)
            }
        </div>
        </div>
    );
};

export default DisplayProduct;