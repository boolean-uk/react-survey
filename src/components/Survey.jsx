import { useState } from "react";

// 2. Create Initial State

const INITIAL_STATE = {
  color: "",
  review: "",
  username: "",
  email: "",
  // time_spent: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  // 3. Common event listener callback function
  const [form, setForm] = useState(INITIAL_STATE);

  // 5. Submit the form

  const submitForm = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    };
    fetch("http://localhost:5174", options);

    // Log the data from form
    console.log(form);

    // setting Form
    setForm(INITIAL_STATE);
  };

  // 4. If statements: if the input type is a checkbox or radio type need an if statement because the value is either true or false

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked ? value : "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  console.log(form);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        {/* a form should be here */}

        {/* 1. FORM HERE - COPIED FROM TEMPLATE */}

        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}

            {/* <!-- This is a radio buttons group --> */}
            <ul>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={form.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={form.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={form.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  onChange={(event) => handleChange(event)}
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={form.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* <!-- checkboxes go here --> */}
            {/* <!-- This is a checkboxes group --> */}
            <ul>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={form.spend_time === "swimming"}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    checked={form.spend_time === "bathing"}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={form.spend_time === "chatting"}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => handleChange(event)}
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    checked={form.spend_time === "noTime"}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              onChange={(event) => handleChange(event)}
              name="review"
              cols="30"
              rows="10"
              value={form.review}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              onChange={(event) => handleChange(event)}
              type="text"
              name="username"
              value={form.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              onChange={(event) => handleChange(event)}
              type="email"
              name="email"
              value={form.email}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
