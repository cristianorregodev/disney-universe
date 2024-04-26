import { Link } from 'react-router-dom'
import { Button } from './Button'
export const MovieItem = ({ movie }) => {
  console.log(movie)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="rounded-t-lg aspect-[9/16] object-cover object-center max-h-[400px]"
          src={movie?.image}
          alt=""
          width={400}
          height={300}
        />
      </Link>
      <div className="p-5 flex flex-col justify-between gap-y-3">
        <ul className=" flex justify-between text-gray-700 dark:text-gray-400">
          <li className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
            Year: {movie?.release}
          </li>
          <li className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
            Rating: {movie?.stars}
          </li>
        </ul>
        <a href="#">
          <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">{movie?.title}</h5>
        </a>
        <Button type={'anchor'} link={`/movies/${movie?.id}`}>
          View details
        </Button>
      </div>
    </div>
  )
}
