import PropTypes from "prop-types";
function RadioButtons(props) {
  function updateAnswer(event) {
    props.setRadio(event);
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
  value: PropTypes.string
};
export default RadioButtons;
