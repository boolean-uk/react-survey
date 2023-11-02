import "./App.css";
import { useState } from "react";

const INITIAL_STATE = {
  color: "",
  hobbies: [],
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
  
    if (type === "checkbox") {
      let updatedHobbies;
      if (checked) {
        updatedHobbies = [...form.hobbies, value];
      } else {
        updatedHobbies = form.hobbies.filter((hobby) => hobby !== value);
      }
  
      setForm({ ...form, hobbies: updatedHobbies,
      });

    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("form data", form)

    setForm(INITIAL_STATE)
    event.target.reset()
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        {
          <form className="form" onSubmit={submitForm}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              <ul>
                <li>
                  <input
                    onChange={handleChange}
                    id="color-one"
                    type="radio"
                    name="color"
                    value="1"
                  />
                  <label htmlFor="color-one">1</label>
                </li>

                <li>
                  <input
                    onChange={handleChange}
                    id="color-two"
                    type="radio"
                    name="color"
                    value="2"
                  />
                  <label htmlFor="color-two">2</label>
                </li>

                <li>
                  <input
                    onChange={handleChange}
                    id="color-three"
                    type="radio"
                    name="color"
                    value="3"
                  />
                  <label htmlFor="color-three">3</label>
                </li>

                <li>
                  <input
                    onChange={handleChange}
                    id="color-four"
                    type="radio"
                    name="color"
                    value="4"
                  />
                  <label htmlFor="color-four">4</label>
                </li>
              </ul>
            </div>

            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <ul>
                <li>
                  <label>
                    <input
                      onChange={handleChange}
                      name="hobbies"
                      type="checkbox"
                      value="swimming"
                    />
                    Swimming
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      onChange={handleChange}
                      name="hobbies"
                      type="checkbox"
                      value="bathing"
                    />
                    Bathing
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      onChange={handleChange}
                      name="hobbies"
                      type="checkbox"
                      value="chatting"
                    />
                    Chatting
                  </label>
                </li>

                <li>
                  <label>
                    <input
                      onChange={handleChange}
                      name="spend-time"
                      type="checkbox"
                      value="noTime"
                    />
                    I dont like to spend time with it
                  </label>
                </li>
              </ul>
            </div>

            <label>
              What else have you got to say about your rubber duck?
              <textarea
                onChange={handleChange}
                name="review"
                cols="30"
                rows="10"
                value={form.review}
              ></textarea>
            </label>

            <label>
              Put your name here (if you feel like it):
              <input
                onChange={handleChange}
                type="text"
                name="username"
                value={form.username}
              />
            </label>

            <label>
              Leave us your email pretty please??
              <input
                onChange={handleChange}
                type="email"
                name="email"
                value={form.email}
              />
            </label>

            <input
              onChange={handleChange}
              className="form__submit"
              type="submit"
              value="Submit Survey!"
            />
          </form>
        }
      </section>
    </main>
  );
}

export default Survey;