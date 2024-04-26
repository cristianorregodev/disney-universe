import { useState, useEffect } from 'react'

export const useGetData = (url, resource, token) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url, {
      headers: {
        'd-token': token,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data[resource]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [url, resource])

  return { data, loading, error }
}
