/* eslint-disable react/prop-types */
export default function FormCheckboxes({ onCheckboxChange, checkboxValues }) {
  const handleCheckboxChange = (event) => {
    onCheckboxChange(event.target.value, event.target.checked);
  };

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            onChange={handleCheckboxChange}
            checked={checkboxValues.swimming}
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
            onChange={handleCheckboxChange}
            checked={checkboxValues.bathing}
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
            onChange={handleCheckboxChange}
            checked={checkboxValues.chatting}
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
            onChange={handleCheckboxChange}
            checked={checkboxValues.noTime}
          />
          I don&apos;t like to spend time with it
        </label>
      </li>
    </ul>
  );
}
