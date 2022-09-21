import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PublicRoute = ({ restrict = false }) => {

    const auth = useSelector(state => state.auth)
    let location = useLocation();

    return (
        <>
            {auth.isLogin && restrict ?
                <Navigate to="/" state={{ from: location }} />
                :
                <Outlet />
            }
        </>
    )
}

export default PublicRoute
