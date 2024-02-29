import { useState } from "react";

const radioButtonValues = [1, 2, 3, 4];
const bestOrWorstThings = ["It's yellow!", "It squeaks!", "It has a logo!", "It's big!"];
const activities = ["Swimming", "Bathing", "Chatting", "I don't like spending time with it"];

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [userData, setUserData] = useState({});

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputChecked = event.target.checked;

    if (event.target.type !== "checkbox") {
      setUserData({ ...userData, [inputName]: inputValue });
    } else {
      if (inputChecked) {
        if (userData[inputName] === undefined) {
          setUserData({ ...userData, [inputName]: [inputValue] });
        } else {
          setUserData({
            ...userData,
            [inputName]: [...userData[inputName], inputValue],
          });
        }
      } else {
        if (userData[inputName].length === 1) {
          const updateUserData = userData;
          delete updateUserData[inputName];
          setUserData(updateUserData);
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
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    // fetch("http://localhost:3000/users", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    // });
    event.target.reset();
    setUserData({});
  }

  return (
    <main className="survey" onSubmit={handleSubmit}>
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
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
                  name="best-things"
                  value={value}
                  onChange={handleChange}
                />
                {value}
              </label>
            ))}
          </div>
          <div className="form__group">
            <h3>
              What would you say are the worst bits of your rubber duck?
            </h3>
            {bestOrWorstThings.map((value, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="worst-things"
                  value={value}
                  onChange={handleChange}
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
                    name="color"
                    value={value}
                    id={"color" + value}
                    onChange={handleChange}
                  />
                  <label key={index} htmlFor={"color" + value}>
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
                  name="activity"
                  value={value}
                  onChange={handleChange}
                />
                {value}
              </label>
            ))}
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
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
