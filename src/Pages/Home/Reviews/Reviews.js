import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review/Review';


const Reviews = () => {
    const url = 'https://lit-lowlands-70936.herokuapp.com/reviews'
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (

        <div className='my-5' >
            <div className='text-center'>
                <p className='custom-text-warning '><i className="far fa-heart me-3"></i>Reviews</p>
                <h1 className='custom-text-primary fw-bold'>Our Last Reviews</h1>
            </div>
            <Row xs={12} md={3} className="g-3  review-bg p-5 " style={{ marginTop: '120px', marginBottom: '120px' }}>

                {
                    reviews.map(review => <Review review={review} key={review._id}></Review>)
                }

            </Row>
        </div>

    );
};

export default Reviews;