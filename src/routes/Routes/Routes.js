import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import Main from '../../layouts/Main/Main';
import Appointment from '../../pages/Appointment/Appointment/Appointment';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import Error404 from '../../pages/Error404/Error404';
import Home from '../../pages/Home/Home/Home';
import SignIn from '../../pages/SignUp&SignIn/SignIn/SignIn';
import SignUp from '../../pages/SignUp&SignIn/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    // Main
    {
        path: '/',
        element: <Main></Main>,
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
            },
            {
                path: '*',
                element: <Error404></Error404>
            }
        ]
    },
    // Dashboard
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
]);

export default router;