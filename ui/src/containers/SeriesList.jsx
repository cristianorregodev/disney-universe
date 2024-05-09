import React from 'react'
import { useSelector } from 'react-redux'
import { MovieItem } from '../components/MovieItem'

export const SeriesList = () => {
    const series = useSelector((state) => state.series)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {series?.map((movie) => (
                <MovieItem key={movie.id} movie={movie} detailsPath={'series'} />
            ))}
        </div>
    )
}
