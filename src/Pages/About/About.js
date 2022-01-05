import React from 'react';
import './About.css'
import { Col, Row } from 'react-bootstrap';
import CharityPart from './CharityPart/CharityPart';


const About = () => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={12} className='page-banner text-white fw-bold px-5' >
                    <div className='text-center py-5'>
                        <h1 >About Us</h1>
                        <p className='text-white'><i className="fas fa-map-marker-alt me-2"></i>Home / About</p>
                    </div>
                </Col>
                <CharityPart></CharityPart>
            </Row>
        </div>
    );
};

export default About;