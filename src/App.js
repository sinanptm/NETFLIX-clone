import React from "react";
import './App.css';
import SearchProvider from "./Provider/SearchContext";
import AppRouter from "./AppRounter";

const App = () => {
  return (
    <SearchProvider>
      <AppRouter />
    </SearchProvider>
  )
}

export default App;
