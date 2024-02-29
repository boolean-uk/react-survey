import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const initialFormData = {
    color: null,
    spendTime: [],
    review: '',
    username: '',
    email: ''
  }

  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const [answerData, setAnswerData] = useState(initialFormData)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name !== undefined) {
      if (name === "spendTime") {
        handleSpendTime(event)
      } else
      setAnswerData({...answerData, [name]: value})
    }
  }

  /**
   * Toggles spendTime checkboxes. 
   * If set to true, add to list. 
   * If set to false, remove.
   * @param {*} event 
   */
  const handleSpendTime = (event) => {
    if (answerData.spendTime.includes(event.target.value))
      setAnswerData({...answerData, spendTime: answerData.spendTime.filter((val) => val !== event.target.value)})
    else 
      setAnswerData({...answerData, spendTime: [...answerData.spendTime, event.target.value]})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    // Update answer if the email is the same
    if (answers.filter((answer) => answer.email === answerData.email).length > 0) {
      const updatedAnswers = answers.map((answer) => 
        answer.email !== answerData.email ? answer : answerData
      )
      setAnswers(updatedAnswers)
    } else {
      // Otherwise, add new
      setAnswers([...answers, answerData])
    }
    setAnswerData(initialFormData)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} setAnswerData={setAnswerData}/>
      </section>
      <section className="survey__form">
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
                  value={1}
                  checked={answerData.color === "1"}
                  onChange={handleChange}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input 
                  id="color-two" 
                  type="radio" 
                  name="color" 
                  value={2}
                  checked={answerData.color === "2"}
                  onChange={handleChange} />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input 
                  id="color-three" 
                  type="radio" 
                  name="color" 
                  value={3}
                  checked={answerData.color === "3"}
                  onChange={handleChange}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input 
                  id="color-four" 
                  type="radio" 
                  name="color" 
                  value={4}
                  checked={answerData.color === "4"}
                  onChange={handleChange} />
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
                  name="spendTime" 
                  type="checkbox" 
                  value='swimming'
                  checked={answerData.spendTime.includes("swimming")}
                  onChange={handleChange}/>
                Swimming</label>
              </li>
              <li>
                <label>
                  <input 
                    name="spendTime" 
                    type="checkbox" 
                    value='bathing'
                    checked={answerData.spendTime.includes("bathing")}
                    onChange={handleChange}/>
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="spendTime" 
                    type="checkbox" 
                    value='noTime'
                    checked={answerData.spendTime.includes("noTime")}
                    onChange={handleChange}/>
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          <div>
            <label>What else have you got to say about your rubber duck?
              <textarea 
                name="review" 
                cols="30" 
                rows="10"
                value={answerData.review}
                onChange={handleChange}></textarea>
            </label>
          </div>

          <label>Put your name here (if you feel like it):
            <input 
              type="text" 
              name="username" 
              value={answerData.username}
              onChange={handleChange}/>
          </label>

          <label>
            Leave us your email pretty please??
            <input
              type="email" 
              name="email"
              value={answerData.email} 
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

export default Survey;
