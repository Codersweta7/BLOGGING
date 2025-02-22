import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { Navigate } from 'react-router-dom';

export const SecuredRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) return element
    else return <Navigate to={'/login'} />
}
