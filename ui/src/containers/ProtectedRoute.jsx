import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useSelector } from 'react-redux'

export const ProtectedRoute = ({ user }) => {
    const isAuth = useSelector((state) => state.auth)
    console.log('auth', isAuth)

    if (!isAuth) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
