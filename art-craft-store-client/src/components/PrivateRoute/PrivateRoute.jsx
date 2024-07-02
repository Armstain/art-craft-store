import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider.jsx';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={location?.pathname || '/'} />
    }

    if (loading) {
        return <p className='text-5xl text-center'>Loading...</p>
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;