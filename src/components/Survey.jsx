import { useState } from "react";
import AnswersList from "./AnswersList";

const initialForm = {
  bestFeatures: {
    yellow: false, 
    logo: false, 
    big: false, 
    squeaks: false
  }, 
  worstBits: {
    yellow: false, 
    logo: false, 
    big: false, 
    squeaks: false
  }, 
  colour: "", 
  consistency: "", 
  logo: "", 
  timeSpent: {
    swimming: false, 
    listening_to_Muse: false, 
    ranting: false, 
    coding: false
  },
  review: "", 
  username: "", 
  email: ""
}


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(initialForm)
  const [answersList, setAnswersList] = useState([])


  const submitForm = (event) => {
    event.preventDefault()
    console.log(form)
    setForm(initialForm)
    setAnswersList([...answersList, form])
  }


  const handleChanges = (event, question) => {
    
    const {name, value, type, checked} = event.target
    if (type === 'checkbox'){
      setForm({...form, [question]:{...form[question], [name]:checked}})
    } else {
      setForm({...form, [name]: value})
    }
    console.log(form)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}></AnswersList>
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
                    checked={form.bestFeatures.yellow}
                    onChange={event => handleChanges(event, 'bestFeatures')}
                    name="yellow"/>
                    It is yellow!
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    checked={form.bestFeatures.logo}
                    onChange={event => handleChanges(event, 'bestFeatures')}
                    name="logo"/>
                    It is got a logo!
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    checked={form.bestFeatures.big}
                    onChange={event => handleChanges(event, 'bestFeatures')}
                    name="big"/>
                    It is big!
                </label>
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    checked={form.bestFeatures.squeaks}
                    onChange={event => handleChanges(event, 'bestFeatures')}
                    name="squeaks"/>
                </label>
                It squeaks!
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
                    checked={form.worstBits.yellow}
                    onChange={event => handleChanges(event, "worstBits")}
                    name="yellow"/>
                </label>
                It is yellow!
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    checked={form.worstBits.logo}
                    onChange={event => handleChanges(event, "worstBits")}
                    name="logo"/>
                </label>
                It is got a logo!
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    checked={form.worstBits.big}
                    onChange={event => handleChanges(event, "worstBits")}
                    name="big"/>
                </label>
                It is big!
              </li>
              <li>
                <label>
                  <input 
                    type="checkbox" 
                    checked={form.worstBits.squeaks}
                    onChange={event => handleChanges(event, "worstBits")}
                    name="squeaks"/>
                </label>
                It squeaks!
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
              <ul>
                <li>
                  <label>1
                    <input 
                      type="radio" 
                      value="1" 
                      name="colour" 
                      id="colour-1"
                      checked={form.colour === "1"}
                      onChange={event => handleChanges(event)} />   
                  </label> 
                </li>
                <li>
                  <label>2
                    <input 
                      type="radio" 
                      value="2" 
                      name="colour" 
                      id="colour-2"
                      checked={form.colour === "2"}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
                <li>
                  <label>3
                    <input 
                      type="radio" 
                      value="3" 
                      name="colour" 
                      id="colour-3"
                      checked={form.colour === "3"}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
                <li>
                  <label>4
                    <input 
                      type="radio" 
                      value="4" 
                      name="colour" 
                      id="colour-4"
                      checked={form.colour === "4"}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
              </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
                <li>
                  <label>1
                    <input
                      type="radio"
                      value="1"
                      name="consistency"
                      id="consistency-1"
                      checked={form.consistency}
                      onChange={event => handleChanges(event)}/>   
                  </label> 
                </li>
                <li>
                  <label>2
                    <input
                      type="radio"
                      value="2"
                      name="consistency"
                      id="consistency-2"
                      checked={form.consistency}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
                <li>
                  <label>3
                    <input
                      type="radio"
                      value="3"
                      name="consistency"
                      id="consistency-3"
                      checked={form.consistency}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
                <li>
                  <label>4
                    <input
                      type="radio"
                      value="4"
                      name="consistency"
                      id="consistency-4"
                      checked={form.consistency}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
              </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
                <li>
                  <label>1
                    <input
                      type="radio"
                      value="1"
                      name="logo"
                      id="logo-1"
                      checked={form.logo === "1"}
                      onChange={event => handleChanges(event)}/>   
                  </label> 
                </li>
                <li>
                  <label>2
                    <input
                      type="radio"
                      value="2"
                      name="logo"
                      id="logo-2"
                      checked={form.logo === "2"}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
                <li>
                  <label>3
                    <input
                      type="radio"
                      value="3"
                      name="logo"
                      id="logo-3"
                      checked={form.logo === "3"}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
                <li>
                  <label>4
                    <input
                      type="radio"
                      value="4"
                      name="logo"
                      id="logo-4"
                      checked={form.logo === "4"}
                      onChange={event => handleChanges(event)}/>
                  </label>
                </li>
              </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>swimming
                  <input 
                    type="checkbox" 
                    checked={form.timeSpent.swimming} 
                    onChange={event => handleChanges(event, 'timeSpent')}
                    name="swimming"/>
                </label>
              </li>
              <li>
                <label>listening_to_Muse
                  <input 
                    type="checkbox" 
                    checked={form.timeSpent.listening_to_Muse}
                    onChange={event => handleChanges(event, 'timeSpent')} 
                    name="listening_to_Muse"/>
                </label>
              </li>
              <li>
                <label>ranting
                  <input 
                    type="checkbox" 
                    checked={form.timeSpent.ranting}
                    onChange={event => handleChanges(event, 'timeSpent')} 
                    name="ranting"/>
                </label>
              </li>
              <li>
                <label>coding
                  <input 
                    type="checkbox" 
                    checked={form.timeSpent.coding}
                    onChange={event => handleChanges(event, 'timeSpent')} 
                    name="coding"/>
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea 
              name="review"
              cols="30"
              rows="10"
              value={form.review}
              onChange={event => handleChanges(event)}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input 
              type="text"
              name="username"
              value={form.username} 
              onChange={event => handleChanges(event)}/>
          </label>
          <label>
            Leave us your email pretty please??
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={event => handleChanges(event)}/>
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;


