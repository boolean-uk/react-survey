function Checkboxes({handleChange, formData}) {

  return (
    <ul>
      <li>
        <label>
          <input onChange={handleChange} name="timeSpent" type="checkbox" value="swimming" checked={formData.timeSpent.some(word => word === "swimming")}/>
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input onChange={handleChange} name="timeSpent" type="checkbox" value="bathing" checked={formData.timeSpent.some(word => word === "bathing")} />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input onChange={handleChange}name="timeSpent" type="checkbox" value="chatting" checked={formData.timeSpent.some(word => word === "chatting")} />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input onChange={handleChange} name="timeSpent" type="checkbox" value="noTime" checked={formData.timeSpent.some(word => word === "noTime")} />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default Checkboxes
