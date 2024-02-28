import { useState } from "react";
import AnswersList from "./AnswersList";
import QuestionsForm from "./QuestionsForm";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [forms, setForms] = useState([]);
  console.log(forms);

  const handleForm = (formObject) => {
    setForms([...forms, formObject])
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
       <h2>Answers list</h2>

      </section>
      <section className="survey__form">
        <QuestionsForm handleForm={handleForm} />
      </section>
    </main>
  );
}

export default Survey;
