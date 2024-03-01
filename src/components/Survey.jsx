import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";
function Survey() {
  
  const open = false;
  const [answers, setAnswers] = useState([]);
  function addAnswers(answer) {
    setAnswers([...answers, answer]);
  }
  useEffect(() => {
    console.log(answers);
  }, [answers]);
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswersList answersList={answers} />}
      </section>
      <section className="survey__form">{<Form submit={addAnswers} />}</section>
    </main>
  );
}

export default Survey;
