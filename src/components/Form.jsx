import PropTypes from 'prop-types';
import Buttons from "./Buttons.jsx";
import Checkboxes from "./Checkboxes.jsx";

function Form(props) {
  
  const{handleChange, username, setUsername, email, setEmail, colour, setColour, timeSpent, setTimeSpent, review, setReview, submitForm} = props

  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <Buttons
        handleChange = {handleChange}
        colour = {parseInt(colour)}
        setColour = {setColour}
        />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes 
        handleChange = {handleChange}
        timeSpent = {timeSpent}
        setTimeSpent = {setTimeSpent}
        />
      </div>
      <label>What else have you got to say about your rubber duck?<textarea
        name="review"
        cols="30"
        rows="10"
        value={review}
        onChange={(x) => handleChange(x, setReview)}></textarea>
      </label>
      <label>Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={username}
          onChange={(x) => handleChange(x, setUsername)} 
        /></label>
          <label>Leave us your email pretty please??
          <input
          type="email"
          name="email"
          value={email}
          onChange={(x) => handleChange(x, setEmail)} /></label>
          <input 
          className="form__submit" 
          type="submit" 
          value="Submit Survey!" 
          onClick={submitForm}/>
    </form>
    );
}

Form.propTypes = {
  handleChange: PropTypes.func,
  colour: PropTypes.number,
  setColour: PropTypes.func,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  timeSpent: PropTypes.arrayOf(PropTypes.string),
  setTimeSpent: PropTypes.func,
  review: PropTypes.string,
  setReview: PropTypes.func,
  submitFOrm: PropTypes.func,
}

export default Form;
