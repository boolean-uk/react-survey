import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";
const initialConditions = {
  username: "",
  colour: "",
  timeSpent: [],
  review: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [fieldForm, setTheFormField] = useState(initialConditions);
  const [answersList, setAnswerList] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const theForm = document.querySelector(".form");
    setAnswerList([...answersList, fieldForm]);
    setTheFormField(initialConditions);
    theForm.reset();
  };
  const changeBtn = (event) => {
    const { name, value, type, checked } = event.target;

    let updatedTimeSpentArr = [...fieldForm.timeSpent];

    if (type === "checkbox") {
      if (checked) {
        updatedTimeSpentArr.push(value);
      } else {
        updatedTimeSpentArr = updatedTimeSpentArr.filter(
          (item) => item !== value
        );
      }
    }

    const updatedForm = {
      ...fieldForm,
      [name]: type === "checkbox" ? updatedTimeSpentArr : value,
    };

    setTheFormField(updatedForm);
  };
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="survey__form">
        {
          <Form
            fieldForm={fieldForm}
            submitForm={submitForm}
            changeBtn={changeBtn}
          />
        }
      </section>
    </main>
  );
}

export default Survey;
