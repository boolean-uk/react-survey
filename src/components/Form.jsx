import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";
import { useState } from "react";

export default function Form({ answers, setAnswers}) {
  const [ratingColor, setRatingColor] = useState(0);
  const [ratingTimeSpent, setRatingTimeSpent] = useState('');
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnswer = {
      ratingColor,
      ratingTimeSpent,
      text,
      name,
      email
    }
    setAnswers([...answers, newAnswer]);
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
    

  return (
      <form className='form' onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons setRatingColor={setRatingColor}/>
      </div>
      <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <Checkboxes ratingTimeSpent={ratingTimeSpent} setRatingTimeSpent={setRatingTimeSpent} />
      </div>
      <label
        >What else have you got to say about your rubber duck?<textarea
          name="review"
          cols="30"
          rows="10"
          value={text}
          onChange={handleTextChange}
          ></textarea></label>
        <label
        >Put your name here (if you feel like it):<input
          type="text"
          name="username"
          value={name} 
          onChange={handleNameChange}
          /></label>
      <label>Leave us your email pretty please??<input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}/>
          </label><input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
  )
}
