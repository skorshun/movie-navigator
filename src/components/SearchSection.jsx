import {useState} from "react"

const SearchSection = ({onSearch}) => {
    const [query, setQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(query)
    }

    return (
        <div className="search-section">
            <form onSubmit={handleSearch} className="search-wrapper">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for movies, actors, directors..."
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
                <button className="search-btn">
                    <i>🔍</i>
                </button>
            </form>
        </div>
    )
}

export default SearchSection