import { Outlet } from "react-router-dom";
import Navbar from "@components/navbar/navbar";
import LeftBar from "@components/leftBar/leftBar";
import RightBar from "@components/rightBar/rightBar";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "@context/darkModeContext";
import { useLocation } from 'react-router-dom';
export default function DefaultLayout(){

    const {darkMode} = useContext(DarkModeContext)

    //=========================================================================================//
    //                          ДЛЯ ИЗМЕНЕНИЯ СКОЛА
    //-----------------------------------------------------------------------------------------//
    //При переходе по ссылке в React сохраняется положение экрана при скролле, 
    //потому что React Router использует HTML5 History API, который сохраняет 
    //состояние истории браузера, включая положение прокрутки страницы. Далее идет код который
    //исправляет это поведение
    //-----------------------------------------------------------------------------------------//
        const { pathname } = useLocation(); // получаем путь

        //с помощью хука useEffect отслеживаем изменение пути 
        useEffect(() => {
            window.scrollTo(0, 0); // и устанавливаем скорол в самый вверх
        }, [pathname]);
    //-----------------------------------------------------------------------
    return(
        <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
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