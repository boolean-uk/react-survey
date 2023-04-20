import { useState } from "react";
import Radio from "./Radio";
import Checkboxes from "./Checkboxes";

const initialForm = {
  colourRating: "",
  timeSpend: [],
  review: "",
  username: "",
  email: ""
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState(initialForm)



 
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        {
          <form className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              <Radio
              formData = {formData}
              setFormData = {setFormData}

              />
            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <Checkboxes
              formData = {formData}
              setFormData = {setFormData}
              />
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
        }
      </section>
    </main>
  );
}

export default Main;
