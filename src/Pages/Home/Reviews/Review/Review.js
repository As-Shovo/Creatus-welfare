import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { name, email, review, rating , img} = props.review
    return (

        <Col>
            <Card >
                <div className = 'mx-auto mt-5'>
                <Card.Img variant="top" src={img} className = 'img-fluid' style = {{ width: '100px',height : '100px', borderRadius : '50%'}}/>
                </div>
                <Card.Body className = 'text-center'> 
                    <Card.Title className = 'custom-text-primary fw-bold'>{name}</Card.Title>
                    <h6>{email}</h6>
                    <p>
                                    {parseInt(rating) === 5 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(rating) === 4 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(rating) === 3 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(rating) === 2 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    }
                                    {parseInt(rating) === 1 &&
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>

                                        </div>
                                    }
                                </p>
                    <Card.Text>
                       {review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Review;