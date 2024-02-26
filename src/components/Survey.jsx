import { useState } from "react";
import AnswersList from "./AnswersList";

  let answerForms = []

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  
  // FORM DATA
  const INITIAL_FORM_DATA =
  {
    color: "",
    timeSpent: [],
    review: "",
    username: "",
    email: ""
  }
  
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [answerData, setAnswerData] = useState(answerForms);
  
  // Handling submit
  const handleSubmit = (event) =>
  {
    event.preventDefault()
    answerForms.push(formData)
    setAnswerData(answerForms)
    setFormData(INITIAL_FORM_DATA)
  }

  const handleInput = (event) =>
  {
    const { name, type, value, checked } = event.target

    if (type === "checkbox")
    {
      let arr = [...formData.timeSpent]
      if (checked)
        arr.push(value)
      else
        arr.splice(arr.indexOf(value), 1)
      setFormData({...formData, timeSpent: arr})
    }
    else
      setFormData({...formData, [name]: value })
  }

  return (
    <>
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answerData={answerData}/>
      </section>
      <section className="survey__form">{/* a form should be here */}</section>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/* <!-- Radio inputs go here --> */}
        <ul>
          <li>
            <input id="color-one" type="radio" name="color" value="1" checked={formData.color === "1"} onChange={handleInput}
            /><label
            htmlFor="color-one"
            >1</label>
          </li>
          <li>
            <input id="color-two" type="radio" name="color" value="2" checked={formData.color === "2"} onChange={handleInput}
            /><label
            htmlFor="color-two"
            >2</label>
          </li>
          <li>
            <input id="color-three" type="radio" name="color" value="3" checked={formData.color === "3"} onChange={handleInput}
            /><label
            htmlFor="color-three"
        	  >3</label>
          </li>
          <li>
            <input id="color-four" type="radio" name="color" value="4" checked={formData.color === "4"} onChange={handleInput}
            /><label
            htmlFor="color-four"
            >4</label>
          </li>
        </ul>
        </div>
        <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/* <!-- checkboxes go here --> */}
        <ul>
          <li>
            <label
            ><input
            name="spend-time"
            type="checkbox"
            value="swimming"
            onChange={handleInput}
            />Swimming</label>
          </li>
          <li>
            <label
            ><input name="spend-time" type="checkbox" value="bathing"
            onChange={handleInput} />Bathing</label>
          </li>
          <li>
            <label
            ><input
            name="spend-time"
            type="checkbox"
            value="chatting"
            onChange={handleInput}
            />Chatting</label>
          </li>
          <li>
            <label
            ><input name="spend-time" type="checkbox" value="noTime"
            onChange={handleInput} />I don't like to
            spend time with it</label>
          </li>
        </ul>
        </div>
        <label
        >What else have you got to say about your rubber duck?<textarea
        name="review"
        cols="30"
        rows="10"
        value={formData.review} 
        onChange={handleInput}
        ></textarea></label
        ><label
        >Put your name here (if you feel like it):<input
        type="text"
        name="username"
        value={formData.username} 
        onChange={handleInput} /></label
        ><label
        >Leave us your email pretty please??<input
        type="email"
        name="email"
        value={formData.email} 
        onChange={handleInput} /></label
        ><input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
  </main>
    </>
  );
}

export default Survey;
