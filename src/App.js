import React from "react";
import './App.css';
import SearchProvider from "./Contexts/SearchContext";
import AuthProvider from "./Contexts/AuthContext";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <AppRouter />
      </SearchProvider>
    </AuthProvider>
  )
}

export default App;
