import { useState } from "react";

const initialForm = {
  duckColor: 1,
  spendTime: [],
  review: "",
  username: "",
  email: "",
};


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  
  const [form, setForm] = useState(initialForm)
    


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }



  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* AnswersItem component should be here */}
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  onChange={(e) => handleChange(e)}
                  id="color-one"
                  type="radio"
                  name="color"
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  onChange={(e) => handleChange(e)}
                  id="color-two"
                  type="radio"
                  name="color"
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  onChange={(e) => handleChange(e)}
                  id="color-three"
                  type="radio"
                  name="color"
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  onChange={(e) => handleChange(e)}
                  id="color-four"
                  type="radio"
                  name="color"
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
            >
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              name="username"
              value={form.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              name="email"
              value={form.email}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
