import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        setSeries(state, action) {
            return action.payload
        },
        addSeries(state, action) {
            state.push(action.payload)
        },
        removeSeries(state, action) {
            return state.filter((serie) => serie.id !== action.payload)
        },
    },
})

export const { setSeries, addSeries, removeSeries } = seriesSlice.actions
export default seriesSlice.reducer
