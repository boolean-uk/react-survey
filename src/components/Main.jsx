import { useState } from "react";

import AnswersList from "./AnswersList";
const initialState = {
  colour: null,
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};
function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialState);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //update the list
    setList([...list, formData]);
    
    setFormData({
      colour: null,
      timeSpent: [],
      review: "",
      username: "",
      email: "",
    })
  };
  const handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    if (e.target.type === "checkbox") {
      if (formData.timeSpent.includes(e.target.value)) {
        //remove the item if it is already in there
        setFormData({
          ...formData,
          timeSpent: formData.filter((time) => time !== e.target.value),
        });
      } else {
        setFormData({
          ...formData,
          timeSpent: [...formData.timeSpent, e.target.value],
          
        });
        console.log([e.target.name]+":",e.target.value);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={list} />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* <!-- Radio inputs go here --> */}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="colour"
                  value="1"
                  checked={formData.colour === "1"}
                  onChange={handleChange}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="colour"
                  value="2"
                  checked={formData.colour === "2"}
                  onChange={handleChange}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="colour"
                  value="3"
                  checked={formData.colour === "3"}
                  onChange={handleChange}
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="colour"
                  value="4"
                  checked={formData.colour === "4"}
                  onChange={handleChange}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="swimming"
                    checked={formData.timeSpent.includes("swimming")}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="bathing"
                    checked={formData.timeSpent.includes("bathing")}
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="chatting"
                    checked={formData.timeSpent.includes("chatting")}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="noTime"
                    checked={formData.timeSpent.includes("noTime")}
                    onChange={handleChange}
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
        </form>
      </section>
    </main>
  );
}

export default Main;
