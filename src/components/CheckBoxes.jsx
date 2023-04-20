export default function CheckBoxes({ handleCheckbox, values }) {
  return (
    <ul>
      <li>
        <label>
          <input
            onChange={handleCheckbox}
            name="timeSpent"
            type="checkbox"
            value="swimming"
            checked={values.includes("swimming")}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            onChange={handleCheckbox}
            name="timeSpent"
            type="checkbox"
            value="bathing"
            checked={values.includes("bathing")}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            onChange={handleCheckbox}
            name="timeSpent"
            type="checkbox"
            value="chatting"
            checked={values.includes("chatting")}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            onChange={handleCheckbox}
            name="timeSpent"
            type="checkbox"
            value="noTime"
            checked={values.includes("noTime")}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}
