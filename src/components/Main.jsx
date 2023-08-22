import { useState } from "react";
import AnswersList from './AnswersList'; 
import {answersSet} from "./AnswersItem";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  //form data state
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    bestFeatures:[],
    worstBits:[],
    duckConsistency: "",
    colourRating:"",
    duckLogo: "",
    timeSpent:[],
    review:""
  })

  //answer state
  const [answers, setAnswers] = useState([])

  function handleChange(e) {
    const {name, value, type} =e.target

    if (type === "checkbox") {
      const newValue = [ ...formData[name]] // name => to choose between timeSpent, bestFeatures and worstBits
      if (newValue.includes(value)) {
        const index = newValue.indexOf(value)
        newValue.splice(index, 1)
      }
      else {
        newValue.push(value)
      }
      setFormData(prev => ({ ...prev, [name]: newValue}))
    }
    else {
      setFormData(prev => ({ ...prev, [name]: value}))
    }
    }

    function handleSubmit(e) {
      e.preventDefault()
      console.log(formData)

      setAnswers(prev => [ ...prev, formData])
      resetForm()
    }

    function resetForm() {
      setFormData({
        username:"",
        email:"",
        bestFeatures:[],
        worstBits:[],
        duckConsistency: "",
        colourRating:"",
        duckLogo: "",
        timeSpent:[],
        review:""
      })
    }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="main__form">
      <form className="form" onSubmit={handleSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>

  <div className="form__group">
    <h3>What would you say that are the best features of your rubber duck?</h3>
    <ul>
      {['It\'s yellow!', 'It squeaks!', 'It has a logo!', 'Its big!'].map(feature => (
        <li key={feature}>
          <label>
            <input 
              id={`best-${feature}`} 
              type="checkbox" 
              name="bestFeatures" 
              value={feature} 
              checked={formData.bestFeatures.includes(feature)}
              onChange={handleChange} 
            />
            {feature}
          </label>
        </li>
      ))}
    </ul>
</div>

<div className="form__group">
    <h3>What would you say that are the worst bits of your rubber duck?</h3>
    <ul>
      {['It\'s yellow!', 'It squeaks!', 'It has a logo!', 'Its big!'].map(bit => (
        <li key={bit}>
          <label>
            <input 
              id={`worst-${bit}`} 
              type="checkbox" 
              name="worstBits" 
              value={bit}
              checked={formData.worstBits.includes(bit)}
              onChange={handleChange} 
            />
            {bit}
          </label>
        </li>
      ))}
    </ul>
</div>

<div className="form__group radio">
  <h3>How do you rate your rubber duck consistency?</h3>
  <ul>
    {['1','2','3','4'].map(val => (
      <li key={val}>
        <input 
          id={`consistency-${val}`} 
          type="radio" 
          name="duckConsistency" 
          value={val} 
          checked={formData.duckConsistency === val}
          onChange={handleChange} 
        />
        <label htmlFor={`consistency-${val}`}>{val}</label>
      </li>
    ))}
  </ul>
</div>

  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
      {['1','2','3','4'].map(val => (
        <li key={val}>
          <input 
            id={`color-${val}`} 
            type="radio" 
            name="colourRating" 
            value={val} 
            checked={formData.colourRating === val}
            onChange={handleChange} 
          />
          <label htmlFor={`color-${val}`}>{val}</label>
        </li>
      ))}
    </ul>
  </div>
  
  <div className="form__group radio">
  <h3>How do you rate your rubber duck logo?</h3>
  <ul>
    {['1','2','3','4'].map(val => (
      <li key={val}>
        <input 
          id={`logo-${val}`} 
          type="radio" 
          name="duckLogo" 
          value={val} 
          checked={formData.duckLogo === val}
          onChange={handleChange} 
        />
        <label htmlFor={`logo-${val}`}>{val}</label>
      </li>
    ))}
  </ul>
</div>

  <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
      {['swimming', 'bathing', 'chatting', 'noTime'].map(activity => (
        <li key={activity}>
          <label>
            <input 
              name="timeSpent" 
              type="checkbox" 
              value={activity}
              checked={formData.timeSpent.includes(activity)}
              onChange={handleChange} 
            />
            {answersSet[activity]}
          </label>
        </li>
      ))}
    </ul>
  </div>

  <label>
    What else have you got to say about your rubber duck?
    <textarea
      name="review"
      cols="30"
      rows="10"
      value={formData.review}
      onChange={handleChange}
    ></textarea>
  </label>
  
  <label>
    Put your name here (if you feel like it):
    <input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleChange}
    />
  </label>

  <label>
    Leave us your email pretty please??
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
    />
  </label>

  <input className="form__submit" type="submit" value="Submit Survey!" />
</form>

      </section>
    </main>
  );
}

export default Main;
