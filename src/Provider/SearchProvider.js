import { createContext } from "react";

const SearchContext= createContext()

const useSearch = ()=>{
    return useContext(SearchProvider)
}

export default SearchProvider = ({children})=>{
    return <SearchContext.Provider>{children}</SearchContext.Provider>
}