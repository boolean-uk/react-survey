import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state¨
  const [answers, setAnswers] = useState([]);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [userData, setUserData] = useState({
    best: {
      yellow: false,
      squeeks: false,
      haslogo: false,
      isbig: false,
    },
    worst: {
      yellow: false,
      squeeks: false,
      haslogo: false,
      isbig: false,
    },
    consistensy: false,
    color: false,
    logo: false,
    spendtime: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: "",
    username: "",
    email: "",
  });

function handleChange(event) {
  const { name, type, value, checked } = event.target;

  if (type === "checkbox") {
    // Check if the property is nested (e.g., 'best', 'worst', 'spendtime')
    if (Object.prototype.hasOwnProperty.call(userData, name)) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: { ...prevUserData[name], [value]: checked },
      }));
    } else {
      // Handle as a nested property update
      console.error("Attempting to update an unknown property:", name);
    }
  } else {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  }
}

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted:", { userData });

    const updatedAnswers = [...answers];

    if (currentEditIndex !== null) {
      // Update existing answer
      updatedAnswers[currentEditIndex] = userData;
    } else {
      // Add a new answer
      updatedAnswers.push(userData);
    }

    setCurrentEditIndex(null);
    setAnswers(updatedAnswers);

    setUserData({
      best: {
        yellow: false,
        squeeks: false,
        haslogo: false,
        isbig: false,
      },
      worst: {
        yellow: false,
        squeeks: false,
        haslogo: false,
        isbig: false,
      },
      consistensy: false,
      color: false,
      logo: false,
      spendtime: {
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false,
      },
      review: "",
      username: "",
      email: "",
    });
  }

  function editAnswers(index) {
    const answerToEdit = answers[index];
    setUserData(answerToEdit);
    setCurrentEditIndex(index); 
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} onEdit={editAnswers} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              What would you say are the best features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input
                    name="best"
                    type="checkbox"
                    value="yellow"
                    checked={userData.best.yellow}
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="best"
                    type="checkbox"
                    value="squeeks"
                    checked={userData.best.squeeks}
                    onChange={handleChange}
                  />
                  It squeeks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="best"
                    type="checkbox"
                    value="haslogo"
                    checked={userData.best.logo}
                    onChange={handleChange}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="best"
                    type="checkbox"
                    value="isbig"
                    checked={userData.best.big}
                    onChange={handleChange}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>What would you say are the worst bits of your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="worst"
                    type="checkbox"
                    value="yellow"
                    checked={userData.worst.yellow}
                    onChange={handleChange}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst"
                    type="checkbox"
                    value="squeeks"
                    checked={userData.worst.squeeks}
                    onChange={handleChange}
                  />
                  It squeeks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worst"
                    type="checkbox"
                    value="haslogo"
                    checked={userData.worst.logo}
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
                    value="isbig"
                    checked={userData.worst.big}
                    onChange={handleChange}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistensy?</h3>
            <ul>
              <li>
                <input
                  id="consistensy-one"
                  type="radio"
                  name="consistensy"
                  value="1"
                  checked={userData.consistensy === "1"}
                  onChange={handleChange}
                />
                <label for="consistensy-one">1</label>
              </li>
              <li>
                <input
                  id="consistensy-two"
                  type="radio"
                  name="consistensy"
                  value="2"
                  checked={userData.consistensy === "2"}
                  onChange={handleChange}
                />
                <label for="consistensy-two">2</label>
              </li>
              <li>
                <input
                  id="consistensy-three"
                  type="radio"
                  name="consistensy"
                  value="3"
                  checked={userData.consistensy === "3"}
                  onChange={handleChange}
                />
                <label for="consistensy-three">3</label>
              </li>
              <li>
                <input
                  id="consistensy-four"
                  type="radio"
                  name="consistensy"
                  value="4"
                  checked={userData.consistensy === "4"}
                  onChange={handleChange}
                />
                <label for="consistensy-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={userData.color === "1"}
                  onChange={handleChange}
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={userData.color === "2"}
                  onChange={handleChange}
                />
                <label for="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={userData.color === "3"}
                  onChange={handleChange}
                />
                <label for="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={userData.color === "4"}
                  onChange={handleChange}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input
                  id="logo-one"
                  type="radio"
                  name="logo"
                  value="1"
                  checked={userData.logo === "1"}
                  onChange={handleChange}
                />
                <label for="logo-one">1</label>
              </li>
              <li>
                <input
                  id="logo-two"
                  type="radio"
                  name="logo"
                  value="2"
                  checked={userData.logo === "2"}
                  onChange={handleChange}
                />
                <label for="logo-two">2</label>
              </li>
              <li>
                <input
                  id="logo-three"
                  type="radio"
                  name="logo"
                  value="3"
                  checked={userData.logo === "3"}
                  onChange={handleChange}
                />
                <label for="logo-three">3</label>
              </li>
              <li>
                <input
                  id="logo-four"
                  type="radio"
                  name="logo"
                  value="4"
                  checked={userData.logo === "4"}
                  onChange={handleChange}
                />
                <label for="logo-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spendtime"
                    type="checkbox"
                    value="swimming"
                    checked={userData.spendtime.swimming}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendtime"
                    type="checkbox"
                    value="bathing"
                    checked={userData.spendtime.bathing}
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendtime"
                    type="checkbox"
                    value="chatting"
                    checked={userData.spendtime.chatting}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendtime"
                    type="checkbox"
                    value="noTime"
                    checked={userData.spendtime.noTime}
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
              value={userData.review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={userData.username}
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
