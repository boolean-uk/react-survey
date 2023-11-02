import Checkboxes from "./Checkboxes"
import RadioButtons from "./RadioButtons"

export default function SurveyItem () {
  const valArr = [
    1, 2, 3, 4
  ]

  const checkBoxArr = [
    ["Swimming", "swimming"],
    ["Chatting", "chatting"],
    ["I don't like to spend time with it", "noTime"]
  ]

  return (
  <form className="form">
    <h2>Tell us what you think about your rubber duck!</h2>
    <div className="form__group radio">

      <h3>How do you rate your rubber duck colour?</h3>
      <RadioButtons valArr={valArr}/>
      
      <h3>How do you rate your duck's consistency?</h3>
      <RadioButtons valArr={valArr}/>
      
      <h3>How do you rate your rubber duck's logo?</h3>
      <RadioButtons valArr={valArr}/>
    
    </div>
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <Checkboxes valDescArr={checkBoxArr}/>
    </div>
    <label>
      What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={(event) => console.log(event.target.name)}
        ></textarea>
    </label>

      <label>Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value="" 
          onChange={(event) => console.log(event.target.name)}
        />
      </label>

    <label>
      Leave us your email pretty please??<input
        type="email"
        name="email"
        value=""
        onChange={(event) => console.log(event.target.name)}
    /></label
    ><input className="form__submit" type="submit" value="Submit Survey!" />
  </form>
  )
}