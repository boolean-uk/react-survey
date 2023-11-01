import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

const INITIAL_STATE = {
  username: "",
  colour: "", 
  timeSpent: [],
  review: "",
  email: ""
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(INITIAL_STATE);
  const [answersList, setAnswerList] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    console.log(form)
    setAnswerList([...answersList, form]);
    setForm(INITIAL_STATE);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    let timeSpentArr = [...form.timeSpent];
    if (checked) timeSpentArr.push(value)
    else if (!checked && timeSpentArr.includes(value)) {
      timeSpentArr = timeSpentArr.filter(item => item !== value)
    };
  
    type === 'checkbox' ? setForm({ ...form, [name]: timeSpentArr })
    : setForm({ ...form, [name]: value });
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>
      <section className="survey__form">
        <Form 
        form={form}
        submitForm={submitForm} 
        handleChange={handleChange} 
        /> 
      </section>
    </main>
  );
}

export default Survey;
