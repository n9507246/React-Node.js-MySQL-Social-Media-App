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
        setCurrentUser({id: 1, name: 'BAD ASS', profile_picture: 'https://cs7.pikabu.ru/post_img/big/2014/07/22/6/1406017582_1886645288.jpg'})
    } 
    const logout = () => {
        setCurrentUser(null)
    } 


    return <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>

}