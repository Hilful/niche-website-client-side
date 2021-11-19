import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, name, price, description, img } = props.product;
    return (
        <div className="product pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <h5>Price: {price}</h5>
            <Link to={`/orders/${_id}`}>
                <button className="btn btn-warning">Order {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Product;