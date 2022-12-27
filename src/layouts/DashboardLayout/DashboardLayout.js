import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            {/* Header */}
            <Header></Header>
            {/* Drawer Content */}
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                {/* Main Content */}
                <div className="drawer-content rounded-tl-lg bg-[#F1F5F9] p-14">
                    <Outlet></Outlet>
                </div>
                {/* Sidebar Content */}
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    {/* Sidebar Items */}
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;