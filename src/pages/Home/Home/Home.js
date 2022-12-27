import React from 'react';
import Banner from '../Banner/Banner';
import BannerSecond from '../BannerSecond/BannerSecond';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import HomeContactUs from '../HomeContactUs/HomeContactUs';
import InfoCards from '../InfoCards/InfoCards';
import OurServices from '../OurServices/OurServices';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <BannerSecond></BannerSecond>
            <HomeAppointment></HomeAppointment>
            <Testimonials></Testimonials>
            <HomeContactUs></HomeContactUs>
        </div>
    );
};

export default Home;