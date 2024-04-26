const { VITE_API_URL } = import.meta.env
import { CharacterItem } from '../components/CharacterItem'
import { useGetData } from '../hooks/useGetData'

export const CharactersList = () => {
  const { error, loading, data } = useGetData(`${VITE_API_URL}/characters`, 'characters')

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-gray-500">Loading...</p>}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {data?.slice(0, 4).map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      )}
    </>
  )
}
