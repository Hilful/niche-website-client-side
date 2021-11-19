import React, { useEffect, useState } from 'react';
import Reviews from '../../Reviews/Reviews';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://tranquil-atoll-17638.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">reviews</h2>
        <div className="review-container">
            {
                review.map(review => <Reviews key={review._id} review={review}/>)
            }
        </div>
        </div>
    );
};

export default Review;