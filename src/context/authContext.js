import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

export function AuthContextProvider({children}){
    const [isAuthenticated, setAuthenticated] = useState(false)
    // useState(sessionStorage.getItem('success'));
    console.log(isAuthenticated)
    const login = useCallback(function () {
        setAuthenticated(true)
    },[])
    const logout = useCallback(function () {
        setAuthenticated(false)
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('success')
        sessionStorage.removeItem('user')
    },[])
    const value = useMemo(
        ()=>({
            login,
            logout,
            isAuthenticated,
        }),
        [login, logout, isAuthenticated]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export function useAuthContext(){
    return useContext(AuthContext)
};
