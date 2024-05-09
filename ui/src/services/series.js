const { VITE_PYTHON_API_URL } = import.meta.env

export const getSeries = async () => {
    const res = await fetch(`${VITE_PYTHON_API_URL}/movies`)
    const jsonResponse = await res.json()
    const { series } = await jsonResponse
    return series
}

export const createSerie = async (serie) => {
    const res = await fetch(`${VITE_PYTHON_API_URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(serie),
    })
    const jsonResponse = await res.json()
    const { serie_id } = await jsonResponse
    return serie_id
}
