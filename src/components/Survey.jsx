import { useState } from "react";
import { SurveyForm } from './Form/SurveyForm'
import AnswersList from "./Answere/AnswersList";

const emptyForm = {
  colorRating: 0,
  spendTime: [],
  text: '',
  name: '',
  email: ''
}

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(emptyForm)
  const [answers, setAnswers] = useState([])

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setAnswers(prevAnswers => [form, ...prevAnswers]);
    setForm(emptyForm);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="survey__form">
        <SurveyForm form={form} setForm={setForm} HandleSubmit={HandleSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
