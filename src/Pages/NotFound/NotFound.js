import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import NotFoundImg from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='w-50 mx-auto text-center my-5'>
            <img src={NotFoundImg} alt="" className='img-fluid' />
            <Link to='/'>
                <Button className='custom-button'>Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;