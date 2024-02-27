import { useState } from "react";
import { SurveyForm } from './Form/SurveyForm'

const emptyForm = {
  colourRating: 0,
  spendTime: [],
  text: '',
  name: '',
  email: ''
}

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(emptyForm)
  const [answers, setAnswers] = useState([]) // [

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    answers.push(form);
    setForm(emptyForm);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <SurveyForm form={form} setForm={setForm} handleSubmit={handleSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
