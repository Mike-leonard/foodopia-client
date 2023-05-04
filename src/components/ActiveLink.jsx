import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg"
                    : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;