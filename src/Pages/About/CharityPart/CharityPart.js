import React from 'react';
import { Button, Container } from 'react-bootstrap';
import aboutImg from '../../../images/aboutus1.jpg'

const CharityPart = () => {
    return (
        <Container className='mb-5' style={{ marginTop: '100px' }}>
            <div className='d-flex align-items-center justify-content-between'>
                <div>
                    <img src={aboutImg} alt="" className='' />
                </div>
                <div className='volunter-apply w-50'>
                    <p className='custom-text-warning'>About Us<i className="far fa-heart ms-3"></i></p>
                    <h1 className='custom-text-primary fw-bold'>Charity to Change Child’s and Poor People Life</h1>
                    <p className='my-4'>A charitable organization or charity is an organization whose primary objectives are philanthropy and social well-being.
                    </p>
                    <h4 className='text-secondary my-5 bg-lightgray border-start border-5 px-4 border-gray'>Helped Fund<span className='custom-text-warning fs-5' >24,537</span> Projects in 24 Countries,
                        <br />Benefiting Over<span className='text-info fs-5'>8.2 Million</span> People.</h4>
                    <Button className='custom-btn rounded-pill'>Learn More<i className="fas fa-arrow-right ms-2"></i></Button>
                </div>
            </div>
        </Container>
    );
};

export default CharityPart;