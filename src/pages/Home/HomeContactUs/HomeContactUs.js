import React from 'react';
import Appointment from '../../../assets/images/appointment.png';

const HomeContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${Appointment})` }} className='text-white p-6 rounded-lg mx-3 mb-16 md:mb-24'>
            {/* Home Contact Us */}
            <h4 className="text-2xl text-secondary font-bold text-center">Contact Us</h4>
            <h2 className="text-4xl text-center font-semibold">Stay Connected With Us</h2>
            {/* Form */}
            <div className='flex items-center flex-col gap-3 mt-6'>
                {/* Email */}
                <input type="email" name='email' placeholder="Email" className="input w-full max-w-xs block" />
                {/* Subject */}
                <input type="text" name='subject' placeholder="Subject" className="input w-full max-w-xs" />
                {/* Message */}
                <textarea className="textarea w-full max-w-xs" name='message' placeholder="Message"></textarea>
                {/* Submit */}
                <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Submit</button>
            </div>
        </div>
    );
};

export default HomeContactUs;