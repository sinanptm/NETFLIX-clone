import React, { useState } from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import { Logo, Avatar } from "../../utils/URLs";
import { useSearch } from "../../Contexts/SearchContext";
import { SignUpButton } from "../../assets/SignUpButton";
import { useAuth } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase/config";
import { signOut } from "firebase/auth";

function NavBar({ setSignUp, signUp, loc }) {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { searchResults, handleSearch } = useSearch();
  const { user, setUser } = useAuth();

  const handleSignOut = async () => {
    try {
        await signOut(auth);
        setUser(null);
    } catch (error) {
        console.error("Failed to sign out:", error);
    }
};

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
        <Link to={"/home"}>
          <img className="logo" src={Logo} alt="Netflix Logo" />
        </Link>
        <SignUpButton setSignUp={setSignUp} loc={loc} signUp={signUp} />
      </div>
    );
  }

  return (
    <div className="navbar">
      <Link to={"/home"}>
        <img className="logo" src={Logo} alt="Netflix Logo" />
      </Link>
      <div className="nav-links">
        {[
          { href: "#home", label: "Home" },
          { href: "#tv-shows", label: "TV Shows" },
          { href: "#movies", label: "Movies" },
          { href: "#news-popular", label: "News & Popular" },
          { href: "#my-list", label: "My List" },
          { href: "#browse-by-language", label: "Browse by Language" },
        ].map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <button className="search-toggle" onClick={handleClick}>
        <FaSearch color="#fff" className="search-icon" />
      </button>
      <input
        type="text"
        className={`search-input ${showInput ? "show" : ""}`}
        placeholder="Enter search term..."
        value={searchTerm}
        onBlur={()=>setShowInput(false)}
        onChange={handleChange}
      />
      <ShowSuggestions />
      <div className="drop">
        <img className="avatar" src={Avatar} alt="Avatar" />
        <div className="drop-content">
          <a href="#profile">Profile</a>
          <a href="#sign-out" onClick={handleSignOut}>Sign Out</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
