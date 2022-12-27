import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard');

    return (
        <div className='h-full w-full '>
            Dashboard
        </div>
    );
};

export default Dashboard;