import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrash, FaUser } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    // Use Title
    useTitle('Manage Doctors');
    // Get Doctors From Database
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('https://best-care-server.vercel.app/doctors', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    });

    // Loading
    if (isLoading) {
        return <Loading></Loading>
    }

    // If There Is No User
    if (doctors.length === 0) {
        return <h2 className="text-2xl font-bold text-center">There Is No Doctor</h2>
    }

    // Handle Delete Doctor
    const handleDeleteDoctor = doctor => {
        const processed = window.confirm(`Are You Sure You Want To Delete Doctor ${doctor?.name}`);
        if (processed) {
            const processedAgain = window.prompt(`Type This Email: "${doctor?.email}" To Confirm`);
            if (processedAgain === doctor?.email) {
                fetch(`https://best-care-server.vercel.app/doctors/${doctor?._id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            toast.success(`${doctor?.name} Deleted Successfully`);
                            refetch();
                        }
                    })
                    .catch(error => console.error(error))
            }
            else {
                toast.error(`${doctor?.name} Delete Operation Was Unsuccessfull`);
            }
        }
    };

    return (
        <div>
            <h2 className="text-2xl mb-6">Manage Doctors: {doctors.length}</h2>
            {/* Doctors Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specilty</th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor?._id}>
                                <th>{index + 1}</th>
                                <th>
                                    {
                                        doctor?.img ?
                                            <img src={doctor?.img} alt="" className='h-10 w-10 rounded-full' />
                                            : <FaUser className='text-4xl text-secondary' />
                                    }
                                </th>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.specialty}</td>
                                <td className='flex justify-center'><FaTrash onClick={() => handleDeleteDoctor(doctor)} className='text-2xl text-error hover:text-red-300 my-3' /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;