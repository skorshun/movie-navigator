import MovieCard from "../components/MovieCard.jsx";
import {useEffect, useState} from "react";
import {searchMovies, getPopularMovies} from "../services/api"
import SearchSection from "../components/SearchSection.jsx";

const Home = () => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleSearch = async (value) => {
        const query = value.toLowerCase().trim()

        if (!query) return;

        const movies = await searchMovies(query);
        setMovies([...movies])
    }

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    return (
        <>
            <SearchSection onSearch={handleSearch} />
            <div className="container">
                <h1>Trending Movies</h1>

                {error && <div className="error-message">{error}</div>}

                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="movie-grid">
                        {movies.map(movie => <MovieCard movie={movie}/>)}
                    </div>
                )}
            </div>
        </>
    )
}

export default Home