import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PreLoginRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated === false) return element
    else return <Navigate to={'/'} />
}
