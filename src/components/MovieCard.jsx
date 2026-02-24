import {formatDate} from '../utils/date'
import posterNotFoundImage from '../assets/poster-not-found.png'

const MovieCard = ({movie}) => {

    const onFavoriteClick = () => {
        alert("Clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path
                    ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    : <img alt="Poster not found" src={posterNotFoundImage}/>
                }
            </div>
            <div className="movie-info">
                <div>
                    <h3 className="movie-title">{movie.title}</h3>
                    {movie?.release_date && <p className="movie-release-date">{formatDate(movie?.release_date)}</p>}
                </div>
                <button className="like-btn" onClick={onFavoriteClick}>❤</button>
            </div>
        </div>
    )
}

export default MovieCard