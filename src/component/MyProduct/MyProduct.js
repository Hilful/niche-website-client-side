import React, {useState,useEffect} from 'react';
import Header from '../Shared/Header/Header';
import './MyProduct.css';
const MyProduct = () => {
    const [product,setOffers] =useState([]);

    useEffect (()=>{
        fetch('https://tranquil-atoll-17638.herokuapp.com/product')
        .then (res =>res.json())
        .then (data =>setOffers(data))
    })
    const handleDelete =id =>{
        const url=(`https://tranquil-atoll-17638.herokuapp.com/product${id}`)
            fetch(url,{
                method:'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                if (data.deletedCount){
                    const remaining= product.filter(product =>product._id!== id);
                setOffers(remaining)
                }
            })
    }
    return (
        <div>
            <Header/>
            <div className="MyProduct">
            {
                product.map(product => <div className="service-container" key={product._id}>
                    <img src={product.img} alt="" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <button onClick={( ) =>handleDelete (product._id)}>delete</button>
                </div>)
            }
            </div>
        </div>
    );
};

export default MyProduct;