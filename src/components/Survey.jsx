import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

const INITIAL_FORM_STATE = {
  color: "",
  timeSpent: [],
  review: "",
  name:"",
  email:""
}
function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [answers, setAnswers] = useState([])
  const reset = () =>{setFormData({...INITIAL_FORM_STATE})

  }
  const addAnswer = (answer) => {
    answers.push(answer)
    setAnswers([...answers])
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList= {answers}/>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <Form setFormData={setFormData} formData={formData} setAnswers = {addAnswer}/>
      </section>
    </main>
  );
}

export default Survey;
