import { Link } from 'react-router-dom'
import { Button } from './Button'
export const CharacterItem = ({ character }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/characters/${character?.id}`}>
        <img
          className="rounded-t-lg aspect-square object-cover object-center"
          src={character?.image}
          alt=""
          width={400}
          height={400}
        />
      </Link>
      <div className="p-5 flex flex-col justify-between gap-y-3">
        <Link to={`/characters/${character?.id}`}>
          <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">{character?.name}</h5>
        </Link>
        <Button type={'anchor'} link={`/characters/${character.id}`}>
          View details
        </Button>
      </div>
    </div>
  )
}
