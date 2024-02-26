import { useState } from "react";

function Survey() {
  const InitialState = {
    duckRating: "",
    duckActivitySwimming: false,
    duckActivityBathing: false,
    duckActivityChatting: false,
    duckActivityNoTime: false,
    otherDuckComments: "",
    userName: "",
    userEmail: "",
  };
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state

  const [surveyUserData, setSurveyUserData] = useState(InitialState);

  function handleDuckSurveyInput(event) {
    const inputName = event.target.name;
    const inputType = event.target.type;
    const inputValue = event.target.value;
    const checked = event.target.checked;

    console.log(inputName, inputType, inputValue, checked);

    if (inputName === "color") {
      setSurveyUserData({ ...surveyUserData, duckRating: inputValue });
    }
    if (inputName === "spend-time" && inputType === "checkbox") {
      if (inputValue === "swimming") {
        setSurveyUserData({ ...surveyUserData, duckActivitySwimming: checked });
      }
      if (inputValue === "bathing") {
        setSurveyUserData({ ...surveyUserData, duckActivityBathing: checked });
      }
      if (inputValue === "chatting") {
        setSurveyUserData({ ...surveyUserData, duckActivityChatting: checked });
      }
      if (inputValue === "noTime") {
        setSurveyUserData({ ...surveyUserData, duckActivityNoTime: checked });
      }
    }
    if (inputName === "review") {
      setSurveyUserData({ ...surveyUserData, otherDuckComments: inputValue });
    }
    if (inputName === "username") {
      setSurveyUserData({ ...surveyUserData, userName: inputValue });
    }
    if (inputName === "email") {
      setSurveyUserData({ ...surveyUserData, userEmail: inputValue });
    }
  }

  function onSubmitButtonPress(event) {
    console.log(
      `duckRating: ${surveyUserData.duckRating},
      duckActivityChecks:
      swimming:${surveyUserData.duckActivitySwimming},
      bathing:${surveyUserData.duckActivityBathing},
      chatting:${surveyUserData.duckActivityChatting},
      noTime:${surveyUserData.duckActivityNoTime},
      otherDuckComments: ${surveyUserData.otherDuckComments},
      userName: ${surveyUserData.userName},
      userEmail: ${surveyUserData.userEmail}`
    );

    event.preventDefault();
    setSurveyUserData(InitialState);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        {/*<AnswersList />*/}
      </section>
      <section className="survey__form">
        <form className="form">
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
                  onChange={handleDuckSurveyInput}
                  checked={surveyUserData.duckRating === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleDuckSurveyInput}
                  checked={surveyUserData.duckRating === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleDuckSurveyInput}
                  checked={surveyUserData.duckRating === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleDuckSurveyInput}
                  checked={surveyUserData.duckRating === "4"}
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
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleDuckSurveyInput}
                    checked={surveyUserData.duckActivitySwimming}
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
                    onChange={handleDuckSurveyInput}
                    checked={surveyUserData.duckActivityBathing}
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
                    onChange={handleDuckSurveyInput}
                    checked={surveyUserData.duckActivityChatting}
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
                    onChange={handleDuckSurveyInput}
                    checked={surveyUserData.duckActivityNoTime}
                  />
                  I do not like to spend time with it
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
              onChange={handleDuckSurveyInput}
              value={surveyUserData.otherDuckComments}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleDuckSurveyInput}
              value={surveyUserData.userName}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleDuckSurveyInput}
              value={surveyUserData.userEmail}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
            onClick={onSubmitButtonPress}
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
