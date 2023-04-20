import { useState } from "react"
import AnswersList from "./AnswersList.jsx"

function Main() {
  const listItem = {
    colour: "",
    timeSpent : {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false
    },
    review: "",
    username: "",
    email: ""
  }

  const [item, setItem] = useState(listItem)
  const [open, setOpen] = useState(false) //Ignore this state
  const [answersList, setAnswerList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setAnswerList([...answersList, item])
    const form = document.querySelector("form")
    setItem(listItem)
    form.reset()
    
  }

  const handleChange = (e) => {
    const { name, type, value } = e.target;
      if (name === "color") {
        setItem({ ...item, colour: value })
      } else if (name === "review") {
        setItem({ ...item, review: value })
      } else if (name === "username") {
        setItem({ ...item, username: value })
      } else if (name === "spend-time") {
        if (value === "swimming"){
          setItem({ ...item, timeSpent :{...item.timeSpent, swimming :true}})
        } else if (value === "bathing") {
          setItem({ ...item, timeSpent :{...item.timeSpent, bathing :true}})
        } else if (value === "chatting") {
          setItem({ ...item, timeSpent :{...item.timeSpent, chatting :true}})
        } else {
          setItem({ ...item, timeSpent :{...item.timeSpent, noTime :true}})
        }
      } else {
        setItem({ ...item, email: value })
      }
    }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answersList}/> 
      </section>
      <section className="main__form">
      {console.log(item)}
        {
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
                    onChange={handleChange}
                  />
                  <label htmlFor="color-one">1</label>
                </li>
                <li>
                  <input
                    id="color-two"
                    type="radio"
                    name="color"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="color-two">2</label>
                </li>
                <li>
                  <input
                    id="color-three"
                    type="radio"
                    name="color"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="color-three">3</label>
                </li>
                <li>
                  <input
                    id="color-four"
                    type="radio"
                    name="color"
                    value="4"
                    onChange={handleChange}
                  />
                  <label htmlFor="color-four">4</label>
                </li>
              </ul>
            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <ul>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="swimming" onChange = {handleChange}/>
                    Swimming
                  </label>
                </li>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="bathing" onChange = {handleChange}/>
                    Bathing
                  </label>
                </li>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="chatting" onChange = {handleChange}/>
                    Chatting
                  </label>
                </li>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="noTime" onChange = {handleChange}/>I
                    don't like to spend time with it
                  </label>
                </li>
              </ul>
            </div>
            <label>
              What else have you got to say about your rubber duck?
              <textarea name="review" cols="30" rows="10" onChange = {handleChange}></textarea>
            </label>
            <label>
              Put your name here (if you feel like it):
              <input type="text" name="username"  onChange = {handleChange}/>
            </label>
            <label>
              Leave us your email pretty please??
              <input type="email" name="email"  onChange = {handleChange}/>
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!"/>
          </form>
        }
      </section>
    </main>
  );
}

export default Main;
