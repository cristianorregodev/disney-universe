const { VITE_API_URL } = import.meta.env
import { MovieItem } from '../components/MovieItem'
import { useGetData } from '../hooks/useGetData'
import { Loader } from '../components/Loader'

export const MoviesList = () => {
  const { error, loading, data } = useGetData(`${VITE_API_URL}/movies`, 'films')
  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <Loader />}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {data?.slice(0, 4).map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  )
}
