import { useState } from "react";
import Form from './Form'
import AnswersList from "./AnswersList";

function Survey(){ 
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswer] = useState([{id:1, username:'Allan', email:'',colour:'4', timeSpent:["swimming","chatting"], review:'Let us fill the Thames with ducks!' }]);
  const [editAnswer, setChangeAnswer] = useState(false);
  
  const saveAnswer = (input)=> {
    let a = answers.filter(x=>x.id==input.id)
    
    if(a.length>0 ){
      let updatedArray = answers.map((answer)=>(
        answer.id == a[0].id? input :answer
      ))
      setAnswer(updatedArray)
      setChangeAnswer(false)
    }else{
      
      input.id=answers.length+1;
    setAnswer([input, ...answers])}    
  }
  
  const changeAnswer = (answerItem)=>{
    
    setChangeAnswer(answerItem)
  }  
  const deleteAnswer = (answerItem)=>{
    let updatedArray = answers.filter(a => a.id!= answerItem.id)
    setAnswer(updatedArray)
  } 
    
  return (

    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} submitted={editAnswer} changeAnswer ={changeAnswer} deleteAnswer={deleteAnswer}/>
      </section>
      <section className="survey__form"><Form prevAnswer={editAnswer} saveAnswer={saveAnswer}/></section>
    </main>
  );
}

export default Survey;
