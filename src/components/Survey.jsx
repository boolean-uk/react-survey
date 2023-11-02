import { useState } from "react";

const initialValue = {
  color: "",
  
  review: "",
  username: "",
  email: "",
};
function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setform] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    // setform ({...form,[name] :value})
    if (type === "checkbox") {
      setform({ ...form, [name]: checked });
    } else {
      setform({ ...form, [name]: value });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    event.target.reset();
    setform(initialValue);

    console.log(form);
  };
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={(event) => handleChange(event)}
                  checked={form.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={(event) => handleChange(event)}
                  checked={form.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="color"
                  id="color-three"
                  value="3"
                  onChange={(event) => handleChange(event)}
                  checked={form.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="color"
                  id="color-four"
                  value="4"
                  onChange={(event) => handleChange(event)}
                  checked={form.color === "4"}
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
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={(event) => handleChange(event)}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={(event) => handleChange(event)}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={(event) => handleChange(event)}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={(event) => handleChange(event)}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
            <label>
              What else have you got to say about your rubber duck?
              <textarea
                name="review"
                cols="30"
                rows="10"
                onChange={(event) => handleChange(event)}
              ></textarea>
            </label>
            <label>
              Put your name here (if you feel like it):
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={(event) => handleChange(event)}
              />
            </label>
            <label>
              Leave us your email pretty please??
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => handleChange(event)}
              />
            </label>
            <input
              className="form__submit"
              type="submit"
              value="Submit Survey!"
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Survey;
