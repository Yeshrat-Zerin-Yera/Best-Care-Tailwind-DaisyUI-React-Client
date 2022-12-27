import React from 'react';
import Clock from '../../../assets/icons/clock.svg';
import Marker from '../../../assets/icons/marker.svg';
import Phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardInfo = [
        { id: 1, title: 'Opening Hours', content: '8 AM to 6 PM, Monday to Saturday', icon: Clock, bgClass: 'bg-gradient-to-r from-primary to-secondary' },
        { id: 2, title: 'Visit our location', content: 'San Francisco, CA 94105, United States', icon: Marker, bgClass: 'bg-accent' },
        { id: 3, title: 'Contact us now', content: '+000 123 454896', icon: Phone, bgClass: 'bg-gradient-to-r from-primary to-secondary' }
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 mb-16 md:mb-24 text-white'>
            {
                cardInfo.map(card => <InfoCard key={card?.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;