import { useState } from "react";

const initialForm = {
  color: "",
  spendTime: "",
  review: "",
  username: "",
  email: "",
};


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [form, setForm] = useState(initialForm)



  function handleChange(e) {
    const {name, type, value} = e.target
    if (type === "checkbox") {
      setForm({ ...form, [name]: value });
    } else if (type === "radio") {
      setForm({ ...form, [name]: value });
    } else {
    setForm({ ...form, [e.target.name]: e.target.value });
  }}

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    setForm(initialForm)
  }

  const timeWithDuckOptions = ["Swimming", "Bathing", "Chatting", "I don't like to spend time with it"]
  const colors = ["1", "2", "3", "4"]

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* AnswersItem component should be here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                {colors.map(color =>
                <>
                  <input
                    onChange={(e) => handleChange(e)}
                    id={`color-${color}`}
                    type="radio"
                    name="color"
                    value={color}
                    checked={form.color === color}
                  />
                  <label htmlFor={`color-${color}`}>{color}</label>
                </>
                )}
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                {timeWithDuckOptions.map(option =>
                <label>
                  <input
                    onChange={(e) => handleChange(e)}
                    name="spendTime"
                    type="checkbox"
                    value={option}
                    checked={form.spendTime === option}
                  />{option}
                </label>
                )}
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              onChange={(e) => handleChange(e)}
              name="review"
              cols="30"
              rows="10"
              value={form.review}
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
