import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "../components/form";
const INITIAL_STATE = {
  username: "",
  colour: "",
  timeSpent: [],
  review: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [theFormField, setTheFormField] = useState(INITIAL_STATE);
  const [answersList, setAnswerList] = useState([]);

  const submitTheForm = (e) => {
    e.preventDefault();
    const theForm = document.querySelector(".form");
    setAnswerList([...answersList, theFormField]);
    setTheFormField(INITIAL_STATE);
    theForm.reset();
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    let updatedTimeSpentArr = [...theFormField.timeSpent];

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
      ...theFormField,
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
            theFormField={theFormField}
            submitTheForm={submitTheForm}
            handleChange={handleChange}
          />
        }
      </section>
    </main>
  );
}

export default Survey;
