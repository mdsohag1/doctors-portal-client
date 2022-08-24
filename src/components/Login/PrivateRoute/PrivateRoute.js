import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { LoginContext } from './../../App';

const PrivateRoute = ({ children }) => {
    const [loggedinUser, setLoggedinUser] = useContext(LoginContext)
    const location = useLocation();
    if (!loggedinUser.email) {
        return <Navigate to={'/login'} state={{ path: location.pathname }} replace ></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoute;