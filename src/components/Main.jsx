import { useState } from "react";
// import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [color, setColor] = useState("");
  const [time, setTime] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime([...time, e.target.value]);
  };

  const handleComment = (e) => {
    setFeedback(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    e.target.reset();

    console.log(color, time, feedback, name, email);
    setColor("");
    setTime([]);
    setFeedback("");
    setName("");
    setEmail("");
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleFormSubmit}>
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
                  onChange={handleColorChange}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleColorChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleColorChange}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleColorChange}
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
                    id="swimming"
                    name="swimming"
                    type="checkbox"
                    value="swimming"
                    onChange={handleTimeChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    id="bathing"
                    name="bathing"
                    type="checkbox"
                    value="bathing"
                    onChange={handleTimeChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    id="chatting"
                    name="chatting"
                    type="checkbox"
                    value="chatting"
                    onChange={handleTimeChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    id="noTime"
                    name="noTime"
                    type="checkbox"
                    value="I don't like to spend time with it"
                    onChange={handleTimeChange}
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={feedback}
              onChange={handleComment}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
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

export default Main;
