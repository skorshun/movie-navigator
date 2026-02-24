import {Link} from "react-router";

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="logo">MOVIE NAV</a>
            <div className="nav-links">
                <a href="/" className="nav-link">Home</a>
                <Link className="nav-link" to="/favorites">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar