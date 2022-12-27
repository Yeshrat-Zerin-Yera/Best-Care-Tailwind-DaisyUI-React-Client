import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const Dashboard = () => {
    useTitle('Dashboard');
    const { user } = useContext(AuthContext);

    // Get Bookings By Email
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user?.email}`)
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;