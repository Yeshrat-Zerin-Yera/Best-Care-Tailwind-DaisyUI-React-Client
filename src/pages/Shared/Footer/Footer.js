import React from 'react';
import { Link } from 'react-router-dom';
import FooterImg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${FooterImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            {/* Footer */}
            <footer className="footer p-10">
                {/* Services  */}
                <div>
                    <span className="footer-title text-center">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                {/* Oral Health */}
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>
                </div>
                {/* Our Address */}
                <div>
                    <span className="footer-title">Our Address</span>
                    <p className="link link-hover">San Francisco, CA 94105, United States</p>
                </div>
            </footer>
            {/* Copyright */}
            <div className='text-center mt-6'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;