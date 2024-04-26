import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
export const ProtectedRoute = ({ user }) => {
  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
