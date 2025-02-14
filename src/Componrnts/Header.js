import { Link } from "react-router-dom"
import { useSearch } from "../context/SearchContext";
import { useTheme } from "../context/ThemeContext";
import sunIcon from '../utils/sun.png'
import moonIcon from '../utils/moon.png'

export default function Header(){
  const { searchQuery, setSearchQuery } = useSearch();
  const { darkMode, toggleDarkMode } = useTheme();

    return(
    <header className="header-comp">
      <Link to="/" class="logo">MY BLOG..</Link>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        className="search-input"
      />
      <nav>
          <Link to="/login">Login</Link>       { /* link ke sath to rhta h .*/ }
        <Link to="/register">Register</Link>
      </nav>
      <button
          onClick={toggleDarkMode}
          className="theme-toggler "
        >
          {darkMode ? <img src={moonIcon} style={{width:35,height:35}}/> : <img src={sunIcon} style={{width:35,height:35}}/>}
        </button>
    </header>
    );
}