const API_KEY = "028f1d5670626e2b266e0afdfdc04435"
const API_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
    const date = await response.json()
    return date.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const date = await response.json()
    return date.results
}