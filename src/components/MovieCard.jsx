const MovieCard = ({movie}) => {

    const onFavoriteClick = () => {
        alert("Clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
            </div>
            <div className="movie-info">
                <div>
                    <h3 className="movie-title">{movie.title}</h3>
                    <small style={{color: "red"}}>{movie.release_date}</small>
                </div>
                <button className="like-btn" onClick={onFavoriteClick}>❤</button>
            </div>
        </div>
    )
}

export default MovieCard