import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Header from '../Shared/Header/Header';
import './Products.css'
const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://tranquil-atoll-17638.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div >
            <Header/>
            <h2 className="text-primary mt-5">Our products</h2>
            <div className="products-container">
                {
                    product.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
       </div>
    );
};

export default Products;