export default function Consistency(props) {
  const consistencyOptions = [
    { id: "consistency-one", value: "1", label: "1" },
    { id: "consistency-two", value: "2", label: "2" },
    { id: "consistency-three", value: "3", label: "3" },
    { id: "consistency-four", value: "4", label: "4" },
  ];

  return (
    <div className="form__group radio">
      <h3>How do you rate the consistency of your rubber duck?</h3>
      <ul>
        {consistencyOptions.map((option) => (
          <li key={option.id}>
            <input
              id={option.id}
              type="radio"
              name="consistency"
              value={option.value}
              onChange={props.handleChange}
              checked={props.userData.consistency === option.value}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
