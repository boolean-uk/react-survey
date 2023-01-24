import AnswersList from "./AnswersList"
import { useState } from "react";


const initialFormState = {
  username: "", 
  colour: "", 
  review:"",
  email: "",
  timeSpent: {
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false
  }
  
  
} 

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initialFormState)
  const [answersList, setAnswerList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
  
    setAnswerList([...answersList, formState])
    setFormState(initialFormState)
    console.log(answersList)
  }

  const handleChange = (event) => {
    const value = event.target.value 
    const inputName = event.target.name
    const checked = event.target.checked
    

    const newFormState = {...formState}

    if(inputName === 'color'){
      newFormState.colour = value
    }
    if(inputName === 'review'){
      newFormState.review = value
    }
    if(inputName === 'username'){
      newFormState.username = value
    }
    if(inputName === 'email'){
      newFormState.email = value
    }
    if(inputName === 'spend-time' && value === "swimming"){
      newFormState.timeSpent.swimming = checked
    }
    if(inputName === 'spend-time' && value === 'bathing'){
      newFormState.timeSpent.bathing = checked
    }
    if(inputName === 'spend-time' && value === 'chatting'){
      newFormState.timeSpent.chatting = checked
    }
    if(inputName === 'spend-time' && value === 'noTime'){
      newFormState.timeSpent.noTime = checked
    }
    setFormState(newFormState)
  }
  

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
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange}/>
                <label
                  htmlFor="color-one"
                >1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange}/><label
                  htmlFor="color-two"
                >2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleChange}/><label
                  htmlFor="color-three"
                >3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange}/><label
                  htmlFor="color-four"
                >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                  />Swimming</label>
              </li>
              <li>
                <label
                ><input 
                name="spend-time" 
                type="checkbox" 
                value="bathing" 
                onChange={handleChange} />Bathing</label>
              </li>
              <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                  />Chatting</label>
              </li>
              <li>
                <label
                ><input 
                name="spend-time" 
                type="checkbox" 
                value="noTime"
                onChange={handleChange}
                 />I don't like to
                  spend time with it</label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleChange}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input 
              type="text"
              name="username"
              onChange={handleChange}
              />
          </label>
          <label>Email:
            <input type="email"
              name="email"
              onChange={handleChange}
              />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
