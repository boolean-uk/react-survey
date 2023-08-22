import { useState } from "react";

import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedAnswer, setSubmittedAnswer] = useState({});

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList submittedAnswer={submittedAnswer} />
      </section>
      <section className="main__form">
        <Form setSubmittedAnswer={setSubmittedAnswer} />
      </section>
    </main>
  );
}

export default Main;
