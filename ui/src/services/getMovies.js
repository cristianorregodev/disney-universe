const { VITE_API_URL } = import.meta.env

export const getMovies = async () => {
  const response = await fetch(`${VITE_API_URL}/movies`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await response.json()
  return data
}
