import {  createContext, useContext, useState } from "react";

// 1. Create the Context container
const authContext = createContext(null);
// 2. Create the Provider component to wrap your app
export const authProvider = ({children}) => {

    const [token , setToken] = useState(null); /// saving the token in memory

    return(
        <authContext.Provider value={{token , setToken}}>
        {children} </authContext.Provider>

        );

}
// 3. Create a custom hook for easy access
export const useAuth = () => useContext(authContext);