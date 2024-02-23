import { useState } from "react";
import DuckForm from "./form/DuckForm";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [forms, setForms] = useState([]);
  const [id, setId] = useState(0);
  const [editForm, setEditForm] = useState({});

  const appendForm = (formObject, isEditing = false) => {
    if (isEditing) {
      const update = forms.map((form) =>
        form.id === formObject.id ? formObject : form
      );
      setForms(update);
      return;
    }
    setForms([...forms, formObject]);
    setId(id + 1);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={forms} setEditForm={setEditForm} />
      </section>
      <section className="survey__form">
        <DuckForm appendForm={appendForm} editForm={editForm} />
      </section>
    </main>
  );
}

export default Survey;
