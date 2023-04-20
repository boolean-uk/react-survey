import React, { useState } from 'react';
import CheckBoxes from './Checkboxes';
import RadioButtons from './RadioButtons';

export default function Form(props) {
  const [color, setColor] = useState("");
  const [timeSpent, setTimeSpent] = useState([]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleTimeSpentChange = (event) => {
    const { value } = event.target;
    if (timeSpent.includes(value)) {
      setTimeSpent(timeSpent.filter((item) => item !== value));
    } else {
      setTimeSpent([...timeSpent, value]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Color rating: ${color}`);
    console.log(`Time spent: ${timeSpent.join(", ")}`);
    console.log(`Review: ${event.target.review.value}`);
    console.log(`Username: ${event.target.username.value}`);
    console.log(`Email: ${event.target.email.value}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons handleChange={handleColorChange} value={color} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckBoxes handleCheckbox={handleTimeSpentChange} values={timeSpent} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
