function Question(){
    return (<>
        <div className="question-undone">
            <span>Pergunta X</span>
            <ion-icon></ion-icon>
        </div>
        <div className="question-open">
            <br/>
            <span>O que é o que é?</span>
            <ion-icon></ion-icon>
        </div>
        <div className="question-answer">
            <span>é o que é.</span>
            <div className="question-result">
                <div className="red-answer">Não lembrei</div>
                <div className="orange-answer">Quase não lembrei</div>
                <div className="green-answer">Zop!</div>
            </div>
        </div>
        <div className="question-done">
            <span>Pergunta X</span>
            <ion-icon></ion-icon>
        </div>
   </> )
}

export default function RunPage() {
    return (
        <div className="run-page">
            <div className="logo-run">
                <img src="assets/zap.png" alt=""/>
                <h1>ZapRecall</h1>
            </div>
            <div className="questions">
                <Question />
            </div>
            <div className="progress-bar">
                <div className="end-message hidden">
                    <strong>Parabéns!</strong>
                    <span>Você não esqueceu nenhum flashcard!</span>
                </div>
                <div className="progress-count">x/4 concluidos</div>
                <div className="progress-icons"></div>
            </div>
        </div>
    )
}