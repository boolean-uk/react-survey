const Checkboxes = ({handleChange, timeSpent}) => {

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            onChange={handleChange}
            checked={timeSpent.includes("swimming")}
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
            onChange={handleChange}
            checked={timeSpent.includes("bathing")}
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
            onChange={handleChange}
            checked={timeSpent.includes("chatting")}
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
            onChange={handleChange}
            checked={timeSpent.includes("noTime")}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  )
}

export default Checkboxes
