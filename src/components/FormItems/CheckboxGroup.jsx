import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function CheckBoxGroup({ title, options, onChange}) {
    const [values, setValues] = useState([])

    const handleChange = (selectedOption) => {
        let updatedValues = values.includes(selectedOption) ? values.filter(value => value !== selectedOption) : [...values, selectedOption]
        setValues(updatedValues)
        onChange(updatedValues)
    }

    return (
        <div className="form__group">
            <h3>{title}</h3>
            <ul>
                {Object.entries(options).map(([key, value]) => (
                    <li key={key}>
                        <label className="text_label" onClick={() => handleChange(key)}>
                            <input type="checkbox" value={key} checked={values.includes(key)}/>
                            {value}
                        </label>
                  </li>
                ))}
            </ul>
        </div>
    );
}

CheckBoxGroup.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string
};

export default CheckBoxGroup;
