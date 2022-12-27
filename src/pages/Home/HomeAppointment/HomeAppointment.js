import React from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../../../assets/images/doctor.png';
import Appointment from '../../../assets/images/appointment.png';

const HomeAppointment = () => {
    return (
        <div className="hero text-white mb-16 lg:my-24 xl:rounded-lg" style={{ backgroundImage: `url(${Appointment})` }}>
            {/* Home Make An Appointment Now */}
            <div className="hero-content flex-col lg:flex-row max-w-[1000px] lg:p-0">
                {/* Home Make An Appointment Now Image */}
                <img src={Doctor} alt='' className="lg:w-1/2 -mt-32 hidden lg:block" />
                {/* Home Make An Appointment Now Content */}
                <div className='p-6'>
                    <h4 className="text-2xl text-secondary font-bold mb-3">Appointment</h4>
                    <h2 className="text-4xl font-bold">Make An Appointment Now</h2>
                    <p className="py-6">Best Care-affiliated doctors provide convenient same-day or next-day appointments that start on time and go as long as you need.</p>
                    <Link to='/appointment' className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;