import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();
    // Loading
    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    // User
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;