import { useState } from "react";
import { Form } from "./Form";
import { AnswersList } from "./AnswersList"

const initialFormData = {
  username: '',
  color:'',
  spent: [],
  review: '',
  email: '',
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialFormData)
  const [answers, setAnswers] = useState([
    {
      username: "Rose",
      spent: ["chatting"],
      color: '4',
      review: 'Review of my hero',
      email: 'rose@rose.com'
    }
  ])

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const checked = e.target.checked;

    if (inputName === "username") {
      setFormData({ ...formData, username: inputValue });
    }

    if (inputName === "email") {
      setFormData({...formData, email: inputValue })
    }

    if (inputName === 'color') {
      setFormData({...formData, color: inputValue })
    }

    if (inputName === 'review') {
      setFormData({...formData, review: inputValue})
    }

    if (inputName === 'spend-time' && checked) {
      checked ? setFormData({...formData, spent: [...formData.spent, inputValue]}) : setFormData({...formData})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAnswers([formData])
    console.log(answers)
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answers = {answers}
        />
      </section>
      <section className="main__form">
        <Form
          formData = {formData}
          initialFormData = {initialFormData}
          handleChange = {handleChange}
          handleSubmit= {handleSubmit}
        />
      </section>
    </main>
  );
}

export default Main;
