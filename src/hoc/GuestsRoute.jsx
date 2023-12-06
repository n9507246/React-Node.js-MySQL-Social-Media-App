import { Navigate} from 'react-router-dom'
import { Outlet } from "react-router-dom";
export default function ({children}){

    const user = sessionStorage.getItem('TOKEN');

    if(user === null && children === undefined){
        return < Outlet />
    }
    
    if(user === null && children !== undefined){
        return children
    }

    return <Navigate to='/' state={{from: location.pathname}}/>
}
