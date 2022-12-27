import React from 'react';
import Quote from '../../../assets/icons/quote.svg';

const TestimonialCard = ({ testimony }) => {
    // { testimony } From Testimonials
    const { name, address, message, img } = testimony;

    return (
        <div className='rounded-lg p-6 shadow-xl'>
            {/* Quote Icon */}
            <div className='flex justify-end mb-3'>
                <img src={Quote} alt="" className='w-12' />
            </div>
            {/* Review Message  */}
            <p>{message}</p>
            <div className='flex items-center mt-6'>
                {/* Reviewer's Image */}
                <img src={img} alt="" className='rounded-full mr-3 w-16 outline outline-secondary' />
                {/* Name & Address */}
                <div>
                    <p className='text-lg font-semibold'>{name}</p>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;