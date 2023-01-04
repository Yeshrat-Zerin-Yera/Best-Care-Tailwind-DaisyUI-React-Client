import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Header from '../../pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            {/* Header */}
            <Header></Header>
            {/* Drawer Content */}
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                {/* Main Content */}
                <div className="drawer-content lg:rounded-tl-lg bg-[#F1F5F9] p-8 sm:p-14">
                    <Outlet></Outlet>
                </div>
                {/* Sidebar Content */}
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    {/* Sidebar Items */}
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='mx-3'><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li className='mx-3'><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li className='mx-3'><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
                                <li className='mx-3'><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;