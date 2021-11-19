import React from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
const PlaceOrder = () => {
    const { productId} = useParams();
    return (
        <div>
            <Header/>
            <h2>Number of Orders placed so far : {productId}</h2>
        </div>
    );
};

export default PlaceOrder;