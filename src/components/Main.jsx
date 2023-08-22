import { useState } from "react";

import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])

  const handleSubmittedAnswer = (submittedAnswer) => setAnswersList([...answersList, submittedAnswer])

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">
        <Form handleSubmittedAnswer={handleSubmittedAnswer} />
      </section>
    </main>
  );
}

export default Main;
