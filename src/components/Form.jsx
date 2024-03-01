import { useState } from "react";
import CheckBoxes from "./CheckBoxes";
import RadioButtons from "./RadioButtons";
import PropTypes from "prop-types";

function Form(props) {
  const [answers, setAnswers] = useState({
    color: null,
    timeSpent: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: "",
    username: "",
    email: "",
  });

  const [userData, setUserData] = useState("")

  function updateAnswers(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type
    if (name !== undefined) {
        if(type === "checkbox" || type === "radio") {
          setUserData({ ...userData, [name]: checked });
        }
        else {
          setUserData({...userData, [name]: value})
        }
      }
    if (name === "spend-time") {
      setAnswers({
        ...answers,
        timeSpent: { ...answers.timeSpent, [value]: event.target.checked },
      });
    } else {
      setAnswers({ ...answers, [name]: value });
    }
  }
  function onSubmit(event) {
    event.preventDefault();
    props.submit(answers);
    setAnswers({
      color: null,
      timeSpent: {
        swimming: false,
        bathing: false,
        chatting: false,
        noTime: false,
      },
      review: "",
      username: "",
      email: "",
    });
    event.target.form.reset();
  }

  return (
    <>
      <form className="form">
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButtons setRadio={updateAnswers} value={answers.name} />
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <CheckBoxes setCheck={updateAnswers} value={answers.timeSpent} />
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            onChange={updateAnswers}
            value={answers.review}
          ></textarea>
        </label>
        <label>
          Put your name here (if you feel like it):
          <input
            type="text"
            name="username"
            onChange={updateAnswers}
            value={answers.username}
          />
        </label>
        <label>
          Leave us your email pretty please??
          <input
            type="email"
            name="email"
            onChange={updateAnswers}
            value={answers.email}
          />
        </label>
        <input
          className="form__submit"
          type="submit"
          value="Submit Survey!"
          onClick={onSubmit}
        />
      </form>
    </>
  );
}
Form.propTypes = {
  submit: PropTypes.func.isRequired,
};
export default Form;