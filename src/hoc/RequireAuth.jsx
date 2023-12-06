import { Navigate} from 'react-router-dom'
import { Outlet } from "react-router-dom";

export default function ({children}){

    const user = sessionStorage.getItem('TOKEN');

    if(user === null){
        return <Navigate to='/login' state={{from: location.pathname}}/>
    }
    else{
        if(children === undefined) return <Outlet/>
        else return children;
    }
    
}
