import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AppointmentModal = ({ service, selectedDate, setService, refetch }) => {
    // { service, selectedDate, setService, refetch } From Available Appointments
    const { name, slots, price } = service;
    const { user } = useContext(AuthContext);

    // Handle Booking
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = format(selectedDate, 'PPPP')
        const slot = form.slot.value;
        const fullName = form.fullName.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: fullName,
            slot,
            price,
            email,
            phoneNumber
        }
        // If User Present Then POST Booking Data To Database
        if (user?.uid) {
            fetch('https://best-care-server.vercel.app/bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.acknowledged) {
                        console.log(data);
                        setService(null);
                        toast.success('Booking Confirmed');
                        refetch();
                    }
                    else {
                        toast.error(data?.message);
                    }
                })
        }
        else {
            toast.error('Sign In To Place A Booking');
        }
    };

    return (
        <div>
            <input type="checkbox" id="appointmentModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {/* Modal Close */}
                    <label htmlFor="appointmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    {/* Modal Form */}
                    <form onSubmit={handleBooking} className='flex flex-col gap-6'>
                        {/* Date */}
                        <input type="text" placeholder="Date" value={format(selectedDate, 'PPPP')} disabled className="input input-bordered w-full" />
                        {/* Slots */}
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option key={slot}>{slot}</option>)
                            }
                        </select>
                        {/* Patient Name */}
                        <input type="text" name='fullName' defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full" />
                        {/* Phone Number */}
                        <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered w-full" />
                        {/* Email */}
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        {/* Submit Button */}
                        <input type="submit" value="Submit" className='btn btn-accent' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;