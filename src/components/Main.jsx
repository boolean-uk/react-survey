import { useState } from "react";
import AnswersList from "./AnswersList";
const initialState = {
  color: "",
  review: "",
  username: "",
  email: "",
  timespent: [false, false, false, false]
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initialState)
  const [answersList, setAnswersList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setAnswersList([...answersList, formState])
    setFormState(initialState)
  }

  const handleChange = (event) => {
    const value = event.target.value
    const type = event.target.type
    const name = event.target.name
    const checked = event.target.checked

    if (name === "color") {
      setFormState({...formState, color: value})
    }
    if (name === "review") {
      setFormState({...formState, review: value})
    }
    if (name === "username") {
      setFormState({...formState, username: value})
    }
    if (name === "email") {
      setFormState({...formState, email: value})
    }
    if (name === "spend-time") {
      const newState = {...formState}

      if (value === "swimming") {
        newState.timespent[0] = !newState.timespent[0]
        newState.timespent[3] = false
        setFormState(newState)
      } else if (value === "bathing") {
        newState.timespent[1] = !newState.timespent[1]
        newState.timespent[3] = false
        setFormState(newState)
      } else if (value === "chatting") {
        newState.timespent[2] = !newState.timespent[2]
        newState.timespent[3] = false
        setFormState(newState)
      } else {
        if (newState.timespent[3] === false) {
          newState.timespent[0] = false
          newState.timespent[1] = false
          newState.timespent[2] = false
          newState.timespent[3] = true
        } else {newState.timespent[3] = false}
        setFormState(newState)
      }
    }
  }

  console.table(answersList)

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input 
                id="color-one" 
                type="radio" 
                name="color"
                value="1"
                onChange={handleChange}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input 
                id="color-two" 
                type="radio" 
                name="color"
                value="2"
                onChange={handleChange}/>
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input 
                id="color-three" 
                type="radio" 
                name="color"
                value="3"
                onChange={handleChange}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input 
                id="color-four" 
                type="radio" 
                name="color"
                value="4"
                onChange={handleChange}/>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    type="checkbox"
                    value="swimming"
                    checked={formState.timespent[0]}
                    onChange={handleChange} />Swimming</label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    type="checkbox"
                    value="bathing"
                    checked={formState.timespent[1]}
                    onChange={handleChange} />Bathing</label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    type="checkbox"
                    value="chatting"
                    checked={formState.timespent[2]}
                    onChange={handleChange} />Chatting</label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    type="checkbox"
                    value="noTime"
                    checked={formState.timespent[3]}
                    onChange={handleChange} />I don't like to spend time with it</label>
              </li>
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck? 
            <textarea 
            name="review" 
            cols="30" rows="10" 
            onChange={handleChange}></textarea>
          </label>
          <label>Put your name here (If you wish... 😢):
            <input 
            type="text"
            name="username"
            value={formState.name} 
            onChange={handleChange}/>
          </label>
          <label>EMAIL, HERE... NOW!
            <input 
            type="email"
            name="email"
            value={formState.email} 
            onChange={handleChange}/>
          </label>
          <input 
          className="form__submit" 
          type="submit" 
          value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
