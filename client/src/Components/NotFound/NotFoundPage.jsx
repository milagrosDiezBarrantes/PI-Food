import React from "react";
import './NotFoundPage.css'
import gif1 from './img/gif1.gif'


export default function NotFoundPage(){
    return(
        <div className="div_notFound">
            <h1 className="title_h1">We're sorry! What you are looking for has not been found. Try typing the exact name</h1>
            <img className="gif1" src={gif1} alt="piz" />
        </div>
    )
}