import React from 'react';
import axios from 'axios'; 
import { useForm } from "react-hook-form";
import Header from '../Shared/Header/Header';
const Review = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
      console.log(data);
      axios.post('https://tranquil-atoll-17638.herokuapp.com/review',data)
      .then(res=>{
         if(res.data.insertedId){
             alert('added successfully')
             reset();
         }
      })
    };
    return (
        <div className="add-service">
            <Header/>
        <h2>Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, })} placeholder="Name" />
            <textarea {...register("description")}  placeholder="Description" />
            <input type="float" {...register("star")}  placeholder="star" />
            <input type="submit" />
        </form>
    </div>
    );
};

export default Review;