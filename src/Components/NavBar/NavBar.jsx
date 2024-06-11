import React, { useState } from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import { Logo, Avatar } from "../../utils/URLs";
import { useSearch } from "../../Contexts/SearchContext";
import { useAuth } from "../../Contexts/AuthContext";

function NavBar() {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { searchResults, handleSearch } = useSearch();
  const { user } = useAuth();
 
  const handleClick = (e) => {
    e.preventDefault();
    setShowInput(!showInput);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  const ShowSuggestions = () => {
    if (!showInput || searchResults.length === 0) {
      return null;
    }

    return (
      <div className="search-results">
        {searchResults.map((result, index) => (
          <div key={index} className="search-result-item">
            {result.title || result.name || result.original_title}
          </div>
        ))}
      </div>
    );
  };

  if (!user) {
    return (
      <div className="navbar">
        <img className="logo" src={Logo} alt="Netflix Logo" />
        <button className="signUp" >Sign Up</button>
      </div>
    );
  }


  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Netflix Logo" />
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#tv-shows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#news-popular">News & Popular</a>
        <a href="#my-list">My List</a>
        <a href="#browse-by-language">Browse by Language</a>
      </div>
      <FaSearch color="#fff" className="search" onClick={handleClick} />
      <input
        type="text"
        className={`searchInput ${showInput ? "show" : ""}`}
        placeholder="Enter search term..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ShowSuggestions />
      <img className="avatar" src={Avatar} alt="Avatar" />
    </div>
  );
}

export default NavBar;
