/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "./Input";

const initialFormData = {
  // bestFeatures: [],
  // worstFeatures: [],
  consistency: "",
  colour: "",
  logo: "",
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialFormData);
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setAnswers([...answers, formData]);
    setFormData(initialFormData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheck = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData({ ...formData, timeSpent: [...formData.timeSpent, name] });
    } else {
      setFormData({
        ...formData,
        timeSpent: formData.timeSpent.filter((item) => item !== name),
      });
    }
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            {["1", "2", "3", "4"].map((value) => (
              <>
                <input
                  key={value}
                  id={`colour${value}`}
                  name="colour"
                  value={value}
                  type="radio"
                  onChange={handleChange}
                  checked={formData.colour === value}
                />
                <label htmlFor={`colour${value}`}>{value}</label>
              </>
            ))}

            <h3>How do you rate your rubber duck colour?</h3>
            {["1", "2", "3", "4"].map((value) => (
              <>
                <input
                  key={value}
                  id={`consistency${value}`}
                  name="consistency"
                  value={value}
                  type="radio"
                  onChange={handleChange}
                  checked={formData.consistency === value}
                />
                <label htmlFor={`consistency${value}`}>{value}</label>
              </>
            ))}

            <h3>How do you rate your rubber duck logo?</h3>
            {["1", "2", "3", "4"].map((value) => (
              <>
                <input
                  key={value}
                  id={`logo${value}`}
                  name="logo"
                  value={value}
                  type="radio"
                  onChange={handleChange}
                  checked={formData.logo === value}
                />
                <label htmlFor={`logo${value}`}>{value}</label>
              </>
            ))}
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>

            {["swimming", "bathing", "chatting"].map((value) => (
              <>
                <input
                  key={value}
                  id={value}
                  name={value}
                  type="checkbox"
                  onChange={handleCheck}
                />
                <label htmlFor={value}>{value}</label>
              </>
            ))}
            
            <input
              id="noTime"
              name="noTime"
              type="checkbox"
              onChange={handleCheck}
            />

            <label htmlFor="noTime">I do not</label>

            <label>
              What else have you got to say about your rubber duck?
              <textarea
                id="review"
                name="review"
                cols="30"
                rows="10"
                value={formData.review}
                onChange={handleChange}
              ></textarea>
            </label>

            <label>
              Put your name here (if you feel like it):
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>

            <label>
              Leave us your email pretty please??
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
