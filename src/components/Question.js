import React from "react"

export default function Question({question, answer, index, questionsDone, iconsBottom, wrongAnswer}){

    let [undone, setUndone] = React.useState("question-undone")
    let [open, setOpen] = React.useState("hidden")
    let [answerState, setAnswerState] = React.useState("hidden")
    let [done, setDone] = React.useState("hidden")
    let [color, setColor] = React.useState("")
    let [icon, setIcon] = React.useState("")

    return (<>
        <div class="question-undone" className={undone} onClick={() => {setUndone("hidden"); setOpen('question-open'); questionsDone()}}>
            <span> Pergunta {index}</span>
            <ion-icon name="play-outline" ></ion-icon>
        </div>
        <div class="question-open" className={open}>
            <br/>
            <span>{question}</span>
            <ion-icon name="git-compare-outline" onClick={() => {setOpen("hidden"); setAnswerState('question-answer')}}></ion-icon>
        </div>
        <div className={answerState}>
            <span>{answer}</span>
            <div className="question-result">

                <div className="red-answer" onClick={() => {
                    wrongAnswer();
                    setAnswerState("hidden"); 
                    setDone('question-done');
                    setColor('red');
                    setIcon("close-circle");
                    iconsBottom("close-circle")
                }}
                    >Não lembrei</div>

                <div className="orange-answer" onClick={() => {
                    setAnswerState("hidden");
                    setDone('question-done');
                    setColor("orange");
                    setIcon("help-circle");
                    iconsBottom("help-circle")
                    
                }}
                    >Quase não lembrei</div>

                <div className="green-answer" onClick={() => {
                    setAnswerState("hidden"); 
                    setDone('question-done');
                    setColor("green");
                    setIcon("checkmark-circle");
                    iconsBottom("checkmark-circle")
                    
                }}
                    >Zap!</div>
            </div>
        </div>
        <div class="question-done" className={done}>
            <span className={color}>Pergunta {index}</span>
            <ion-icon name={icon}></ion-icon>
        </div>
   </> )
}