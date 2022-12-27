import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../../assets/images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero my-6">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-[1363px] lg:py-24">
                {/* Home Banner Image */}
                <img src={BannerImg} alt='' className="lg:w-1/2 rounded-lg shadow-2xl mb-6" />
                {/* Home Banner Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold">Online Doctor Appointments Available Now</h1>
                    <p className="py-6">Speak with a doctor online without leaving your house. Manage your health conveniently with top-quality care.</p>
                    <Link to='/appointment' className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;