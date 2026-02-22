import './App.css'
import MovieCard from "./components/MovieCard";

function App() {

  return (
      <>
          <nav className="navbar">
              <a href="#" className="logo">MOVIE NAV</a>
              <div className="search-container">
                  <input type="text" className="search-bar" placeholder="Search movies..."/>
              </div>
              <div className="nav-spacer"></div>
          </nav>
          <div className="container">
              <h1>Trending Movies</h1>
              <div className="movie-grid">
                  <MovieCard
                      movie={{title: "test film", release_date: 1984, url: "https://m.media-amazon.com/images/I/61qCgQZyhOL.jpg"}}
                  />
                  <MovieCard
                      movie={{title: "test film", release_date: 1984, url: "https://m.media-amazon.com/images/I/61qCgQZyhOL.jpg"}}
                  />
              </div>
          </div>
      </>
  )
}

export default App
