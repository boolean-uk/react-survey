export default function Logo(props) {
  const logoOptions = [
    { id: "logo-one", value: "1", label: "1" },
    { id: "logo-two", value: "2", label: "2" },
    { id: "logo-three", value: "3", label: "3" },
    { id: "logo-four", value: "4", label: "4" },
  ];

  return (
    <div className="form__group radio">
      <h3>How do you rate the logo of your rubber duck?</h3>
      <ul>
        {logoOptions.map((option) => (
          <li key={option.id}>
            <input
              id={option.id}
              type="radio"
              name="logo"
              value={option.value}
              onChange={props.handleChange}
              checked={props.userData.logo === option.value}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
