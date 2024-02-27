/* eslint-disable react/prop-types */
export const MultipleChoice = ({options, setForm}) => {
  const SpendTimeOptions = {
    Swimming: "swimming",
    Bathing: "bathing",
    Chatting: "chatting",
    "I don't like to spend time with it": "none",
  };

  const handleOptionSelected = (option) => {
    if (options.includes(option))
      setForm(prevForm => ({...prevForm, spendTime: options.filter((item) => item !== option)}));
    else 
      setForm(prevForm => ({...prevForm, spendTime: [...options, option]}));
  };

  return (
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>

      {Object.entries(SpendTimeOptions).map(([key, value]) => (
        <li key={key}>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value={value}
              checked={options.includes(value)}
              onChange={() => handleOptionSelected(value)}
            />
            {key}
          </label>
        </li>
      ))}
    </div>
  );
}