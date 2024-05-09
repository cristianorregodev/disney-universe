import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(window.sessionStorage.getItem('authenticatedUser'))

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            window.sessionStorage.setItem('authenticatedUser', JSON.stringify(action.payload))
            const user = window.sessionStorage.getItem('authenticatedUser')
            return JSON.parse(user)
        },
        removeAuth(state, action) {
            window.sessionStorage.removeItem('authenticatedUser')
            return null
        },
    },
})

export const { setAuth, removeAuth } = authSlice.actions
export default authSlice.reducer
