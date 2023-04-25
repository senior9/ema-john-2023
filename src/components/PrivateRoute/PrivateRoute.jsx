import React from 'react';
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(authContext);
    const loaction = useLocation();
    console.log(loaction);

    if(loading){
        return <div>Loading........................</div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:loaction}} replace></Navigate>
};

export default PrivateRoute;