import { Outlet } from "react-router-dom";
import Navbar from "@components/navbar/navbar";
import LeftBar from "@components/leftBar/leftBar";
import RightBar from "@components/rightBar/rightBar";

export default function DefaultLayout(){
    return(
        <div className="theme-dark">
            <Navbar/>
            <div style={{display:'flex'}}>
                <LeftBar/>
                <div style={{flex: 6 }}>
                    <Outlet/>
                </div>
                <RightBar/>
            </div>
        </div>
    )
}