import { useState } from "react"
import AnswersList from "./AnswersList"

const emptyForm = {
  color: "", 
  time: {
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false
  }, 
  review: "",
  username: "",
  email: ""
}


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(emptyForm)
  const [answers, setAnswers] = useState([])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    if (type === "checkbox") {
      setForm({
        ...form,
        time: {
          ...form.time,
          [value]: checked
        }
      })
    }
    else {
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingEmail = answers.findIndex(answer => answer.email === form.email)
    
    if (existingEmail !== -1) {
      const updatedAnswer = [...answers]
      updatedAnswer[existingEmail] = form
      setAnswers(updatedAnswer)
    } else {
      setAnswers([...answers, form])
    }
  
    event.target.reset()
    setForm(emptyForm)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2> 
        <AnswersList answersList={answers} setForm={setForm} />
      </section>
      <section className="survey__form" onSubmit={(e) => handleSubmit(e)}>
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <input id="1" type="radio" name="color" onChange={handleChange} checked={form.color === "1"} value="1" />
            <label for="1">1</label>
            <input id="2" type="radio" name="color" onChange={handleChange} checked={form.color === "2"} value="2" />
            <label for="2">2</label>
            <input id="3" type="radio" name="color" onChange={handleChange} checked={form.color === "3"} value="3" />
            <label for="3">3</label>         
            <input id="4" type="radio" name="color" onChange={handleChange} checked={form.color === "4"} value="4" />
            <label for="4">4</label>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                onChange={handleChange}
                checked={form.time.swimming}
                value="swimming"/>Swimming
            </label>
            <label>
              <input name="spend-time" 
              type="checkbox" 
              onChange={handleChange} 
              checked={form.time.bathing}
              value="bathing" />Bathing
            </label>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                onChange={handleChange}
                checked={form.time.chatting}
                value="chatting"/>Chatting
            </label>
            <label >
              <input 
                name="spend-time" 
                type="checkbox" 
                onChange={handleChange}
                checked={form.time.noTime}
                value="noTime" />I don't like to spend time with it
            </label>
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={form.review}
              onChange={handleChange}>
            </textarea>
          </label>
          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}/>
          </label>
          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}/>
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  )
}

export default Survey;
