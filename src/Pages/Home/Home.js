import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import BecomeVolunteer from './BecomeVolunteer/BecomeVolunteer'
import Causes from './Caueses/Causes';
import Volunteers from './Volunteers/Vlounteers'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Causes></Causes>
            <BecomeVolunteer></BecomeVolunteer>
            <Volunteers></Volunteers>
        </div>
    );
};

export default Home;