import React from "react";
import { useState } from "react";
import AnswersList from "./AnswersList"
import AnswersItem from "./AnswersItem"

function Survey() {

  // Variables:

  const [open, setOpen] = useState(false); //Ignore this state
  let [inputValueOne, setInputValueOne] = useState('');
  let [inputValueTwo, setInputValueTwo] = useState('');
  let [inputValueThree, setInputValueThree] = useState('');
  let duckColour = 1

  // Checkbox:

  const [checkbox, checkboxValue] = useState([]);
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      // Checkbox is checked, add it to the array
      checkboxValue([...checkbox, value]);
    } else {
      // Checkbox is unchecked, remove it from the array
      checkboxValue(checkbox.filter(item => item !== value));
    }
  };

  // Click event (submit):

  function Submit(event) {
    event.preventDefault()
    console.log('Button clicked')
    console.log('Value of duckColour: ' + duckColour)
    console.log('First text box: ' + inputValueOne)
    console.log('Second text box: ' + inputValueTwo)
    console.log('Third text box: ' + inputValueThree)
    console.log(checkbox)
    setInputValueOne('')
    setInputValueTwo('')
    setInputValueThree('')
    checkboxValue([])
  }

  return (

    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onClick={() => duckColour = 1} /><label
                  htmlFor="color-one"
                >1</label
                >
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onClick={() => duckColour = 2} /><label
                  htmlFor="color-two"
                >2</label
                >
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onClick={() => duckColour = 3} /><label
                  htmlFor="color-three"
                >3</label
                >
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onClick={() => duckColour = 4} /><label
                  htmlFor="color-four"
                >4</label
                >
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
                    value="Swimming"
                    onChange={handleCheckboxChange}
                    checked={checkbox.includes('Swimming')}
                  />Swimming</label>
              </li>
              <li>
                <label
                ><input name="spend-time"
                  type="checkbox"
                  value="Bathing"
                  onChange={handleCheckboxChange}
                  checked={checkbox.includes('Bathing')}
                  />Bathing</label>
              </li>
              <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="Chatting"
                    onChange={handleCheckboxChange}
                    checked={checkbox.includes('Chatting')}
                  />Chatting</label>
              </li>
              <li>
                <label
                ><input name="spend-time"
                  type="checkbox"
                  value="Don't like spending time with it"
                  onChange={handleCheckboxChange}
                  checked={checkbox.includes("Don't like spending time with it")}
                  />I don't like to spend time with it</label
                >
              </li>
            </ul>

          </div>
          <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            value={inputValueOne}
            onChange={(e) => setInputValueOne(e.target.value)}
          ></textarea></label
          ><label
          >Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value={inputValueTwo}
              onChange={(e) => setInputValueTwo(e.target.value)}
            /></label
          ><label
          >Leave us your email pretty please??<input
              type="email"
              name="email"
              value={inputValueThree}
              onChange={(e) => setInputValueThree(e.target.value)}
            /></label
          ><input onClick={Submit} className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
