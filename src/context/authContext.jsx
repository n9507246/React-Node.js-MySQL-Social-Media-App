import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('TOKEN')) || null
    )

    useEffect(()=>{
        localStorage.setItem('TOKEN', JSON.stringify(currentUser))
    }, [currentUser])

    const login = () => {
        setCurrentUser({name:'ass'})
    } 
    const logout = () => {
        setCurrentUser(null)
    } 


    return <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>

}