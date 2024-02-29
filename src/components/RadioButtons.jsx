import PropTypes from "prop-types";
function RadioButtons(props) {
  function updateAnswer(event) {
    props.setRadio(event.target.value);
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
        />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}
RadioButtons.propTypes = {
  setRadio: PropTypes.func.isRequired,
};
export default RadioButtons;
