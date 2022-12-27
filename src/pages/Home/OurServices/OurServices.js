import React from 'react';
import Flouoride from '../../../assets/images/fluoride.png';
import Cavity from '../../../assets/images/cavity.png';
import Whitening from '../../../assets/images/whitening.png';
import OurServicesCard from './OurServicesCard';

const OurServices = () => {
    const ourServicesCardInfo = [
        { id: 1, title: 'Fluoride Treatment', content: 'From physical ailments to prescription refills, our full range of medical services has you covered.', img: Flouoride },
        { id: 2, title: 'Cavity Filling', content: 'From physical ailments to prescription refills, our full range of medical services has you covered.', img: Cavity },
        { id: 3, title: 'Teeth Whitening', content: 'From physical ailments to prescription refills, our full range of medical services has you covered.', img: Whitening }
    ];

    return (
        <div className='mb-16 md:mb-24 mx-3'>
            <h4 className='font-semibold text-center text-primary text-2xl'>Our Services</h4>
            <h2 className='text-center text-3xl'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-12'>
                {
                    ourServicesCardInfo.map(ourService => <OurServicesCard key={ourService?.id} ourService={ourService}></OurServicesCard>)
                }
            </div>
        </div>
    );
};

export default OurServices;