import React from 'react';

const AvailableAppointmentsCard = ({ appointmentOption, setService }) => {
    // { appointmentOption, setService } From Available Appointment
    const { name, slots, price } = appointmentOption;

    return (
        <div className='p-6 rounded-lg shadow-xl text-center'>
            {/* Treatment */}
            <h4 className="text-lg text-secondary font-bold">{name}</h4>
            {/* Available Slots */}
            <p className='my-3'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
            <p className='my-3'>Price: {price}$</p>
            {/* Book Appointment Button */}
            <label onClick={() => setService(appointmentOption)} htmlFor="appointmentModal" className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary" disabled={slots.length === 0}>Book Appointment</label>
        </div>
    );
};

export default AvailableAppointmentsCard;