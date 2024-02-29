import { useState } from "react";
import FormCheckboxes from "./FormCheckboxes";
import FormRadioButtons from "./FormRadioButtons";
import AnswerList from "./AnswerList";

function Survey() {
  const [open] = useState(false); //Ignore this state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  });

  const [submittedValues, setSubmittedValues] = useState(null);

  const formObject = {
    name: name,
    email: email,
    feedback: feedback,
    radioValue: radioValue,
    checkboxValues: checkboxValues,
  };

  const handleRadioChange = (value) => {
    setRadioValue(value);
  };

  const handleCheckboxChange = (checkboxName, isChecked) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: isChecked,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValues(formObject);
    console.log("Submitted form!", formObject);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {submittedValues ? <AnswerList answers={submittedValues} /> : <p></p>}
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <FormRadioButtons onRadioChange={handleRadioChange} />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <FormCheckboxes onCheckboxChange={handleCheckboxChange} />
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <input
            onClick={handleSubmit}
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
