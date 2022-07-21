import RunPage from "./RunPage";
import StartPage from "./StartPage";

export default function App(){
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
        console.log("shuffle")
        questionsObj.sort(randomizer)
        for (let i = 0; i<4; i++){
            questionsRun.push(questionsObj[i])
            }
        }
        shuffle()
    return(
    <>
        <StartPage />
        <RunPage questionsRun={questionsRun}/>
    </>
    )
}