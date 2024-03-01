import { useRef, useState } from "react";
import AnswersList from "./AnswersList";

const initialAnswers = {
  best_feature: "", 
  worst_feature: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  time: [],
  review: "",
  username: "",
  email: ""
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answer, setAnswer] = useState(initialAnswers)
  const [answerList, setAnswerList] = useState([])
  const formRef = useRef(null)

  const handleChange = (event) => {
    const inputName =   event.target.name
    const inputValue = event.target.value

    if(inputName ==="best_feature"){
      setAnswer({...answer, best_feature: inputValue})
    }
    if(inputName ==="worst_feature"){
      setAnswer({...answer, worst_feature: inputValue})
    }
    if(inputName ==="consistency"){
      setAnswer({...answer, consistency: inputValue})
    }
    if(inputName ==="colour"){
      setAnswer({...answer, colour: inputValue})
    }
    if(inputName ==="logo"){
      setAnswer({...answer, logo: inputValue})
    }
    if(inputName ==="review"){
      setAnswer({...answer, review: inputValue})
    }
    if(inputName === "time"){
        const selectedTimes = answer.time || [];
        if (event.target.checked) {
          setAnswer({ ...answer, time: [...selectedTimes, event.target.value] });
        } else {
          setAnswer({
            ...answer,
            time: selectedTimes.filter((time) => time !== event.target.value)
          });
        }
    }
    if(inputName ==="username"){
      setAnswer({...answer, username: inputValue})
    }
    if(inputName ==="email"){
      setAnswer({...answer, email: inputValue})
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    setAnswerList([...answerList, answer])

    console.log(answer)
    console.log(answerList)

    setAnswer(initialAnswers)
    formRef.current.reset()
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList = {answerList}/>
        {/*  */}

      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <form className="form" ref={formRef}>
          <h2>Tell us what you think about your rubber duck!</h2>
          
          <div className="form__group">
            <h3>What would you say are the best features of you rubber duck?</h3>
            <ul>
            <li>
                <label>
                  <input
                    name="best_feature"
                    type="checkbox"
                    value="yellow"
                    onChange={handleChange}/>It's yellow
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="best_feature" 
                    type="checkbox" 
                    value="squeaks"
                    onChange={handleChange} />It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="best_feature"
                    type="checkbox"
                    value="has_logo"
                    onChange={handleChange}/>It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="best_feature" 
                    type="checkbox" 
                    value="big" 
                    onChange={handleChange}/>It's big!
                </label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>What would you say are the worst bits of you rubber duck?</h3>
            <ul>
            <li>
                <label>
                  <input
                    name="worst_feature"
                    type="checkbox"
                    value="yellow"
                    onChange={handleChange}/>It's yellow
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="worst_feature" 
                    type="checkbox" 
                    value="squeaks"
                    onChange={handleChange} />It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst_feature"
                    type="checkbox"
                    value="has_logo"
                    onChange={handleChange}/>It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="worst_feature" 
                    type="checkbox" 
                    value="big" 
                    onChange={handleChange}/>It's big!
                </label>
              </li>
            </ul>
          </div>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck consitency?</h3>
            <input 
              id="const_1"
              type="radio"
              name="consistency"
              value={1}
              onChange={handleChange}
              />
              <label htmlFor="const_1">1</label>
            <input 
              id="const_2"
              type="radio"
              name="consistency"
              value={2}
              onChange={handleChange}
              />
              <label htmlFor="const_2">2</label>

              <input 
              id="const_3"
              type="radio"
              name="consistency"
              value={3}
              onChange={handleChange}
              />
              <label htmlFor="const_3">3</label>

              <input 
              id="const_4"
              type="radio"
              name="consistency"
              value={4}
              onChange={handleChange}
              />
              <label htmlFor="const_4">4</label>
          </div>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>

            <input 
              id="colour_1"
              type="radio"
              name="colour"
              value={1}
              onChange={handleChange}
              />
              <label htmlFor="colour_1">1</label>
            <input 
              id="colour_2"
              type="radio"
              name="colour"
              value={2}
              onChange={handleChange}
              />
              <label htmlFor="colour_2">2</label>

              <input 
              id="colour_3"
              type="radio"
              name="colour"
              value={3}
              onChange={handleChange}
              />
              <label htmlFor="colour_3">3</label>
              <input 
              id="colour_4"
              type="radio"
              name="colour"
              value={4}
              onChange={handleChange}
              />
              <label htmlFor="colour_4">4</label>
          </div>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>

            <input 
              id="logo_1"
              type="radio"
              name="logo"
              value={1}
              onChange={handleChange}
              />
              <label htmlFor="logo_1">1</label>
            <input 
              id="logo_2"
              type="radio"
              name="logo"
              value={2}
              onChange={handleChange}
              />
              <label htmlFor="logo_2">2</label>

              <input 
              id="logo_3"
              type="radio"
              name="logo"
              value={3}
              onChange={handleChange}
              />
              <label htmlFor="logo_3">3</label>
              <input 
              id="logo_4"
              type="radio"
              name="logo"
              value={4}
              onChange={handleChange}
              />
              <label htmlFor="logo_4">4</label>
          </div>

          <div className="form__group">
            <h3>How would you like to spend time with your rubber duck?</h3>

            <ul>
              <li>
                <label>
                  <input
                    name="time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}/>Swimming
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="time" 
                    type="checkbox" 
                    value="bathing" 
                    onChange={handleChange}/>Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}/>Chatting
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="time" 
                    type="checkbox" 
                    value="noTime" 
                    onChange={handleChange}/>I don't like to
                      spend time with it
                </label>
              </li>
            </ul>

          </div>


          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange}></textarea></label>


          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={answer.username} 
              onChange={handleChange}/>
          </label>


          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={answer.email} 
              onChange={handleChange}/>
          </label>


          <input className="form__submit" 
            type="submit" 
            value="Submit Survey!" 
            onClick={handleSubmit}/>
        </form>
      </section>
    </main>
  );
}

export default Survey;
