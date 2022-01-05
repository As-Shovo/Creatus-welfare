import React from 'react';
import { useParams } from 'react-router-dom';
import causesData from '../../../../fakeData/donationServices.json';

const Donate = () => {
    const { id } = useParams();
    const selectedData = causesData.filter(sd => sd.id == id);
    console.log(selectedData);
    return (
        <div>
            <h2>Donate id {id} </h2>
        </div>
    );
};

export default Donate;