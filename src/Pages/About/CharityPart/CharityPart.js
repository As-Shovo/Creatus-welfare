import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/aboutus1.jpg'

const CharityPart = () => {
    return (
        <Container className='mb-5 p-5' style={{ marginTop: '100px' }}>
            <Row className='g-5 d-flex align-items-center justify-content-evenly'>
                <Col xs={12} md={6}>
                    <img src={aboutImg} alt="" />
                </Col>
                <Col xs={12} md={6} className='volunter-apply'>
                    <p className='custom-text-warning'>About Us<i className="far fa-heart ms-3"></i></p>
                    <h1 className='custom-text-primary fw-bold'>Charity to Change Child’s and Poor People Life</h1>
                    <p className='my-4'>A charitable organization or charity is an organization whose primary objectives are philanthropy and social well-being. The legal definition of a charitable organization varies between countries and in some instances regions of the country.
                    </p>
                    <h4 className='text-secondary my-4'>Helped Fund<span className = 'custom-text-warning'>24,537</span> Projects in 24 Countries,
                      <br /> Benefiting Over<span className = 'text-info'>8.2 Million</span> People.</h4>
                    <Button className='custom-button py-3 px-5 rounded-pill'>Learn More<i className="fas fa-arrow-right ms-3"></i></Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CharityPart;