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

  function submit(e) {
    e.preventDefault();
    console.log(form);
    setForm(INITIAL_STATE);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "features" && checked) {
      let trackFeatures = [...form.features]

      if (checked) {
        trackFeatures.push(value)
        console.log(trackFeatures)
        // setForm({...form, features: value})
      }
      else {
        // setForm({...form, features: value.filter(e => e !== value)})
        trackFeatures = trackFeatures.filter(e => e !== value)
      }
      setForm({...form, features: trackFeatures})
      console.log(form)
    }
    else {
        setForm({ ...form, [name]: value });
        console.log(form)
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
                        //  checked={form.features === "yellow"}
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
                        //  checked={form.features === "squeak"}
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
                        //  checked={form.features === "big"}
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
                        //  checked={form.features === "logo"}
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
