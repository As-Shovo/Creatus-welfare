import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCauses = ({ causes }) => {

    const { title, description, price, img } = causes
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text className = 'custom-text-warning'>
                        {title}
                    </Card.Text>
                    <Card.Title className = 'custom-text-primary fw-bold'>{description}</Card.Title>
                    <h5>${price}</h5>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleCauses;