import { configureStore } from '@reduxjs/toolkit'
import seriesReducer from './seriesSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        series: seriesReducer,
        auth: authReducer,
    },
})
