import { useState } from "react";

function Main() {
 
  const [open, setOpen] = useState(false); //Ignore this state
  
  const [color, setColor] = useState('')
  let [timespent, setTimeSpent] = useState({
    swimming: false,
    bathing: false,
    chatting: false,
    notime: false
  })
  const [review, setReview] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({color, timespent, review, username, email})
   
    event.target.reset()
    setTimeSpent({swimming: event.target[1].checked,
      bathing: event.target[2].checked,
      chatting: event.target[3].checked,
      notime: event.target[4].checked
    })
  }
  
  const handleRating = (event) => {
    setColor(event.target.value)
  }

  const handleTimeSpent = (event) => {
    setTimeSpent({
      ...timespent,
      [event.target.value]: !timespent[event.target.value]})
  }

  const handleReview = (event) => {
    setReview(event.target.value)
  }
  
  const handleUsername = (event) => {
    setUserName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className = "form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
                <li>
                  <input id="color-one" type="radio" name="color" value = '1' onChange={handleRating}/><label
                    htmlFor="color-one"
                    >1</label>
                </li>
                <li>
                  <input id="color-two" type="radio" name="color" value="2" onChange={handleRating}/><label
                    htmlFor="color-two"
                    >2</label>
                </li>
                <li>
                  <input id="color-three" type="radio" name="color" value="3" onChange={handleRating}/><label
                    htmlFor="color-three"
                    >3</label>
                </li>
                <li>
                  <input id="color-four" type="radio" name="color" value="4" onChange={handleRating}/><label
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
                    name="timespent"
                    type="checkbox"
                    value="swimming"
                    onChange={handleTimeSpent}
                    checked = {timespent.swimming}
                  />Swimming</label>
              </li>
              <li>
                <label
                    ><input name="timespent" type="checkbox" value="bathing" onChange={handleTimeSpent}
                    checked = {timespent.bathing} />Bathing</label>
              </li>
              <li>
                <label
                  ><input
                    name="timespent"
                    type="checkbox"
                    value="chatting"
                    onChange={handleTimeSpent}
                    checked = {timespent.chatting}
                  />Chatting</label>
              </li>
              <li>
                <label
                    ><input name="timespent" type="checkbox" value="notime" onChange={handleTimeSpent}
                    checked = {timespent.notime} />I don't like to
                  spend time with it</label>
              </li>
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleReview}
            ></textarea>
          </label>
          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleUsername}
              />
          </label>
          <label>Leave us your email pretty please??
          <input
            type="email"
            name="email"
            onChange={handleEmail}
            />
          </label>
          <input className="form__submit" type="submit"value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;