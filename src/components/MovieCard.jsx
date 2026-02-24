import {formatDate} from '../utils/date'
const MovieCard = ({movie}) => {

    const onFavoriteClick = () => {
        alert("Clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className="movie-info">
                <div>
                    <h3 className="movie-title">{movie.title}</h3>
                    <small>{formatDate(movie?.release_date)}</small>
                </div>
                <button className="like-btn" onClick={onFavoriteClick}>❤</button>
            </div>
        </div>
    )
}

export default MovieCard