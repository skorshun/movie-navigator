import {useMovieContext} from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard.jsx"

const Favorites = () => {
    const {favorites} = useMovieContext()

    const renderContent = () => {
        if (favorites.length > 0) {
            return (
                <div className="movie-grid">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )
        }

        return (
            <>
                <h2>No favorites movies yet!</h2>
                <p>Start adding movies to your favorites and they will appear here!</p>
            </>
        )
    }

    return (
        <div className="container">
            <h1>Your Favorites</h1>
            {renderContent()}
        </div>
    )
}

export default Favorites