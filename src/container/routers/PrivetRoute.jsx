import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivetRoute = () => {

    let location = useLocation();
    const auth = useSelector(state => state.auth)
    console.log(auth.isLogin)

    return (
        <>
            {
                auth.isLogin ?
                    <Outlet />
                    :
                    <Navigate to="/login" state={{ from: location }} />
            }
        </>
    )
}

export default PrivetRoute
