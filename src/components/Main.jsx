import { useState } from "react";

import AnswersList from './AnswersList'

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [colour, setColour] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [review,setReview] = useState("")
  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({colour,timeSpent,review,userName,email});
  };

  const handleColour = (e) => {
    setColour(e.target.value);
  };
  const handleTimeSpent = (e) => {
    setTimeSpent(e.target.value);
  };
  const handleReview = (e) =>{
    setReview(e.target.value)
    
  }
  const handleUserName = (e) =>{
    setUserName(e.target.value)
    
  }
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  return (
    
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleColour}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleColour}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleColour}
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleColour}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleTimeSpent}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={handleTimeSpent}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleTimeSpent}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={handleTimeSpent}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleReview}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={userName} onChange={handleUserName}/>
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={email} onChange={handleEmail}/>
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
