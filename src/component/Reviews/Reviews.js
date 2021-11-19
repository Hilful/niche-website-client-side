import React from 'react';

const Reviews = (props) => {
    const {  name, star, description, } = props.review;
    return (
        <div className="product pb-3">
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <h5> <i class="fas fa-star">{star}</i></h5>
        </div>
    );
};

export default Reviews;