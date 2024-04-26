const { VITE_API_URL } = import.meta.env
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { StyledEngineProvider } from '@mui/material/styles'
import { Button } from '@mui/material'
import { useGetData } from '../hooks/useGetData'
import { charactersQuery } from '../helpers/querys'
export const Filter = ({ initialState, setData, resource, setLoading }) => {
  const [moviesList, setMoviesList] = useState([])
  const { data } = useGetData(`${VITE_API_URL}/movies`, 'films')
  const [filter, setFilter] = useState(initialState)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFilter({ ...filter, [name]: value })
  }
  const handleFilter = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(`${VITE_API_URL}/${resource?.path}?${charactersQuery(filter)}`)
      const responseJson = await response.json()

      setData(responseJson[resource?.term])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching characters:', error)
    }
  }

  useEffect(() => {
    if (data) {
      setMoviesList(data?.map((movie) => ({ value: movie.id, label: movie.title })))
    }
  }, [data])
  return (
    <StyledEngineProvider injectFirst>
      <form
        onSubmit={(e) => handleFilter(e)}
        className="bg-gray-200 p-4 rounded-lg shadow-lg flex gap-2 justify-center"
      >
        <TextField
          id="name"
          name="name"
          label="Character name"
          variant="outlined"
          size="small"
          color="primary"
          onChange={handleChange}
          helperText="Input a character name"
        />
        <TextField
          id="age"
          name="age"
          label="Character age"
          variant="outlined"
          size="small"
          color="primary"
          onChange={handleChange}
          helperText="Input an age value"
        />
        <TextField
          id="movieId"
          name="movieId"
          select
          label="Movie"
          variant="outlined"
          size="small"
          color="primary"
          onChange={handleChange}
          helperText="Select a movie"
        >
          {moviesList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
          <Button variant="contained" type="sibmit">
            Search
          </Button>
        </div>
      </form>
    </StyledEngineProvider>
  )
}
