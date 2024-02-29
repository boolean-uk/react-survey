import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
export default function RadioButtons(props) {
  // Initialize state to manage the selected value for this group
  const [selectedValue, setSelectedValue] = useState(
    props.additionalProp.userData[props.line]
  );

  useEffect(() => {
    setSelectedValue(props.additionalProp.userData[props.line]); // Reset selectedValue when props change
  }, [props.additionalProp.userData, props.line]);

  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue); // Update local state for this group
    // Update parent component's state
    props.additionalProp.setUserData((prevUserData) => ({
      ...prevUserData,
      [props.line]: newValue,
    }));
  };

  return (
    <ul>
      {props.options.map((option, index) => (
        <li key={index}>
          <input
            id={`${props.line}-${index}`}
            className="radioButton"
            type="radio"
            value={option}
            name={props.name}
            checked={selectedValue === option}
            onChange={handleRadioChange}
          />
          <label htmlFor={`${props.line}-${index}`}>{option}</label>
        </li>
      ))}
    </ul>
  );
}

RadioButtons.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  additionalProp: PropTypes.any.isRequired,
  line: PropTypes.string.isRequired,
};
