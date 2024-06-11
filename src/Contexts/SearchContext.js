import React, { createContext, useState, useContext } from "react";
import HeapSort from "../utils/HeapSort";

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
}

const SearchProvider = ({ children }) => {
    const [storedMovies, setStoredMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        if (query.trim() !== '') {
            const res = storedMovies.filter(item => {
                if (item.title) {
                    return item.title.toLowerCase().includes(query.toLowerCase());
                }
                if (item.name) {
                    return item.name.toLowerCase().includes(query.toLowerCase());
                }
                if (item.original_title) {
                    return item.original_title.toLowerCase().includes(query.toLowerCase());
                }
                return false;
            });

            setSearchResults(HeapSort(res));
        } else {
            setSearchResults([]);
        }
    };

    return (
        <SearchContext.Provider value={{ storedMovies, setStoredMovies, searchResults, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchProvider;
