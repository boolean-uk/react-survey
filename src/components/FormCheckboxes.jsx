/* eslint-disable react/prop-types */
export default function FormCheckboxes({ onCheckboxChange }) {
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
          />
          I don&apos;t like to spend time with it
        </label>
      </li>
    </ul>
  );
}
