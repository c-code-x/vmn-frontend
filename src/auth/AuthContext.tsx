import { createContext, useState, useContext } from 'react';

const AuthContext = createContext({} as any);
export const AuthProvider = ({children}:any) => {
    const [user, setUser] = useState(null);
    const login = (data: any) => { 
        
        setUser(data);
        console.log("user form auth:",data);
    };
    const logout = () => {
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider>
    );;
};
export const useAuth = () => useContext(AuthContext);

