import React from 'react';
import Person1 from '../../../assets/images/person-1.jpg';
import Person2 from '../../../assets/images/person-2.jpg';
import Person3 from '../../../assets/images/person-3.jpg';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const TestimonialInfo = [
        { id: 1, name: 'Taylor Harris', img: Person1, address: 'Florida', message: "My experience has been seamless. I highly recommend this service to anyone who needs quick and efficient care." },
        { id: 2, name: 'Amey Wilson', img: Person2, address: 'Georgia', message: "Doctor has helped my daughter two times and we cannot recommend them enough. My daughter has ADHD and can't wait in a waiting room forever. This was the fastest and easiest way to get my daughter diagnosed and pick up a script." },
        {
            id: 3, name: 'Madison Walker', img: Person3, address: 'Arizona', message: "This is so easy and quick. I had a cold virus that turned into a sinus infection. Doctor was attentive, kind, and efficient. After a few questions, he diagnosed my ailment. I will be a client for a long time. Thank you."
        }
    ];

    return (
        <div className='mb-16 md:mb-24 mx-3'>
            <h4 className='text-2xl text-secondary font-bold'>Testimonials</h4>
            <h2 className='text-4xl'>What Our Patients Says</h2>
            {/* Testimonials Cards  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    TestimonialInfo.map(testimony => <TestimonialCard key={testimony?.id} testimony={testimony}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;