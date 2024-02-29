import { useState } from "react";
import Form from "./form";
import Answers from "./Answers.jsx";
function Survey() {
  const [open, setOpen] = useState(false) //Ignore this state
  const [answer, setAnswer] = useState({ colour: '', spendTime: [], review: '', username: '', email: '' });
  const [answers, setAnswers] = useState([])
  const [edit, setEdit] = useState('')
  console.log(answers)

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <Answers
          setEdit={setEdit}
          answers={answers}
          setAnswer={setAnswer}
        />
      </section>
      <section className="survey__form">
        <Form
          edit={edit}
          setEdit={setEdit}
          answer={answer}
          answers={answers}
          setAnswer={setAnswer}
          setAnswers={setAnswers}
        />
      </section>
    </main>
  );
}

export default Survey;
