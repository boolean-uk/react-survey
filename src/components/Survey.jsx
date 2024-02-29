import { useState, useRef } from "react";
import AnswersList from './AnswersList'
import surveyTemplate from '../data/surveyTemplate'
import RadioButtons from './RadioButtons'
import CheckBoxes from './CheckBoxes'

// ToDo:
// Implement AnswersList properly
// Create Radio inputs Component x
// Add Radio Buttons x
// Create Checkbox Component x
// Add Checkboxes x

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveyAnswers, setSurveyAnswers] = useState(surveyTemplate)
  const [answersList, setAnswersList] = useState([])

  const formRef = useRef(null); 

  const makeSubmission = (e) => {
    e.preventDefault()
    setAnswersList([...answersList, surveyAnswers])
    setSurveyAnswers(surveyTemplate)
    formRef.current.reset();
  }

  const nameValidation = (e) => {
    setSurveyAnswers({...surveyAnswers, respondent: {...surveyAnswers.respondent, name: e.target.value} })
  }

  const emailValidation = (e) => {
    setSurveyAnswers({...surveyAnswers, respondent: {...surveyAnswers.respondent, email: e.target.value} })
  }

  const reviewValidation = (e) => {
    setSurveyAnswers({...surveyAnswers, textareaInput: e.target.value})
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>
      <section className="survey__form">
        <form ref={formRef} className="form">

          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtons setSurveyAnswers={setSurveyAnswers} surveyAnswers={surveyAnswers}/>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <CheckBoxes setSurveyAnswers={setSurveyAnswers} surveyAnswers={surveyAnswers}/>
          </div>
          
          <label
            >What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={surveyAnswers.textareaInput}
              onChange={(e) => reviewValidation(e)}
            ></textarea>
          </label>

          <label
            >Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value={surveyAnswers.respondent.name}
              onChange={(e) => nameValidation(e)}  
            />
          </label>

          <label
            >Leave us your email pretty please??<input
              type="email"
              name="email"
              value={surveyAnswers.respondent.email} onChange={(e) => emailValidation(e)}/></label>
          <input className="form__submit" type="submit" value="Submit Survey!" onClick={(e) => makeSubmission(e)}/>

        </form>

      </section>
    </main>
  );
}

export default Survey;
