import './App.css'
import MovieCard from "./components/MovieCard"
import Home from "./pages/Home.jsx"
import {Routes, Route} from "react-router";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

  return (
      <>
          <NavBar/>
          <main className="App">
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/favorites" element={<Favorites/>} />
              </Routes>
          </main>
      </>
  )
}

export default App
