import { useState } from "react";
// import AnswersList from "./AnswersList";

const intialForm = {
  bestFeatures: {
    yello: false, 
    logo: false, 
    big: false, 
    squeaks: false
  }, 
  worstBits: {
    yello: false, 
    logo: false, 
    big: false, 
    squeaks: false
  }, 
  colour: 1, 
  consistency: 1, 
  logo: 1, 
  activities: {
    swimming: false, 
    listening_to_Muse: false, 
    ranting: false, 
    coding: false
  },
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(intialForm)


  const submitForm = (event) => {
    event.preventDefault()
    console.log(form)
  }
  // const handleChanges = () => {console.log(form)}

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* EXTENSION <AnswersList answerList={answerList}></AnswersList>
        answers should go here */}
      </section>
      <section className="survey__form">
        {/* CORE a form should be here */}
        <form className="form" onSubmit={event => submitForm(event)}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              What would you say are the best features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>
              What would you say are the worst bits about your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
              <ul>
                <li>
                  <label>1
                    <input type="radio" value="1" name="colour" id="colour-1" />   
                  </label> 
                </li>
                <li>
                  <label>2
                    <input type="radio" value="2" name="colour" id="colour-2"/>
                  </label>
                </li>
                <li>
                  <label>3
                    <input type="radio" value="3" name="colour" id="colour-3"/>
                  </label>
                </li>
                <li>
                  <label>4
                    <input type="radio" value="4" name="colour" id="colour-4"/>
                  </label>
                </li>
              </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
                <li>
                  <label>1
                    <input type="radio" value="1" name="consistency" id="consistency-1" />   
                  </label> 
                </li>
                <li>
                  <label>2
                    <input type="radio" value="2" name="consistency" id="consistency-2"/>
                  </label>
                </li>
                <li>
                  <label>3
                    <input type="radio" value="3" name="consistency" id="consistency-3"/>
                  </label>
                </li>
                <li>
                  <label>4
                    <input type="radio" value="4" name="consistency" id="consistency-4"/>
                  </label>
                </li>
              </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
                <li>
                  <label>1
                    <input type="radio" value="1" name="logo" id="logo-1" />   
                  </label> 
                </li>
                <li>
                  <label>2
                    <input type="radio" value="2" name="logo" id="logo-2"/>
                  </label>
                </li>
                <li>
                  <label>3
                    <input type="radio" value="3" name="logo" id="logo-3"/>
                  </label>
                </li>
                <li>
                  <label>4
                    <input type="radio" value="4" name="logo" id="logo-4"/>
                  </label>
                </li>
              </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    value="" 
                    id="" 
                    name=""/>
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value="" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value="" />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
