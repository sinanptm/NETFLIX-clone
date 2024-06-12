import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../utils/firebase/config';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe; 
    }, []);

    const value = {
        user,
        setUser,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
