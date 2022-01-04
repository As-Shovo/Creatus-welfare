import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='text-center banner-content text-white'>
                <div className='donation-title mb-3'>
                    <span>Education</span>
                    <span>Child</span>
                    <span>Medical</span>
                </div>
                    <h1>Change a Child's Life</h1>
                   <div className='w-50 mx-auto'>
                   <p className=''>Volunteers do not nessarily have the time they just have the heart Organization set up for need money.</p>
                   </div>
                <div className='mt-5'>
                    <Button className='custom-button rounded-pill px-5 py-3'>Our Causes</Button>
                    <Button className='custom-button ms-5 rounded-pill px-5 py-3' style={{ background: '#263B5C' }}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;