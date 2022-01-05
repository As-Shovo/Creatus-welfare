import React from 'react';
import { useParams } from 'react-router-dom';

const Donate = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Donate id {id} </h2>
        </div>
    );
};

export default Donate;