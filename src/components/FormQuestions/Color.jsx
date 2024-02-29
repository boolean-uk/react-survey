export default function Color(props) {
  const colorOptions = [
    { id: "color-one", value: "1", label: "1" },
    { id: "color-two", value: "2", label: "2" },
    { id: "color-three", value: "3", label: "3" },
    { id: "color-four", value: "4", label: "4" },
  ];
  return (
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
      <ul>
        {colorOptions.map((option) => (
          <li key={option.id}>
            <input
              id={option.id}
              type="radio"
              name="color"
              value={option.value}
              onChange={props.handleChange}
              checked={props.userData.color === option.value}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
