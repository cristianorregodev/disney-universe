import { Button } from './Button'
export const Card = ({ data, starless }) => {
  console.log(data)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg aspect-[400/300] object-cover"
          src="https://raw.githubusercontent.com/Hvmble/test/73235cb5ae268bbd4963e4c3aab5a0b3cf17abdf/web-app/public/placeholder.svg"
          alt=""
          width={400}
          height={300}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.release}</p>
        <Button />
      </div>
    </div>
  )
}
