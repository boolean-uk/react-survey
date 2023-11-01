import { useState } from "react";
import ColorRadioButtons from "./ColorRadioButtons";

function Form() {
  const INITIAL_STATE = {
    color: "",
    spendTime: ""
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
        {<ColorRadioButtons form={form} handleChange={handleChange} />}
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {
          <ul>
            <li>
              <label>
                <input
                    onChange={e => handleChange(e)}
                    name="spendTime"
                    type="checkbox"
                    value="swimming"
                    checked={form.spendTime === "swimming"}
                />
                Swimming
              </label>
            </li>
            <li>
              <label>
                <input
                    onChange={e => handleChange(e)}
                    name="spendTime"
                    type="checkbox"
                    value="bathing"
                    checked={form.spendTime === "bathing"}
                />
                Bathing
              </label>
            </li>
            <li>
              <label>
                <input
                    onChange={e => handleChange(e)}
                    name="spendTime"
                    type="checkbox"
                    value="chatting"
                    checked={form.spendTime === "chatting"}
                />
                Chatting
              </label>
            </li>
            <li>
              <label>
                <input
                    onChange={e => handleChange(e)}
                    name="spendTime"
                    type="checkbox"
                    value="noTime"
                    checked={form.spendTime === "noTime"}
                />
                I don't like to spend time with it
              </label>
            </li>
          </ul>
        }
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
