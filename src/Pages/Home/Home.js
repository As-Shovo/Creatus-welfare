import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import BecomeVolunteer from './BecomeVolunteer/BecomeVolunteer'
import Volunteers from './Volunteers'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BecomeVolunteer></BecomeVolunteer>
            <Volunteers></Volunteers>
        </div>
    );
};

export default Home;