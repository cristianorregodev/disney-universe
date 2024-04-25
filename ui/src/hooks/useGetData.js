import { useState, useEffect } from 'react'

export const useGetData = (url, resource) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data[resource]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [url, resource])

  return { data, loading, error }
}
