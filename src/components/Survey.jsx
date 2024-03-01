import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const ratings = [1, 2, 3, 4];

  const checkboxValues = ["swimming", "bathing", "chatting", "noTime"];
  const checkboxLabels = [
    "Swimming",
    "Bathing",
    "Chatting",
    "I don't like to spend time with it",
  ];

  const [open, ] = useState(false); //Ignore this state

  const initState = {
    rateConsistency: 0,
    rateColour: 0,
    rateLogo: 0,
    preferedTimeSpent: [],
    whatElseText: "",
    fullName: "",
    email: "",
  };

  const [userData, setUserData] = useState(initState);

  const [answersList, setAnswersList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswersList([...answersList, userData]);
    event.target.reset()
    setUserData(initState);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;

    if (inputType === "radio") {
      if (inputName === "consistency-rating") {
        setUserData({ ...userData, rateConsistency: parseInt(inputValue) });
      }
      if (inputName === "colour-rating") {
        setUserData({ ...userData, rateColour: parseInt(inputValue) });
      }
      if (inputName === "logo-rating") {
        setUserData({ ...userData, rateLogo: parseInt(inputValue) });
      }
    }
    if (inputName === "spend-time") {
      if (!event.target.checked) {
        setUserData({
          ...userData,
          preferedTimeSpent: userData.preferedTimeSpent.filter((item) => (item !== inputValue))
        });
        
      } else {
        setUserData({
          ...userData,
          preferedTimeSpent: [...userData.preferedTimeSpent, inputValue],
        })
      }
    }
    if (inputName === "review") {
      setUserData({ ...userData, whatElseText: inputValue });
    }
    if (inputName === "name") {
      setUserData({ ...userData, fullName: inputValue });
    }
    if (inputName === "email") {
      setUserData({ ...userData, email: inputValue });
    }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {answersList && <AnswersList answersList={answersList} />}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group radio consistency">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              {ratings.map((rating, index) => (
                <li key={index}>
                  <input
                    id={"consistency" + rating}
                    type="radio"
                    name="consistency-rating"
                    value={rating}
                    onChange={handleChange}
                  />
                  <label htmlFor={"consistency" + rating}>{rating}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="form__group radio colour">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {ratings.map((rating, index) => (
                <li key={index}>
                  <input
                    id={"colour" + rating}
                    type="radio"
                    name="colour-rating"
                    value={rating}
                    onChange={handleChange}
                  />
                  <label htmlFor={"colour" + rating}>{rating}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="form__group radio logo">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              {ratings.map((rating, index) => (
                <li key={index}>
                  <input
                    id={"logo" + rating}
                    type="radio"
                    name="logo-rating"
                    value={rating}
                    onChange={handleChange}
                  />
                  <label htmlFor={"logo" + rating}>{rating}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              {checkboxValues.map((value, index) => (
                <li key={index}>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value={value}
                      onChange={handleChange}
                    />
                    {checkboxLabels[index]}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              placeholder="Review your precious duck..."
              value={userData.whatElseText}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="name"
              value={userData.fullName}
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
