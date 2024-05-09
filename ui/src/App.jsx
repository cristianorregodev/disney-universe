import React, { useEffect } from 'react'
import { AppRouter } from './routes/AppRouter'
import { getSeries } from './services/series'
import { useDispatch } from 'react-redux'
import { setSeries } from './redux/seriesSlice'

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getSeries().then((series) => {
            dispatch(setSeries(series))
        })
    }, [])
    return <AppRouter />
}
