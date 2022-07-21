import React from "react"
import Question from "./Question"


export default function RunPage() {

    const [wrong, setWrong] = React.useState(0);
    const [qtd, setQtd] = React.useState(0);
    const [icon1, setIcon1] = React.useState("");
    const [icon2, setIcon2] = React.useState("");
    const [icon3, setIcon3] = React.useState("");
    const [icon4, setIcon4] = React.useState("");
    let [msgBom, setMsgBom] = React.useState("hidden")
    let [msgRuim, setMsgRuim] = React.useState("hidden")

    function checkWrong(ans){
        if(wrong > 0 || ans === "close-circle"){
            setMsgRuim("end-message")
        } else {
            setMsgBom("end-message")
        }
    }

    function iconsBottom(ans) {
        if(icon1===""){
            setIcon1(ans)
        } else if (icon2===""){
            setIcon2(ans)
        } else if (icon3===""){
            setIcon3(ans)
        } else if (icon4===""){
            checkWrong(ans)
            setIcon4(ans)
        }
    }

    function wrongAnswer() {
		setWrong(wrong+1);
	}

	function questionsDone() {
		setQtd(qtd+1);
	}

    let questionsObj=[
        {question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript'},
        {question: 'O React é __ ', answer: 'uma biblioteca JavaScript para construção de interfaces'},
        {question: 'Componentes devem iniciar com __?', answer: 'letra maiúscula'},
        {question: 'Podemos colocar __ dentro do JSX', answer: 'expressões'},
        {question: 'O ReactDOM nos ajuda __ ', answer: 'interagindo com a DOM para colocar componentes React na mesma'},
        {question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências'},
        {question: 'Usamos props para __', answer: 'passar diferentes informações para componentes '},
        {question: 'Qual a resposta para a Vida, o Universo e Tudo o Mais?', answer: '42'}]
    
    let questionsRun=[]

    function randomizer(){
        return Math.random() - 0.5
    }

    function shuffle(){
        questionsObj.sort(randomizer)
        for (let i = 0; i<4; i++){
            questionsRun.push(questionsObj[i])
        }
    }
    shuffle()

    return (
        <div className="run-page">
            <div className="logo-run" onClick={reload}>
                <img src="assets/zap.png" alt=""/>
                <h1>ZapRecall</h1>
            </div>
            <div className="questions">
                {questionsRun.map((qObj, index) => (<Question index={index + 1}
                                                                     question={qObj.question} 
                                                                     answer={qObj.answer} 
                                                                     qtd={qtd}
                                                                     questionsDone={questionsDone}
                                                                     iconsBottom={iconsBottom}
                                                                     wrongAnswer={wrongAnswer}/>))}
                                                                   
            </div>
            <div className="progress-bar">
                <div class="end-message" className={msgBom}>
                    <strong>Parabéns!</strong>
                    <span>Você não esqueceu nenhum flashcard!</span>
                </div>
                <div class="end-message" className={msgRuim}>
                    <strong>Putz...</strong>
                    <span>Ainda faltam alguns...</span>
                    <span>Mas não desista!</span>
                </div>
                <div className="progress-count">{qtd}/4 concluidos</div>
                <div className="progress-icons">
                    <ion-icon name={icon1}></ion-icon>
                    <ion-icon name={icon2}></ion-icon>
                    <ion-icon name={icon3}></ion-icon>
                    <ion-icon name={icon4}></ion-icon>
                </div>
            </div>
        </div>
    )
}

function reload(){
    window.location.reload()
}