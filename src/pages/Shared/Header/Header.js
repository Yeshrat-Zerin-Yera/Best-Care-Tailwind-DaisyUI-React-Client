import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // Nav Menu
    const navMenu = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
        {
            user?.uid ? <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link onClick={logOut} className='btn btn-primary btn-outline'>Sign Out</Link></li>
            </> : <li><Link to='/signin' className='btn btn-primary btn-outline'>Sign In</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
            {/* Start */}
            <div className="navbar-start">
                {/* Dropdown */}
                <div className="dropdown">
                    {/* Dropdown Bar */}
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* Dropdown Menu */}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                {/* Brand Name */}
                <Link to='/' className="btn btn-ghost normal-case text-xl">Best Care</Link>
            </div>
            {/* End Menu */}
            <div className="navbar-end w-full hidden lg:flex">
                <ul className="menu menu-horizontal px-1 justify-end">
                    {navMenu}
                </ul>
            </div>
            {/* Dashboard Sidebar Bar */}
            <div className='navbar-end lg:hidden'>
                <label tabIndex={1} htmlFor='dashboard-drawer' className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;