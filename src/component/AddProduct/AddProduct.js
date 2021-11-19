import React from 'react';
import axios from 'axios'; 
import { useForm } from "react-hook-form";
import './AddProduct.css'
import Header from '../Shared/Header/Header';
const AddProduct = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
      console.log(data);
      axios.post('https://tranquil-atoll-17638.herokuapp.com/product',data)
      .then(res=>{
         if(res.data.insertedId){
             alert('Product has been successfully added ')
             reset();
         }
      })
    };
    return (
        <div className="add-service">
            <Header/>
        <h2>Add service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, })} placeholder="Name" />
            <textarea {...register("description")}  placeholder="Description" />
            <input type="number" {...register("price")}  placeholder="price" />
            <input {...register("img")}  placeholder="img url"/>
            <input type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;