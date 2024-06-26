import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { authenticateUser } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setAuth } from '../redux/authSlice'

export const Login = () => {
    const [credentials, setCredentials] = useState({})
    const [error, setError] = useState('')
    //const { activateAuth } = useContext(AuthContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCredentials = (event) => {
        const { name, value } = event.target
        setCredentials({ ...credentials, [name]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        authenticateUser({ credentials }).then((data) => {
            if (data.user) {
                dispatch(setAuth(data.user))
                //activateAuth(data.user)
                return navigate('/')
            }
            setError(data)
        })
    }
    return (
        <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                    onChange={handleCredentials}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleCredentials}
                />
            </div>
            {error && <p className="text-red-600 text-sm text-center">{error.message}</p>}

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Login
            </button>
        </form>
    )
}
