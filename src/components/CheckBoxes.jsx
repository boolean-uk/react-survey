import PropTypes from "prop-types";

function CheckBoxes(props) {
  function updateAnswers(event) {
    props.setCheck(event);
  }

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            onChange={updateAnswers}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            onChange={updateAnswers}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            onChange={updateAnswers}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            onChange={updateAnswers}
          />
          {"I don't like to spend time with it"}
        </label>
      </li>
    </ul>
  );
}

CheckBoxes.propTypes = {
  setCheck: PropTypes.func.isRequired,
};
export default CheckBoxes;
