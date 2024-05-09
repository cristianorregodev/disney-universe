const { VITE_API_URL } = import.meta.env
import { useParams } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { MovieItem } from '../components/MovieItem'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

export const CharacterDetails = () => {
    const { id } = useParams()
    const { token } = useSelector((state) => state.auth)

    const { data, loading, error } = useGetData(`${VITE_API_URL}/characters/${id}`, 'character', token)

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && (
                <section className="max-w-screen-xl mx-auto px-4 py-8">
                    <article className="md:flex md:gap-x-8 ">
                        <picture className="rounded-lg overflow-hidden w-96 h-96">
                            <img
                                src={data?.image}
                                alt={data?.name}
                                width={300}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </picture>
                        <aside>
                            <h1 className="text-gray-700 dark:text-white text-3xl font-bold mb-3">{data?.name}</h1>

                            <p className="text-gray-700 dark:text-white mb-3">
                                <span className="font-bold">Age:</span> {data?.age} años
                            </p>
                            <p className="text-gray-700 dark:text-white mb-3">
                                <span className="font-bold">Weight:</span> {data?.weight}
                            </p>
                            <p className="text-gray-700 dark:text-white mb-3">
                                <span className="font-bold">Resume:</span> {data?.history}
                            </p>
                        </aside>
                    </article>
                    <h2 className="text-2xl font-bold my-12 text-gray-700 dark:text-white">
                        Movies by <span className="text-blue-500">{data?.name}</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {data?.films?.map((movie) => (
                            <MovieItem key={movie.id} movie={movie} />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}
