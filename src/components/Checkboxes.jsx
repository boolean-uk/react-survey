import PropTypes from 'prop-types';

function Checkboxes(props) {

  const{handleChange, timeSpent, setTimeSpent} = props

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            checked={timeSpent.includes("swimming")}
            onChange={(x) => handleChange(x, setTimeSpent)}
          />Swimming
        </label>
      </li>
      <li>
        <label>
          <input 
          name="spend-time" 
          type="checkbox" 
          value="bathing" 
          checked={timeSpent.includes("bathing")}
          onChange={(x) => handleChange(x, setTimeSpent)}
          />Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            checked={timeSpent.includes("chatting")}
            onChange={(x) => handleChange(x, setTimeSpent)}
          />Chatting
          </label>
      </li>
      <li>
        <label>
          <input 
          name="spend-time" 
          type="checkbox" 
          value="noTime"
          checked={timeSpent.includes("noTime")}
          onChange={(x) => handleChange(x, setTimeSpent)}
          />I don't like to spend time with it
          </label>
      </li>
    </ul>
  );
}

Checkboxes.propTypes = {
  handleChange: PropTypes.func,
  timeSpent: PropTypes.arrayOf(PropTypes.string),
  setTimeSpent: PropTypes.func
}

export default Checkboxes;
