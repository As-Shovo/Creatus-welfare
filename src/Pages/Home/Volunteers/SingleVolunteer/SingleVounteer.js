import React from 'react';


const singleVounteer = ({ volunteer }) => {
    const { name, title, img } = volunteer

    return (
        <div className='text-center'>
            <img src={img} alt="" className='img-fluid' />
            <p className='text-info  mt-3'>{title}</p>
            <h4 className='custom-text-primary'>{name}</h4>
        </div>
    );
};

export default singleVounteer;