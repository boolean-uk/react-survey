import { useState } from "react";
import answersDB from "../../db.json";
import AnswerList from "./AnswersList.jsx";
const initialFormData = {
  username: "",
  email: "",
  review: "",
  activity: "",
  bestFeatures: "",
  worstFeatures: "",
  colorRate: "",
  consistency: "",
  logo: "",
};
function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [form, setForm] = useState(initialFormData);
  const [answersState, setAnswersState] = useState(answersDB.answers);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    fetch("http://localhost:3000/answers", {
      method: "POST",
      body: JSON.stringify(form),
    });
    setAnswersState([...answersState, form]);
    setForm(initialFormData);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;
    const inputChecked = event.target.checked;

    if (inputName === "username") {
      setForm({ ...form, username: inputValue });
    }
    if (inputName === "email") {
      setForm({ ...form, email: inputValue });
    }
    if (inputName === "review") {
      setForm({ ...form, review: inputValue });
    }
    if (inputType === "checkbox" && inputName === "spend-time") {
      //Check if the checkbox is ticked
      if (inputChecked) {
        //Create a new activity array
        const updatedArray = [...form.activity];
        //Add the new value
        updatedArray.push(inputValue);
        //Update the array
        setForm({ ...form, activity: updatedArray });
      } else if (!inputChecked) {
        //Create a new activity array, where we filter out the value
        const updatedArray = form.activity.filter(
          (item) => item !== inputValue
        );
        //Update the array
        setForm({ ...form, activity: updatedArray });
      }
    }
    if (inputType === "checkbox" && inputName === "features") {
      if (inputChecked) {
        const updatedArray = [...form.bestFeatures];
        updatedArray.push(inputValue);
        setForm({ ...form, bestFeatures: updatedArray });
      } else if (!inputChecked) {
        const updatedArray = form.bestFeatures.filter(
          (item) => item !== inputValue
        );
        setForm({ ...form, bestFeatures: updatedArray });
      }
    }
    if (inputType === "checkbox" && inputName === "worst") {
      if (inputChecked) {
        const updatedArray = [...form.worstFeatures];
        updatedArray.push(inputValue);
        setForm({ ...form, worstFeatures: updatedArray });
      } else if (!inputChecked) {
        const updatedArray = form.worstFeatures.filter(
          (item) => item !== inputValue
        );
        setForm({ ...form, worstFeatures: updatedArray });
      }
    }
    if (inputType === "radio" && inputName === "consistency") {
      setForm({ ...form, consistency: inputValue });
    }
    if (inputType === "radio" && inputName === "color") {
      setForm({ ...form, colorRate: inputValue });
    }
    if (inputType === "radio" && inputName === "logo") {
      setForm({ ...form, logo: inputValue });
    }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswerList
          answersState={answersState}
          setAnswersState={setAnswersState}
        />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            {/*Consistency rating code*/}
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id="consistency-one"
                  type="radio"
                  name="consistency"
                  value="1"
                  onChange={handleChange}
                  checked={form.consistency === "1"}
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
                  checked={form.consistency === "2"}
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
                  checked={form.consistency === "3"}
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
                  checked={form.consistency === "4"}
                />
                <label htmlFor="consistency-four">4</label>
              </li>
            </ul>

            {/*color rating code*/}
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                  checked={form.colorRate === "1"}
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
                  checked={form.colorRate === "2"}
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
                  checked={form.colorRate === "3"}
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
                  checked={form.colorRate === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>

            {/*Radio logo code */}
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id="logo-one"
                  type="radio"
                  name="logo"
                  value="1"
                  onChange={handleChange}
                  checked={form.logo === "1"}
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
                  checked={form.logo === "2"}
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
                  checked={form.logo === "3"}
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
                  checked={form.logo === "4"}
                />
                <label htmlFor="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            {/*Best features code*/}
            <h3>What would you say is the best features of your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="It's yellow!"
                    onChange={handleChange}
                  />
                  Its yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
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
                    name="features"
                    type="checkbox"
                    value="It has a logo!"
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="Its big!"
                    onChange={handleChange}
                  />
                  Its big!
                </label>
              </li>
            </ul>

            {/*Worst bits code*/}
            <h3>What would you say is the worst bits of your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="worst"
                    type="checkbox"
                    value="Its yellow!"
                    onChange={handleChange}
                  />
                  Its yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst"
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
                    name="worst"
                    type="checkbox"
                    value="It has a logo!"
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst"
                    type="checkbox"
                    value="Its big!"
                    onChange={handleChange}
                  />
                  Its big!
                </label>
              </li>
            </ul>

            {/*Spending time code*/}
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
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
                    value="bathing"
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
                    value="chatting"
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
                    value="noTime"
                    onChange={handleChange}
                  />{" "}
                  I dont like to spend time with it
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
              value={form.review}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={form.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
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
