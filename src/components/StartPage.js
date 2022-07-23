import React from "react"
import zaplogo from "../assets/zap.png"



export default function StartPage(){

    let [startPage, setStartPage] = React.useState("start-page")

    return (
        <div className={startPage}>
        <div className="logo-home">
            <img src={zaplogo} alt=""/>
            <h1>ZapRecall</h1>
        </div>
        <div className="button-start" onClick={() => setStartPage("hidden")}>Iniciar Recall!</div>
        </div>
    )

}

