import { useState } from "react";
const initialState = {
  color: "",
  spendtime1: false,
  spendtime2: false,
  spendtime3: false,
  spendtime4: false,
  review: "",
  username: "",
  email: "",
};
function Form() {
  const [form, setForm] = useState(initialState);

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);

    setForm(initialState);
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
    console.log(event.target);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input
              onChange={(event) => handleChange(event)}
              checked={form.color === "1"}
              id="color-one"
              type="radio"
              name="color"
              value="1"
            />
            <label htmlFor="color-one">1</label>
          </li>
          <li>
            <input
              onChange={(event) => handleChange(event)}
              checked={form.color === "2"}
              id="color-two"
              type="radio"
              name="color"
              value="2"
            />
            <label htmlFor="color-two">2</label>
          </li>
          <li>
            <input
              onChange={(event) => handleChange(event)}
              checked={form.color === "3"}
              id="color-three"
              type="radio"
              name="color"
              value="3"
            />
            <label htmlFor="color-three">3</label>
          </li>
          <li>
            <input
              onChange={(event) => handleChange(event)}
              checked={form.color === "4"}
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
        <h3>How do you like to spend time with your rubber duck?</h3>
        <ul>
          <li>
            <label>
              <input
                onChange={(event) => handleChange(event)}
                checked={form.spendtime1}
                name="spendtime1"
                type="checkbox"
                value="swimming"
              />
              Swimming
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={(event) => handleChange(event)}
                checked={form.spendtime2}
                name="spendtime2"
                type="checkbox"
                value="bathing"
              />
              Bathing
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={(event) => handleChange(event)}
                checked={form.spendtime3}
                name="spendtime3"
                type="checkbox"
                value="chatting"
              />
              Chatting
            </label>
          </li>
          <li>
            <label>
              <input
                onChange={(event) => handleChange(event)}
                checked={form.spendtime4}
                name="spendtime4"
                type="checkbox"
                value="noTime"
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
          value={form.review}
          name="review"
          cols="30"
          rows="10"
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
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}
export default Form;
