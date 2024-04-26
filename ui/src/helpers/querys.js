export const charactersQuery = ({ name, age, movieId }) => {
  const params = new URLSearchParams()
  if (name) params.append('name', name)
  if (age) params.append('age', age)
  if (movieId) params.append('movieId', movieId)
  return params.toString()
}
