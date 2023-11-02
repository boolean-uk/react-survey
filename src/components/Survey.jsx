// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Survey() {
  const [duckColour, setDuckColour] = useState(1);
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [inputValueThree, setInputValueThree] = useState("");
  const [checkbox, setCheckbox] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckbox([...checkbox, value]);
    } else {
      setCheckbox(checkbox.filter(item => item !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button clicked");
    console.log("Value of duckColour: " + duckColour);
    console.log("First text box: " + inputValueOne);
    console.log("Second text box: " + inputValueTwo);
    console.log("Third text box: " + inputValueThree);
    console.log(checkbox);
  
    // Reset the form fields and state to their original state here
    setDuckColour(1);
    setInputValueOne("");
    setInputValueTwo("");
    setInputValueThree("");
    setCheckbox([]);
  };

  return (
    <main className="survey">
      <section className="survey__list">
        <h2>Answers list</h2>
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck's color?</h3>
            <ul>
              {[1, 2, 3, 4].map((rating) => (
                <li key={rating}>
                  <input
                    id={`color-${rating}`}
                    type="radio"
                    name="color"
                    value={rating}
                    onClick={() => setDuckColour(rating)}
                    checked={duckColour === rating}
                  />
                  <label htmlFor={`color-${rating}`}>{rating}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              {[
                "Swimming",
                "Bathing",
                "Chatting",
                "Don't like spending time with it"
              ].map((activity) => (
                <li key={activity}>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value={activity}
                      onChange={handleCheckboxChange}
                      checked={checkbox.includes(activity)}
                    />
                    {activity}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <label>What else would you like to say about your rubber duck?</label>
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={inputValueOne}
            onChange={(e) => setInputValueOne(e.target.value)}
          ></textarea>
          <label>Enter your name (optional):</label>
          <input
            type="text"
            name="username"
            value={inputValueTwo}
            onChange={(e) => setInputValueTwo(e.target.value)}
          />
          <label>Leave us your email (optional):</label>
          <input
            type="email"
            name="email"
            value={inputValueThree}
            onChange={(e) => setInputValueThree(e.target.value)}
          />
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
