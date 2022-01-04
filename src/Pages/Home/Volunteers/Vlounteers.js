import React from 'react';
import { Container, Row } from 'react-bootstrap';
import volunteersData from '../../../fakeData/volunteer.json'
import SingleVolunteer from './SingleVolunteer/SingleVounteer'

const Vlounteer = () => {
    return (
        <Container className='custom-margin'>
            <div className='my-5 text-center'>
                <p className='custom-text-warning'>Voltunteers</p>
                <h1 className='custom-text-primary fw-bold'>Our Volunteers</h1>
            </div>
            <Row xs={12} md={3}>
                {
                    volunteersData.map(volunteer => <SingleVolunteer volunteer={volunteer} key={volunteer.id} ></SingleVolunteer>)
                }
            </Row>
        </Container>
    );
};

export default Vlounteer;