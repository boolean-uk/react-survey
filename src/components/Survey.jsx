import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])

  const addAnswer = (answer) => {
    answers.push({answer})
    console.log(answers)
  }
  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        {/* <AnswersList answerList={answers} /> */}
      </section>
      <section className="survey__form">
        <Form addAnswer ={addAnswer}/>
      </section>
    </main>
  );
}

export default Survey;
