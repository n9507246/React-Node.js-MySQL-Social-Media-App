import { useNavigate } from "react-router-dom"

export default function(){ 
    const navigate = useNavigate()
    return(
        <button onClick={(e) => {
            e.preventDefault();
            if(confirm("Выйти из аккаунта?")){
              sessionStorage.clear()
              navigate('/login', {replace:true})
            }
            
          }}>Logout</button>
    )
}