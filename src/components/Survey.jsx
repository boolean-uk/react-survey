import { useState } from "react";

import Form from "./Form";
import AnswersList from "./AnswersList";

const INITIAL_STATE = {
  color: "",
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(INITIAL_STATE);
  const [answersList, setAnswersList] = useState([]);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>
      <Form
        form={form}
        setForm={setForm}
        answersList={answersList}
        setAnswersList={setAnswersList}
        INITIAL_STATE={INITIAL_STATE}
      />
    </main>
  );
}

export default Survey;
