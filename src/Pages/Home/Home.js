import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import BecomeVolunteer from './BecomeVolunteer/BecomeVolunteer'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BecomeVolunteer></BecomeVolunteer>
        </div>
    );
};

export default Home;