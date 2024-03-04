import PropTypes from "prop-types"
import RadioButtonComponent from "./RadioButtonComponent"
import CheckboxListComponent from "./CheckboxListComponent"



function FormComponent({survey, SetSurvey, answerList, SetAnswersList}) {
  function SubmitForm(event) {
    const testAnswersItem = {
        username: "",
        colour: -1,
        timeSpent: [],
        review: ""
      }
  
    SetAnswersList([...answerList, survey])
    // Reset Survey
    SetSurvey(testAnswersItem)
    console.log("Reseting survey and addit to list")
    console.log(answerList)
    console.log("survey:" )
    console.log(survey)
    event.preventDefault()
  }

  function handleUsernameInputChange(event) {
    const { value } = event.target;
    SetSurvey({ ...survey, username: value });
  }
  function handleEmailInputChange(event) {
    const { value } = event.target;
    SetSurvey({ ...survey, email: value });
  }
  function handleReviewInputChange(event) {
    const { value } = event.target;
    SetSurvey({ ...survey, review: value });
  }
  function GetValue(valueName) {
    return survey[valueName] ?? "";
  }

  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtonComponent survey={survey} SetSurvey={SetSurvey}/>
      </div>
      
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <CheckboxListComponent survey={survey} SetSurvey={SetSurvey}/>
      </div>
      
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" value={GetValue('review')} onChange={handleReviewInputChange}></textarea>
      </label>
      
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value={GetValue('username')} onChange={handleUsernameInputChange} />
      </label>
      
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value={GetValue('email')} onChange={handleEmailInputChange} />
      </label>
      
      <button className="form__submit" type="submit" title="Submit Survey!" onClick={SubmitForm}>Submit Survey!</button>
    </form>
  )
}

FormComponent.propTypes = {
    survey: PropTypes.object.isRequired, 
    SetSurvey: PropTypes.func.isRequired,
    SetAnswersList: PropTypes.func.isRequired,
    answerList: PropTypes.array.isRequired
}

export default FormComponent