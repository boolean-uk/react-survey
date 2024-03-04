import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const [formData, setFormData] = useState({
    color: 0,
    timeSpent: [],
    review: "",
    name: "",
    email: ""
  })
  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="survey__form">
        <Form setAnswers={setAnswers} answers={answers} setFormData={setFormData} formData={formData} />  
      </section>
    </main>
  );
}

export default Survey;
