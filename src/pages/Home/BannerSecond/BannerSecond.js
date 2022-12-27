import React from 'react';
import { Link } from 'react-router-dom';
import BannerSecondImg from '../../../assets/images/banner-second.jpg';

const BannerSecond = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-12 max-w-[1363px] pb-16 lg:pb-24">
                {/* Home Second Banner Image */}
                <img src={BannerSecondImg} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                {/* Home Second Banner Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold">Best Care Built Just For You</h1>
                    <p className="py-6">At Best Care, we know it's hard to achieve good health without a dedicated health partner who knows you and has time to really address your health concerns. That's why Best Care is different. From the first day of your treatment in an Best Care-affiliated practice, your physician will deliver an experience that rivals ordinary primary care practices. Working as partners, you and your doctor will develop a tailored, comprehensive wellness plan that delivers in-depth knowledge and one-on-one support all year long. With the added benefit of minimal wait time and extended appointments, you and your doctor will work to maximize your health and achieve your goals.</p>
                    <Link to='/appointment' className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default BannerSecond;