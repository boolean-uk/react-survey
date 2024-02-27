import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])

  const addAnswer = (answer) => {
    let _answers = answers
    _answers.push({answer})
    setAnswers([..._answers])
    console.log(answer)
    console.log(answers)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="survey__form">
        <Form addAnswer ={addAnswer}/>
      </section>
    </main>
  );
}

export default Survey;
