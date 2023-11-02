import { useState } from "react";

import ColorRadioButtons from "./ColorRadioButtons";
import SpendTimeCheckboxes from "./SpendTimeCheckboxes";
import Review from "./Review";
import Username from "./Username"
import Email from "./Email";

function Form() {
  const INITIAL_STATE = {
    features: [],
    color: "",
    spendTime: "",
    review: "",
    username: "",
    email: ""
  };

  const [form, setForm] = useState(INITIAL_STATE);

  const CHECKED_STATE = {
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
    isChecked4: false
  }

  const [isChecked, setIsChecked] = useState(CHECKED_STATE)

  function submit(e) {
    e.preventDefault();
    console.log(form);
    setForm(INITIAL_STATE);
    setIsChecked(CHECKED_STATE)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "features") {
      let trackFeatures = [...form.features]

      if (value === "yellow") {
        setIsChecked({...isChecked, isChecked1: checked})
      }
      if (value === "squeak") {
        setIsChecked({...isChecked, isChecked2: checked})
      }
      if (value === "big") {
      setIsChecked({...isChecked, isChecked3: checked})
      }
      if (value === "logo") {
      setIsChecked({...isChecked, isChecked4: checked})
      }
      
      if (checked) {
        trackFeatures.push(value)
      }
      else {
        trackFeatures = trackFeatures.filter(e => e !== value)
      }
      setForm({...form, features: trackFeatures})
    }
    else {
        setForm({ ...form, [name]: value });
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>What would you say are the best features of your rubber duck?</h3>
        <ul>
            <li>
                <label>
                    <input
                         onChange={e => handleChange(e)}
                         name="features"
                         type="checkbox"
                         value="yellow"
                        checked={isChecked.isChecked1}
                    />
                    It's yellow!
                </label>
            </li>
            <li>
                <label>
                    <input
                         onChange={e => handleChange(e)}
                         name="features"
                         type="checkbox"
                         value="squeak"
                        checked={isChecked.isChecked2}
                    />
                    It squeaks!
                </label>
            </li>
            <li>
                <label>
                    <input
                         onChange={e => handleChange(e)}
                         name="features"
                         type="checkbox"
                         value="big"
                        checked={isChecked.isChecked3}
                    />
                    It's big!
                </label>
            </li>
            <li>
                <label>
                    <input
                         onChange={e => handleChange(e)}
                         name="features"
                         type="checkbox"
                         value="logo"
                        checked={isChecked.isChecked4}
                    />
                    It has a logo!
                </label>
            </li>
        </ul>


      </div>
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
        <Username form={form} handleChange={handleChange} />
      </label>
      <label>
        Leave us your email pretty please??
        <Email form={form} handleChange={handleChange} />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
