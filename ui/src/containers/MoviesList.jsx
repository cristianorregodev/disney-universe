const { VITE_API_URL } = import.meta.env
import { Card } from '../components/Card'
import { useGetData } from '../hooks/useGetData'

export const MoviesList = () => {
  const { error, loading, data } = useGetData(`${VITE_API_URL}/movies`, 'films')
  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-gray-500">Loading...</p>}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {data?.slice(0, 4).map((movie) => (
            <Card key={movie.id} data={movie} />
          ))}
        </div>
      )}
    </>
  )
}
