import React from 'react';
import './BecomeVolunter.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import supporterImg from '../../../images/support1.jpg'

const BecomeVolunteer = () => {
    return (
        <Container className = 'my-5'>
            <Row xs={12} md={2} className = 'g-5'>
                <Col>
                    <img src={supporterImg} alt="" className='img-fluid'/>
                </Col>
                <Col className = 'volunter-apply'>
                    <p className='custom-text-warning'>Join Us</p>
                    <h1 className='custom-text-primary fw-bold'>Become an volunteer for save children</h1>
                    <p>NewLook unlike many traditional plastic surgery centers in San Diego, are industry recognized experts in a wide variety of with an cosmetic procedure and are dedicated.
                    </p>
                    <Button className = 'custom-button py-3 px-5 rounded-pill'>Apply Now<i class="fas fa-arrow-right ms-3"></i></Button>
                </Col>
            </Row>
        </Container>
    );
};

export default BecomeVolunteer;