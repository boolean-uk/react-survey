import { useState } from "react";

import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const initialState = {
    color: '', //radio input, ett av 4 val
    spendTime: [false, false, false, false],  //checkboxes, 0-4 val
    review: '',
    username: '',
    email: '',
  }

  const [userData, setUserData] = useState(initialState)

  const [savedAnswers, setSavedAnswers] = useState([])

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    //const inputType = event.target.type;

    //console.log({ inputName, inputValue, inputType });

    switch (inputName) {
      case 'color':
        setUserData({ ...userData, color: inputValue });
        break;
      case 'spend-time':
        setCheckboxes(event.target);
        break;
      case 'review':
        setUserData({ ...userData, review: inputValue });
        break;
      case 'username':
        setUserData({ ...userData, username: inputValue });
        break;
      case 'email':
        setUserData({ ...userData, email: inputValue });
        break;
    }
  }

  function setCheckboxes(target) {
    const checked = target.checked
    const inputValue = target.value

    let index = 0

    switch (inputValue) {
      case 'swimming':
        index = 0
        break;
      case 'bathing':
        index = 1
        break;
      case 'chatting':
        index = 2
        break;
      case 'noTime':
        index = 3
        break;
    }

    const newSpendTime = [...userData.spendTime];
    newSpendTime[index] = checked;

    setUserData({
      ...userData,
      spendTime: newSpendTime,
    });
  }


  const submitForm = (event) => {
    //log answers to console
    event.preventDefault();
    console.log(userData)

    //spara svar i en state
    setSavedAnswers([...savedAnswers, userData])

    //cleara form
    setUserData(initialState)
  }

  return (
    <main className="survey">

      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        {savedAnswers.length > 0 &&
          <AnswersList
            answersList={savedAnswers}
          />}

      </section>

      <section className="survey__form">
        {/* a form should be here */}
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/*<!-- Radio inputs go here -->*/}
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={userData.color === '1'}
                  onChange={handleChange} />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={userData.color === '2'}
                  onChange={handleChange} />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={userData.color === '3'}
                  onChange={handleChange} />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={userData.color === '4'}
                  onChange={handleChange} />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/*<!-- checkboxes go here -->*/}
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                    checked={userData.spendTime[0]} />
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
                    checked={userData.spendTime[1]} />
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
                    checked={userData.spendTime[2]} />
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
                    checked={userData.spendTime[3]} />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={userData.review}
              onChange={handleChange}>
            </textarea>
          </label>

          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </label>

          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange} />
          </label>

          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
            onClick={submitForm} />
        </form>
      </section>
    </main>
  );
}


export default Survey;
