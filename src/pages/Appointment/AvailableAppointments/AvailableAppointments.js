import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import AvailableAppointmentsCard from './AvailableAppointmentsCard';

const AvailableAppointments = ({ selectedDate }) => {
    // { selectedDate } From Appointment
    const [service, setService] = useState(null);
    const date = format(selectedDate, 'PPPP');

    // Fetch Appointment Options
    const { data: appointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    });

    // Loading Spinner
    if (isLoading) return <Loading></Loading>

    return (
        <div className='mx-3 mb-12 md:mb-24'>
            <h4 className='text-center text-2xl text-secondary font-bold'>You Have Selected Date: <span className='text-accent'>{format(selectedDate, 'PPPP')}</span></h4>
            <p className='text-center font-bold my-6'>Please Select A Service</p>
            {/* Appointment Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map(appointmentOption => <AvailableAppointmentsCard
                        key={appointmentOption?._id}
                        appointmentOption={appointmentOption}
                        setService={setService}
                    ></AvailableAppointmentsCard>)
                }
            </div>
            {/* Appointment Modal */}
            {service && <AppointmentModal
                service={service}
                setService={setService}
                selectedDate={selectedDate}
                refetch={refetch}
            ></AppointmentModal>}
        </div>
    );
};

export default AvailableAppointments;