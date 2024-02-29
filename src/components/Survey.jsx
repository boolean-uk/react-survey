import { useState } from "react";
import AnswersList from "./AnswersList";

const radioButtonValues = [1, 2, 3, 4];
const bestOrWorstThings = [
  "It's yellow!",
  "It squeaks!",
  "It has a logo!",
  "It's big!",
];
const activities = [
  "Swimming",
  "Bathing",
  "Chatting",
  "I don't like spending time with it",
];

const initialUserData = {
  username: "",
  colour: "",
  timeSpent: [],
  review: "",
  bestThings: [],
  worstThings: [],
  consistency: "",
  logo: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [userData, setUserData] = useState(initialUserData);
  const [answers, setAnswers] = useState([]);

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputChecked = event.target.checked;

    if (event.target.type !== "checkbox") {
      setUserData({ ...userData, [inputName]: inputValue });
    } else {
      //TODO: why doesnt thiw work the second time i try too submit a form
      if (inputChecked) {
        setUserData({
          ...userData,
          [inputName]: [...userData[inputName], inputValue],
        });
      } else {
        setUserData({
          ...userData,
          [inputName]: userData[inputName].filter(
            (data) => data !== inputValue
          ),
        });
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    // fetch("http://localhost:3000/users", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    // });
    setAnswers([...answers, userData]);
    event.target.reset();
    setUserData(initialUserData);
  }

  return (
    <main className="survey" onSubmit={handleSubmit}>
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              What would you say are the best features of your rubber duck?
            </h3>
            {bestOrWorstThings.map((value, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="bestThings"
                  value={value}
                  onChange={handleChange}
                  checked={userData.bestThings.includes(value)}
                />
                {value}
              </label>
            ))}
          </div>
          <div className="form__group">
            <h3>What would you say are the worst bits of your rubber duck?</h3>
            {bestOrWorstThings.map((value, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="worstThings"
                  value={value}
                  onChange={handleChange}
                  checked={userData.worstThings.includes(value)}
                />
                {value}
              </label>
            ))}
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              {radioButtonValues.map((value, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name="consistency"
                    value={value}
                    id={"consistency" + value}
                    onChange={handleChange}
                  />
                  <label key={index} htmlFor={"consistency" + value}>
                    {value}
                  </label>
                </li>
              ))}
            </ul>

            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {radioButtonValues.map((value, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name="colour"
                    value={value}
                    id={"colour" + value}
                    onChange={handleChange}
                  />
                  <label key={index} htmlFor={"colour" + value}>
                    {value}
                  </label>
                </li>
              ))}
            </ul>
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              {radioButtonValues.map((value, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name="logo"
                    value={value}
                    id={"logo" + value}
                    onChange={handleChange}
                  />
                  <label key={index} htmlFor={"logo" + value}>
                    {value}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {activities.map((value, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="timeSpent"
                  value={value}
                  onChange={handleChange}
                  checked={userData.timeSpent.includes(value)}

                />
                {value}
              </label>
            ))}
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" onChange={handleChange} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" onChange={handleChange} />
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
