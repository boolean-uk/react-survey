import { useState } from "react";
import AnswersList from './AnswersList.jsx'
import NewAnswer from "./NewAnswer.jsx"

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedForms, setSubmittedForms] = useState([])

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={submittedForms}/>
      </section>
      <section className="survey__form">
        <NewAnswer submittedForms={submittedForms} setSubmittedForms={setSubmittedForms}/>
      </section>
    </main>
  );
}

export default Survey;
