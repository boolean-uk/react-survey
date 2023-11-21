import { useState } from "react";
import AnswersList from "./AnswersList";

const initialForm = {
  color: "",
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(initialForm)
  const [answersList, setAnswersList] = useState([])



  function handleChange(e) {
    const { name, type, value } = e.target
    if (type === "checkbox") {
      if (form[name].includes(value)) {
        const updatedArray = form[name].filter((item) => item !== value)
        setForm({ ...form, [name]: updatedArray })
      } else {
        setForm({ ...form, [name]: [...form[name], value] });
      }
    } else if (type === "radio") {
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    setForm(initialForm)
    setAnswersList([...answersList, form])
  }

  const activityOptions = [
  { label: "Swimming", value: "swimming" },
  { label: "Bathing", value: "bathing" },
  { label: "Chatting", value: "chatting" }, 
  { label: "I don't like to spend time with it", value: "noTime" },

]
  
  const colors = ["1", "2", "3", "4"]

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answersList}
          username={form.username}
          color={form.color}
          timeSpent={form.timeSpent}
          review={form.review}
        />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {colors.map((color, i) =>
                <li key={i}>
                  <input
                    onChange={(e) => handleChange(e)}
                    id={`color-${color}`}
                    type="radio"
                    name="color"
                    value={color}
                    checked={form.color === color}
                  />
                  <label htmlFor={`color-${color}`}>{color}</label>
                </li>
              )}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {activityOptions.map((option, i) =>
                <li key={i}>
                  <label>
                    <input
                      onChange={(e) => handleChange(e)}
                      name="timeSpent"
                      type="checkbox"
                      value={option.value}
                      checked={form.timeSpent.includes(option.value)}
                    />{option.label}
                  </label>
                </li>
              )}
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              onChange={(e) => handleChange(e)}
              name="review"
              cols="30"
              rows="10"
              value={form.review}
            >
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="username"
              value={form.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              value={form.email}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;