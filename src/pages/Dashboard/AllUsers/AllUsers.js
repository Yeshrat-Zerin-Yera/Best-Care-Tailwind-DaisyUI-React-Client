import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import { FaCrown, FaTrash, FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AllUsers = () => {
    // Use Title
    useTitle('All Users');
    // Get Users From Database
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://best-care-server.vercel.app/users')
            .then(res => res.json())
    });

    // Loading
    if (isLoading) {
        return <Loading></Loading>
    }

    // If There Is No User
    if (users.length === 0) {
        return <h2 className="text-2xl font-bold text-center">There Is No User</h2>
    }

    // Handle Allow Admin
    const handleAllowAdmin = user => {
        const processed = window.confirm(`Are You Sure You Want To Make ${user?.name} ${!user?.role || user?.role === 'User' ? 'Admin' : 'User'}`);
        if (processed) {
            const processedAgain = window.prompt(`Type This Email: "${user?.email}" To Confirm`);
            if (processedAgain === user?.email) {
                fetch(`https://best-care-server.vercel.app/users/admin/${user?._id}`, {
                    method: 'PUT',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            toast.success(`${user?.name} Is An ${!user?.role || user?.role === 'User' ? 'Admin' : 'User'} Now`);
                            refetch();
                        }
                    })
            }
            else {
                toast.error(`${!user?.role || user?.role === 'User' ? 'Allow Admin' : 'Remove Admin'} Operation Was Unsuccessfull`);
            }
        }
    };

    return (
        <div>
            <h2 className="text-2xl mb-6">All Users</h2>
            {/* All Users Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <th className='text-4xl text-warning'>{user?.role === 'Admin' && <><FaCrown /></>}</th>
                                <th>
                                    {
                                        user?.photoURL ?
                                            <img src={user?.photoURL} alt="" className='h-10 w-10 rounded-full' />
                                            : <FaUser className='text-4xl text-secondary' />
                                    }
                                </th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {
                                        user?.role === 'Admin'
                                            ? <button onClick={() => handleAllowAdmin(user)} className="btn btn-error btn-sm text-white">Remove Admin</button>
                                            : <button onClick={() => handleAllowAdmin(user)} className="btn btn-primary btn-sm text-white">Allow Admin</button>
                                    }
                                </td>
                                <td className='flex justify-center'><FaTrash className='text-2xl text-error hover:text-red-300 my-3' /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;