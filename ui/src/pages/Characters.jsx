const { VITE_API_URL } = import.meta.env
import { useEffect, useState } from 'react'
import { Filter } from '../components/Filter'
import { useGetData } from '../hooks/useGetData'
import { CharacterItem } from '../components/CharacterItem'
import { Loader } from '../components/Loader'

export const Characters = () => {
  const [characters, setCharacters] = useState(null)
  const [loading, setLoading] = useState(true)

  const { data, error } = useGetData(`${VITE_API_URL}/characters`, 'characters')

  useEffect(() => {
    if (data) setLoading(false)
    setCharacters(data)
  }, [data])
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <Filter
        setData={setCharacters}
        setLoading={setLoading}
        resource={{ path: 'characters', term: 'characters' }}
        initialState={{ name: null, age: null, movie: null }}
      />
      {error && <p className="text-gray-500">Error</p>}
      {loading && <Loader />}

      {characters?.length > 0 && !loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {characters?.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700 dark:text-white mt-8 font-bold">No matches found for your search</p>
      )}
    </section>
  )
}
