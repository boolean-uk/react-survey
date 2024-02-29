import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([]);
  const [form, setForm] = useState({
    ratingColor: "0",
    ratingTimeSpent: "",
    text: "",
    name: "",
    email: "",
  });

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers={answers} />
      </section>
      <section className="survey__form">
        <Form answers={answers} setAnswers={setAnswers} form={form} setForm={setForm} />
      </section>
    </main>
  );
}

export default Survey;
