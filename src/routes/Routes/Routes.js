import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import Main from '../../layouts/Main/Main';
import Appointment from '../../pages/Appointment/Appointment/Appointment';
import AddDoctor from '../../pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from '../../pages/Dashboard/AllUsers/AllUsers';
import ManageDoctor from '../../pages/Dashboard/ManageDoctors/ManageDoctors';
import Home from '../../pages/Home/Home/Home';
import SignIn from '../../pages/SignUp&SignIn/SignIn/SignIn';
import SignUp from '../../pages/SignUp&SignIn/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Payment from '../../pages/Dashboard/Payment/Payment';
import MyAppointments from '../../pages/Dashboard/MyAppointments/MyAppointments';
import DisplayError from '../../pages/Shared/DisplayError/DisplayError';

const router = createBrowserRouter([
    // Main
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    },
    // Dashboard
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://best-care-server.vercel.app/bookings/${params?.id}`)
            }
        ]
    }
]);

export default router;