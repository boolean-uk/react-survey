import { useState } from "react";
import AnswersList from "./AnswersList";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

const initialForm = {
  color: '',
  timeSpent: [],
  review: '',
  username: '',
  email: ''
}

const initialAnswers = [initialForm]

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData , setFormData] = useState(initialForm)
  const [answersList, setAnswersList] = useState(initialAnswers)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      color: '',
      timeSpent: [],
      review: '',
      username: '',
      email: ''
    })
  }

  const handleChange = (e) => { 
    const {name,type, value, checked} = e.target
    console.log(name, value);
    const arr = formData.timeSpent
    if (name === "timeSpent" && !arr.some(item => item === value)) {
      setFormData({...formData,[name] : [...formData.timeSpent,value]})
    } else if (name === "timeSpent" && arr.some(item => item === value)  ) {
      setFormData({...formData, [name]: formData.timeSpent.filter(item => item !== value)  })
    } else {
      setFormData({...formData,[name] : value})
    }
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
        answersList={answersList} />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtons handleChange={handleChange} formData={formData} />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes handleChange={handleChange} formData={formData} />
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea onChange={handleChange} name="review" cols="30" rows="10" value={formData.review}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input onChange={handleChange} type="text" name="username" value={formData.username} />
          </label>
          <label>
            Leave us your email pretty please??
            <input onChange={handleChange} type="email" name="email" value={formData.email} />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
