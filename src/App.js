import React from "react";
import Body from "./Components/Body";
import './App.css';
import SearchProvider from "./Provider/SearchProvider";

const App = () => {
  return (
    <SearchProvider>
      <Body className={'App'} />
    </SearchProvider>
  )
}

export default App;
