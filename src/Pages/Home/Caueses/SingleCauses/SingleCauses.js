import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCauses = ({ causes }) => {

    const { title, description, price, img, id } = causes
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} className='img-fluid ms-0' />
                <Card.Body className='p-5'>
                    <h6 className='custom-text-warning'>{title}</h6>
                    <Card.Title className='custom-text-primary mt-3'>{description}</Card.Title>
                    <div className='d-flex justify-content-between my-4 text-secondary'>
                        <small><i className="fas fa-globe me-2"></i>Goal</small>
                        <small><i className="fas fa-users me-2"></i>Raised</small>
                        <small> <i className="fas fa-reply me-2"></i>To Go</small>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
<<<<<<< HEAD
                        <Link to={`/causes/${id}`}><Button className='custom-button px-4 py-2'>Donate <i className="fas fa-long-arrow-alt-right ms-2"></i></Button></Link>
=======
                        <Button className='custom-btn  px-4 py-2'>Donate <i className="fas fa-long-arrow-alt-right ms-2"></i></Button>
>>>>>>> a436ac5 ([MOD]-fakedata)
                        <h5 className='text-info fw-bold' >${price}</h5>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleCauses;