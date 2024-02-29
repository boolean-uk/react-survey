import { useState } from "react";
import AnswersList from "./AnswersList";
import db from "../../db.json";

const initialFormData = {
  best: [],
  worst: [],
  consistency: 0,
  color: 0,
  logo: 0,
  time: [],
  text: "",
  email: "",
  name: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [userData, setUserData] = useState(initialFormData);
  const [answers, setAnswers] = useState(db.items);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/items", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    setAnswers([...answers, userData]);
    setUserData(initialFormData);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;

    if (inputName === "consistency" && inputType === "radio") {
      setUserData({ ...userData, consistency: inputValue });
    } else if (inputName === "color" && inputType === "radio") {
      setUserData({ ...userData, color: inputValue });
    } else if (inputName === "logo" && inputType === "radio") {
      setUserData({ ...userData, logo: inputValue });
    } else if (inputName === "review") {
      setUserData({ ...userData, text: inputValue });
    } else if (inputType === "text" && inputName === "name") {
      setUserData({ ...userData, name: inputValue });
    } else if (inputType === "email" && inputName === "email") {
      setUserData({ ...userData, email: inputValue });
    } else if (inputType === "checkbox" && inputName === "spend-time") {
      const checkedTime = event.target.value;
      const updatedTime = [...userData.time];
      // if the box is checked, push the value
      if (event.target.checked) {
        updatedTime.push(checkedTime);
      } else {
        // if the box is unchecked, remove the value
        const index = updatedTime.indexOf(checkedTime);
        if (index != -1) {
          updatedTime.splice(index, 1);
        }
      }
      setUserData({ ...userData, time: updatedTime });
    } else if (inputType === "checkbox" && inputName === "worst-feature") {
      const checkedWorst = event.target.value;
      const updatedWorst = [...userData.worst];
      // if the box is checked, push the value
      if (event.target.checked) {
        updatedWorst.push(checkedWorst);
      } else {
        // if the box is unchecked, remove the value
        const index = updatedWorst.indexOf(checkedWorst);
        if (index != -1) {
          updatedWorst.splice(index, 1);
        }
      }
      setUserData({ ...userData, worst: updatedWorst });
    } else if (inputType === "checkbox" && inputName === "best-feature") {
      const checkedBest = event.target.value;
      const updatedBest = [...userData.best];
      // if the box is checked, push the value
      if (event.target.checked) {
        updatedBest.push(checkedBest);
      } else {
        // if the box is unchecked, remove the value
        const index = updatedBest.indexOf(checkedBest);
        if (index != -1) {
          updatedBest.splice(index, 1);
        }
      }
      setUserData({ ...userData, best: updatedBest });
    }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answerList={answers} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>
            What would you say that are the best features of your rubber duck?
          </h2>
          {/* First checkbox goes here */}
          <div className="form__group">
            <ul>
              <li>
                <label>
                  <input
                    name="best-feature"
                    type="checkbox"
                    value="It's Yellow"
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="best-feature"
                    type="checkbox"
                    value="It squeaks!"
                    onChange={handleChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="best-feature"
                    type="checkbox"
                    value="It has a logo"
                    onChange={handleChange}
                  />
                  It has a logo
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="best-feature"
                    type="checkbox"
                    value="Its big"
                    onChange={handleChange}
                  />
                  Its big
                </label>
              </li>
            </ul>
          </div>
          <h2>
            What would you say that are the worst bits of your rubber duck?
          </h2>
          {/* Second checkbox goes here */}
          {/*<!-- This is a checkboxes group -->*/}
          <div className="form__group">
            <ul>
              <li>
                <label>
                  <input
                    name="worst-feature"
                    type="checkbox"
                    value="It's yellow!"
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst-feature"
                    type="checkbox"
                    value="It squeaks!"
                    onChange={handleChange}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst-feature"
                    type="checkbox"
                    value="It has a logo"
                    onChange={handleChange}
                  />
                  It has a logo
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst-feature"
                    type="checkbox"
                    value="Its big"
                    onChange={handleChange}
                  />
                  Its big
                </label>
              </li>
            </ul>
          </div>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            {/*<!-- This is a radio buttons group -->*/}
            <ul>
              <li>
                <input
                  id="consistency-one"
                  type="radio"
                  name="consistency"
                  value="1"
                  onChange={handleChange}
                  checked={userData.consistency === "1"}
                />
                <label htmlFor="consistency-one">1</label>
              </li>
              <li>
                <input
                  id="consistency-two"
                  type="radio"
                  name="consistency"
                  value="2"
                  onChange={handleChange}
                  checked={userData.consistency === "2"}
                />
                <label htmlFor="consistency-two">2</label>
              </li>
              <li>
                <input
                  id="consistency-three"
                  type="radio"
                  name="consistency"
                  value="3"
                  onChange={handleChange}
                  checked={userData.consistency === "3"}
                />
                <label htmlFor="consistency-three">3</label>
              </li>
              <li>
                <input
                  id="consistency-four"
                  type="radio"
                  name="consistency"
                  value="4"
                  onChange={handleChange}
                  checked={userData.consistency === "4"}
                />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/*<!-- This is a radio buttons group -->*/}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                  checked={userData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange}
                  checked={userData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange}
                  checked={userData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange}
                  checked={userData.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            {/*<!-- This is a radio buttons group -->*/}
            <ul>
              <li>
                <input
                  id="logo-one"
                  type="radio"
                  name="logo"
                  value="1"
                  onChange={handleChange}
                  checked={userData.logo === "1"}
                />
                <label htmlFor="logo-one">1</label>
              </li>
              <li>
                <input
                  id="logo-two"
                  type="radio"
                  name="logo"
                  value="2"
                  onChange={handleChange}
                  checked={userData.logo === "2"}
                />
                <label htmlFor="logo-two">2</label>
              </li>
              <li>
                <input
                  id="logo-three"
                  type="radio"
                  name="logo"
                  value="3"
                  onChange={handleChange}
                  checked={userData.logo === "3"}
                />
                <label htmlFor="logo-three">3</label>
              </li>
              <li>
                <input
                  id="logo-four"
                  type="radio"
                  name="logo"
                  value="4"
                  onChange={handleChange}
                  checked={userData.logo === "4"}
                />
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>

            {/*<!-- This is a checkboxes group -->*/}
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="Swimming"
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="Bathing"
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="Chatting"
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="I don't like to spend time with it"
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
              onChange={handleChange}
              value={userData.text}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={userData.email}
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

export default Survey;
