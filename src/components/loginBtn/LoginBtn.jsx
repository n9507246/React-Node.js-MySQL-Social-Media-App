import { useNavigate } from "react-router-dom"

export default function(){
    const navigate = useNavigate()
    return(
        <button onClick={
            (e) => {
                e.preventDefault()
                sessionStorage.setItem('TOKEN', 'asss')
                navigate('/', {replace:true})
            }
        }>Login</button>
    )
}