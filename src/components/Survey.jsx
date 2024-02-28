import { useState } from "react";

function Survey() {

  const InitialState = {
    duckRating: "",
    duckActivitySwimming: false,
    duckActivityBathing: false,
    duckActivityChatting: false,
    duckActivitNoTime: false,
    otherDuckComments: "",
    userName: "",
    userEmail: "",

  }

  const [open, setOpen] = useState(false); //Ignore this state

  const [surveyData, setSurveyData] = useState(InitialState)

  function duckSurveyInput(event) {
    const inputName = event.target.name
    const inputType = event.target.type
    const inputValue = event.target.value
    const checked = event.target.checked

    if (inputName === "color") {
      setSurveyData({...surveyData, duckRating: inputValue})
    }
    
    if (inputName === "spend-time" && inputType === "checkbox") {
      if (inputValue === "swimming") {
        setSurveyData({...surveyData, duckActivitySwimming: checked})
      }
    }

    if (inputValue === "bathing") {
      setSurveyData({...surveyData, duckActivityBathing: checked})
    }

    if (inputValue === "chatting") {
      setSurveyData({...surveyData, duckActivityChatting: checked})
    }

    if (inputValue === "noTime") {
      setSurveyData({...surveyData, duckActivitNoTime: checked})
    }

    if(inputName === "review") {
      setSurveyData({...surveyData, otherDuckComments: inputValue})
    }

    if (inputName === "username") {
      setSurveyData({...surveyData, userName: inputValue})
    }

    if (inputName === "email") {
      setSurveyData({...surveyData, userEmail: inputValue})
    }
  }


  function printSubmit(event) {
    console.log(
      `duckRating: ${surveyData.duckRating},
      duckActivityChecks:
      swimming:${surveyData.duckActivitySwimming},
      bathing:${surveyData.duckActivityBathing},
      chatting:${surveyData.duckActivityChatting},
      noTime:${surveyData.duckActivityNoTime},
      otherDuckComments: ${surveyData.otherDuckComments},
      userName: ${surveyData.userName},
      userEmail: ${surveyData.userEmail}`
    )

    event.preventDefault()
    setSurveyData(InitialState)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        </section>
        <section className="survey-form">
          <form className="form"> 
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form-group radio">
              <h3>How do you rate your rubber duck color?</h3>
              <ul>
                <li>
                  <input id="color-one" type="radio" name="color" value="1" onChange={duckSurveyInput} checked={surveyData.duckRating === "1"} />
                  <label htmlFor="color-one">1</label>
                </li>
                <li>
                  <input id="color-two" type="radio" name="color" value="2" onChange={duckSurveyInput} checked={surveyData.duckRating === "2"} />
                  <label htmlFor="color-two">2</label>
                </li>
                <li>
                  <input id="color-three" type="radio" name="color" value="3" onChange={duckSurveyInput} checked={surveyData.duckRating === "3"} />
                  <label htmlFor="color-three">3</label>
                </li>
                <li>
                  <input id="color-four" type="radio" name="color" value="4" onChange={duckSurveyInput} checked={surveyData.duckRating === "4"} />
                  <label htmlFor="color-four">4</label>
                </li>
              </ul>
            </div>
            <div className="form-group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <ul>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="swimming" onChange={duckSurveyInput} checked={surveyData.duckActivitySwimming}/>
                    Swimming
                  </label>
                </li>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="bathing" onChange={duckSurveyInput} checked={surveyData.duckActivitySwimming}/>
                    Bathing
                  </label>
                </li>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="chatting" onChange={duckSurveyInput} checked={surveyData.duckActivitySwimming}/>
                    Chatting
                  </label>
                </li>
                <li>
                  <label>
                    <input name="spend-time" type="checkbox" value="noTime" onChange={duckSurveyInput} checked={surveyData.duckActivitySwimming}/>
                    I do not like to spend time wtih it
                  </label>
                </li>
              </ul>
            </div>
            <label>
              What else have you got to say about the rubber duck?
              <textarea name="review" cols="30" rows="10" onChange={duckSurveyInput} value={surveyData.otherDuckComments}></textarea>
            </label>
            <label>
              Put your name here (if you feel like it):
              <input type="text" name="username" onChange={duckSurveyInput} value={surveyData.userName} />
            </label>
            <label>
              Leave us your email pretty please??
              <input type="email" name="email" onChange={duckSurveyInput} value={surveyData.userEmail} />
            </label>
            <input className="form-submit" type="submit" value="Submit Survey!" onClick={printSubmit}/>
          </form>
      </section>
    </main>
  );
}

export default Survey;
