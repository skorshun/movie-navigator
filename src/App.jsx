import './App.css'
import Home from "./pages/Home.jsx"
import {Routes, Route} from "react-router";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import {MovieProvider} from "./contexts/MovieContext";

function App() {

  return (
      <MovieProvider>
          <NavBar/>
          <main className="App">
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/favorites" element={<Favorites/>} />
              </Routes>
          </main>
      </MovieProvider>
  )
}

export default App
