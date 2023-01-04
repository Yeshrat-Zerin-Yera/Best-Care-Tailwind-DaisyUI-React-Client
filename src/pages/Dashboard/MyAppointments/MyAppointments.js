import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const MyAppointments = () => {
    // Use Title
    useTitle('My Appointments');
    // User From AuthContext
    const { user } = useContext(AuthContext);

    // Get Bookings By Email
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`https://best-care-server.vercel.app/bookings?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    });

    // Loading
    if (isLoading) {
        return <Loading></Loading>;
    }

    // If User Don't Have Any Appointments
    if (bookings.length === 0) {
        return <h2 className="text-2xl font-bold text-center">You Don't Have Any Appointments</h2>
    }

    return (
        <div className='h-full w-full '>
            <h2 className="text-2xl mb-6">My Appointments</h2>
            {/* My Appointments Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {
                            bookings.map((booking, index) => <tr key={booking?._id}>
                                <th>{index + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking?.treatment}</td>
                                <td>{booking?.appointmentDate}</td>
                                <td>{booking?.slot}</td>
                                <td>{booking?.price}$</td>
                                <td>
                                    {
                                        booking?.price && !booking?.paid && <Link to={`/dashboard/payment/${booking?._id}`} className='btn btn-primary btn-sm text-white'>Pay</Link>
                                    }
                                    {
                                        booking?.price && booking.paid && <span className='text-primary'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;