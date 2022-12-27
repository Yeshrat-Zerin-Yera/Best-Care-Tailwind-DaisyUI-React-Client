import React, { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    useTitle('Appoinment');
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            {/* Appointment Banner */}
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            {/* Available Appointment */}
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;