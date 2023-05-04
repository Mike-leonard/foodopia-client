import React, { useState } from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import { ClipLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {

    let [color, setColor] = useState("#00000");
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="sweet-loading flex justify-center">
            <ClipLoader
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>

    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;