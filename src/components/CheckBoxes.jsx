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
            checked={props.value["swimming"] === true}
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
            checked={props.value["bathing"] === true}
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
            checked={props.value["chatting"] === true}
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
            checked={props.value["noTime"] === true}
          />
          {"I don't like to spend time with it"}
        </label>
      </li>
    </ul>
  );
}

CheckBoxes.propTypes = {
  setCheck: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
export default CheckBoxes;