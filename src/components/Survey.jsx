import { useState } from "react";
import DuckForm from "./form/DuckForm";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [forms, setForms] = useState([]);

  const appendForm = (formObject) => {
    setForms([...forms, formObject]);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={forms} />
      </section>
      <section className="survey__form">
        <DuckForm appendForm={appendForm} />
      </section>
    </main>
  );
}

export default Survey;
