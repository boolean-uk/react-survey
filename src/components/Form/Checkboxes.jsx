function Checkboxes({ onChange }) {
  return (
    <div>
      <label>
        <input
          name="timeSpent"
          type="checkbox"
          value="swimming"
          onChange={onChange}
        />
        Swimming
      </label>
      <label>
        <input
          name="timeSpent"
          type="checkbox"
          value="bathing"
          onChange={onChange}
        />
        Bathing
      </label>
      <label>
        <input
          name="timeSpent"
          type="checkbox"
          value="chatting"
          onChange={onChange}
        />
        Chatting
      </label>
      <label>
        <input
          name="timeSpent"
          type="checkbox"
          value="noTime"
          onChange={onChange}
        />
        I don't like to spend time with it
      </label>
    </div>
  );
}

export default Checkboxes;
