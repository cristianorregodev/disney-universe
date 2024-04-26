const { VITE_AUTH_ENDPOINT } = import.meta.env
export const authenticateUser = async ({ credentials }) => {
  const response = await fetch(VITE_AUTH_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })
  const data = await response.json()
  return data
}
