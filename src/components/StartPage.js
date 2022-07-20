import React from "react"



export default function StartPage(){

    let [startPage, setStartPage] = React.useState("start-page")

    return (
        <div className={startPage}>
        <div className="logo-home">
            <img src="assets/zap.png" alt=""/>
            <h1>ZapRecall</h1>
        </div>
        <div className="button-start" onClick={() => setStartPage("hidden")}>Iniciar Recall!</div>
        </div>
    )

}

