import { useEffect, useState } from 'react';

/* eslint-disable react/prop-types */
export const MultipleChoice = ({options, setForm}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const SpendTimeOptions = {
    Swimming: "swimming",
    Bathing: "bathing",
    Chatting: "chatting",
    "I don't like to spend time with it": "none",
  };

  const handleOptionSelected = (option) => {
    if (selectedOptions.includes(option))
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    else setSelectedOptions([...selectedOptions, option]);
  };

  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, spendTime: selectedOptions }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  return (
    <ul>
      {Object.entries(SpendTimeOptions).map(([key, value]) => (
        <li key={key}>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value={value}
              checked={options.includes(value)}
              onClick={() => handleOptionSelected(value)}
            />
            {key}
          </label>
        </li>
      ))}
    </ul>
  );
}