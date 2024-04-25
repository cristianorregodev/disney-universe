import { CharactersList } from '../containers/CharactersList'
import { MoviesList } from '../containers/MoviesList'
export const Home = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">Movies</h2>
      <MoviesList />
      <h2 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">Characters</h2>
      <CharactersList />
    </section>
  )
}
