import { useState } from "react";

import ColorRadioButtons from "./ColorRadioButtons";
import SpendTimeCheckboxes from "./SpendTimeCheckboxes";
import Review from "./Review";

function Form() {
  const INITIAL_STATE = {
    color: "",
    spendTime: "",
    review: "",
    username: "",
    email: ""
  };

  const [form, setForm] = useState(INITIAL_STATE);

  function submit(e) {
    e.preventDefault();
    console.log(form);
    setForm(INITIAL_STATE);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <form className="form" onSubmit={submit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        { <ColorRadioButtons form={form} handleChange={handleChange} /> }
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        { <SpendTimeCheckboxes form={form} handleChange={handleChange} /> }
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <Review form={form} handleChange={handleChange} />
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
        onChange={e => handleChange(e)}
            type="text"
            name="username"
            value={form.username}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
            onChange={e => handleChange(e)}
            type="email"
            name="email"
            value={form.email}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
