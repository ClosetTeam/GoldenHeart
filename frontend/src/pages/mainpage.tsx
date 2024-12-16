import "./mainpage.css"
import React from 'react';
import myimg from "../assets/img.png"
import Header from "../components/header/Header.tsx";
export default function Mainpage (){

    return (
        <>
            <Header/>
            <div className={"bodymain"}>
                <div className={"mainbtnframe"}>
                    <h1>Каждое животное заслуживает дом</h1>
                    <button className={"mainbtn"}>Выбрать животного</button>
                </div>

               <div className={"photo"}>
                   <img src = {myimg}/>
               </div>
            </div>
        </>
    )
}