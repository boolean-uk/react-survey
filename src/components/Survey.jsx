import { useState } from "react";
import AnswersList from "./AnswersList";
import answersDB from "../../db.json";

const initialFormState = {
  best: [],
  worst: [],
  color: "",
  consistancy: "",
  logo: "",
  spendTime: [],
  review: "",
  name: "",
  email: "",
}



function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(initialFormState)
  const [answer, setAnswer] = useState(answersDB.answers)

  // functions
  const handleSubmit = (event) => {
    event.preventDefault()
    setForm(initialFormState)
    setAnswer([...answer, form])
    console.log(form)

    fetch("http://localhost:3000/answers", {
      method: "POST",
      body: JSON.stringify(form),
    });
  }

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    const inputType = event.target.type
    const checked = event.target.checked

    // Able to add multiple checkboxes to by making a new array and pushing all checkboxes in, and set on the new array
    if (inputName === 'best' && inputType === "checkbox"){
      if (checked){
        const newArray = [...form.best]
        newArray.push(inputValue)
        setForm({...form, best: newArray})
      } else if (!checked){
        const newArray = form.best.filter(
          (item) => item !== inputValue
        );
        setForm({...form, best: newArray})
      }
    }
    if (inputName === 'worst' && inputType === "checkbox"){
      if (checked){
        const newArray = [...form.worst]
        newArray.push(inputValue)
        setForm({...form, worst: newArray})
      } else if (!checked){
        const newArray = form.worst.filter(
          (item) => item !== inputValue
        );
        setForm({...form, worst: newArray})
      }
    }
    if (inputName === 'color'){
      setForm({...form, color: inputValue})
    }
    if (inputName === 'consistancy'){
      setForm({...form, consistancy: inputValue})
    }
    if (inputName === 'logo'){
      setForm({...form, logo: inputValue})
    }
    if (inputName === 'spend-time' && inputType === "checkbox"){
      if (checked){
        const newArray = [...form.spendTime]
        newArray.push(inputValue)
        setForm({...form, spendTime: newArray})
      } else if (!checked){
        const newArray = form.spendTime.filter(
          (item) => item !== inputValue
        );
        setForm({...form, spendTime: newArray})
      }
    }
    if (inputName === 'review'){
      setForm({...form, review: inputValue})
    }
    if (inputName === 'name'){
      setForm({...form, name: inputValue})
    }
    if (inputName === 'email'){
      setForm({...form, email: inputValue})
    }
  }

  return (
    <>
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {
          <AnswersList
          answer = {answer}
          setAnswer = {setAnswer}
          />
        }
      </section>

      <section className="survey__form">{
        <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group">
          <h3>What would you say that are the best feature of your rubber duck?</h3>
          <ul>
            <li>
              <label
                ><input
                  name="best"
                  type="checkbox"
                  value="yellow"
                  onChange={handleChange}
                  
                />It's yellow!</label>
            </li>
            <li>
              <label
                ><input name="best" type="checkbox" value="squeak" onChange={handleChange}
                />It squeaks!</label>
            </li>
            <li>
              <label
                ><input
                  name="best"
                  type="checkbox"
                  value="logo"
                  onChange={handleChange}
                  
                />It has a logo!</label>
            </li>
            <li>
              <label
                ><input name="best" type="checkbox" value="big"
                onChange={handleChange}
                   />Its big!</label>
            </li>
          </ul>

          <br></br>

          <h3>What would you say are the worst bits of your rubber duck?</h3>
          <ul>
            <li>
              <label
                ><input
                  name="worst"
                  type="checkbox"
                  value="yellow"
                  onChange={handleChange}
                  
                />It's yellow!</label>
            </li>
            <li>
              <label
                ><input name="worst" type="checkbox" value="squeak" onChange={handleChange}
                />It squeaks!</label>
            </li>
            <li>
              <label
                ><input
                  name="worst"
                  type="checkbox"
                  value="logo"
                  onChange={handleChange}
                  
                />It has a logo!</label>
            </li>
            <li>
              <label
                ><input name="worst" type="checkbox" value="big"
                onChange={handleChange}
                   />Its big!</label>
            </li>
          </ul>
        </div>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={form.color === '1'} /><label
                htmlFor="color-one"
                >1</label>
            </li>
            <li>
              <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={form.color === '2'} /><label
                htmlFor="color-two"
                >2</label>
            </li>
            <li>
              <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={form.color === '3'} /><label
                htmlFor="color-three"
                >3</label>
            </li>
            <li>
              <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={form.color === '4'}/><label
                htmlFor="color-four"
                >4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck consistancy?</h3>
          <ul>
            <li>
              <input id="consistancy-one" type="radio" name="consistancy" value="1" onChange={handleChange} checked={form.consistancy === '1'} /><label
                htmlFor="consistancy-one"
                >1</label>
            </li>
            <li>
              <input id="consistancy-two" type="radio" name="consistancy" value="2" onChange={handleChange} checked={form.consistancy === '2'} /><label
                htmlFor="consistancy-two"
                >2</label>
            </li>
            <li>
              <input id="consistancy-three" type="radio" name="consistancy" value="3" onChange={handleChange} checked={form.consistancy === '3'}/><label
                htmlFor="consistancy-three"
                >3</label>
            </li>
            <li>
              <input id="consistancy-four" type="radio" name="consistancy" value="4" onChange={handleChange} checked={form.consistancy === '4'} /><label
                htmlFor="consistancy-four" 
                >4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck logo?</h3>
          <ul>
            <li>
              <input id="logo-one" type="radio" name="logo" value="1" onChange={handleChange} checked={form.logo === '1'}/><label
                htmlFor="logo-one"
                >1</label>
            </li>
            <li>
              <input id="logo-two" type="radio" name="logo" value="2" onChange={handleChange} checked={form.logo === '2'}/><label
                htmlFor="logo-two"
                >2</label>
            </li>
            <li>
              <input id="logo-three" type="radio" name="logo" value="3" onChange={handleChange} checked={form.logo === '3'}/><label
                htmlFor="logo-three"
                >3</label>
            </li>
            <li>
              <input id="logo-four" type="radio" name="logo" value="4" onChange={handleChange} checked={form.logo === '4'}/><label
                htmlFor="logo-four"
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
                ><input name="spend-time" type="checkbox" value="bathing" onChange={handleChange}
                />Bathing</label>
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
                ><input name="spend-time" type="checkbox" value="noTime" onChange={handleChange}
                 />I don't like to
                spend time with it</label>
            </li>
          </ul>
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={form.review}
          ></textarea>
          </label>
          <label>Put your name here (if you feel like it):<input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name} />
            </label>
            <label>
              Leave us your email pretty please??
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email} />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>      
      }</section>
    </main>
    </>
  );
    
}

export default Survey;
