import PropTypes from "prop-types";

function RadioButtonList(props) {
  return (
    <div className="form__group radio">
      <h3> How do you rate your rubber duck colour?</h3>
    <ul>
      <li>
        <input id="color-one" type="radio" name="color" value="1" onChange={props.onChange} checked={props.userData.color === "1"}/>
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input id="color-two" type="radio" name="color" value="2" onChange={props.onChange} checked={props.userData.color === "2"}/>
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input id="color-three" type="radio" name="color" value="3" onChange={props.onChange} checked={props.userData.color === "3"}/>
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input id="color-four" type="radio" name="color" value="4" onChange={props.onChange}
        checked={props.userData.color === "4"}/>
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
    </div>
  )
}

RadioButtonList.propTypes = {
  userData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioButtonList
