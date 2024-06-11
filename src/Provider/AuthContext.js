import { createContext, useContext } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    <AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthProvider;