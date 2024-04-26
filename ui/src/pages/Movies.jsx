const { VITE_API_URL } = import.meta.env
import { useEffect, useState } from 'react'
import { Filter } from '../components/Filter'
import { useGetData } from '../hooks/useGetData'
import { Loader } from '../components/Loader'
import { MovieItem } from '../components/MovieItem'

export const Movies = () => {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(true)
  const { data, error } = useGetData(`${VITE_API_URL}/movies`, 'films')
  useEffect(() => {
    if (data) setLoading(false)
    setMovies(data)
  }, [data])
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      {/* <Filter setCharacters={setCharacters} setLoading={setLoading} /> */}
      {error && <p className="text-gray-500">Error</p>}
      {loading && <Loader />}
      {movies?.length > 0 && !loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {movies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : null}
    </section>
  )
}
