const { VITE_API_URL } = import.meta.env
import { useParams } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { CharacterItem } from '../components/CharacterItem'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const MovieDetails = () => {
  const { id } = useParams()
  const {
    isAuth: { token },
  } = useContext(AuthContext)
  const { data, loading, error } = useGetData(`${VITE_API_URL}/movies/${id}`, 'movie', token)
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <section className="max-w-screen-xl mx-auto px-4 py-8">
          <article className="md:flex md:gap-x-8 ">
            <picture className="rounded-lg overflow-hidden min-w-96 h-[500px]">
              <img
                src={data?.image}
                alt={data?.title}
                width={300}
                height={500}
                className="object-cover w-full h-full"
              />
            </picture>
            <aside>
              <h1 className="text-gray-700 dark:text-white text-3xl font-bold mb-3">{data?.title}</h1>
              <p className="text-gray-700 dark:text-white mb-3">
                <span className="font-bold">Date:</span> {data?.release}
              </p>
              <p className="flex items-center gap-x-2 text-gray-700 dark:text-white mb-3">
                <span className="font-bold">Rating: </span>{' '}
                <span className="flex items-center">
                  {data?.stars}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </span>
              </p>
              <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-white">
                Characters in <span className="text-blue-500">{data?.title}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {data?.characters?.map((character) => (
                  <CharacterItem key={character.id} character={character} />
                ))}
              </div>
            </aside>
          </article>
        </section>
      )}
    </>
  )
}
