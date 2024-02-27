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
  const [haveChanges, setHaveChanged] = useState(-1);
  
  // Handling submit
  const handleSubmit = (event) =>
  {
    event.preventDefault()
    answerForms.push(formData)
    setAnswerData(answerForms)
    setFormData(INITIAL_FORM_DATA)
  }

  // Handling edited submit
  const handleEditSubmit = (event) =>
  {
    event.preventDefault()
    answerForms[haveChanges] = formData
    setAnswerData([...answerForms])
    setFormData(INITIAL_FORM_DATA)
    setHaveChanged(-1)
  }

  // Handling input
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

  // Handling button "Edit"
  const editForm = (data) =>
  {
    setFormData({
      color: data.color,
      timeSpent: data.timeSpent,
      review: data.review,
      username: data.username,
      email: data.email
    })
    setHaveChanged(data.index)
  }

  // Handling button "Delete"
  const deleteForm = (data) =>
  {
    answerForms.splice(data.index, 1)
    setAnswerData([...answerForms])
  }

  return (
    <>
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answerData={answerData} editForm={editForm} deleteForm={deleteForm} />
      </section>
      <section className="survey__form">{/* a form should be here */}</section>
      <form className="form" onSubmit={haveChanges > -1 ? handleEditSubmit : handleSubmit}>
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
            checked={formData.timeSpent.includes("swimming")}
            />Swimming</label>
          </li>
          <li>
            <label
            ><input name="spend-time" type="checkbox" value="bathing"
            onChange={handleInput} checked={formData.timeSpent.includes("bathing")} />Bathing</label>
          </li>
          <li>
            <label
            ><input
            name="spend-time"
            type="checkbox"
            value="chatting"
            onChange={handleInput}
            checked={formData.timeSpent.includes("chatting")}
            />Chatting</label>
          </li>
          <li>
            <label
            ><input name="spend-time" type="checkbox" value="noTime"
            onChange={handleInput} checked={formData.timeSpent.includes("noTime")} />I don't like to
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
