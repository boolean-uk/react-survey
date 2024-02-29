import PropTypes from "prop-types";
import { useState } from "react";
function RadioButtons(props) {

  const [userData, setUserData] = useState("")

  

  function updateAnswer(event) {
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
    }

  return (
    <ul>
      <li>
        <input
          id="color-one"
          type="radio"
          name="color"
          value="1"
          onChange={updateAnswer}
          checked={props.value==='1'}
        />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input
          id="color-two"
          type="radio"
          name="color"
          value="2"
          onChange={updateAnswer}
          checked={props.value==='2'}

        />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input
          id="color-three"
          type="radio"
          name="color"
          value="3"
          onChange={updateAnswer}
          checked={props.value==='3'}

        />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input
          id="color-four"
          type="radio"
          name="color"
          value="4"
          onChange={updateAnswer}
          checked={props.value==='4'}

        />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}
RadioButtons.propTypes = {
  setRadio: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
export default RadioButtons;