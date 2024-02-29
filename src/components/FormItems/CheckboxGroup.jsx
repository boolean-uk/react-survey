import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function CheckBoxGroup({ title, options, values, onChange, isValid=true}) {
    
    const handleChange = (selectedOption) => {
        let updatedValues = values.includes(selectedOption) ? values.filter(value => value !== selectedOption) : [...values, selectedOption]
        onChange(updatedValues)
    }

    return (
        <div className="form__group">
            <h3 className={isValid? "" : "invalid"}>{title}</h3>
            <ul>
                {Object.entries(options).map(([key, value]) => (
                    <li key={key}>
                        <label className="text_label" onClick={() => handleChange(key)}>
                            <input type="checkbox" value={key} checked={values.includes(key)} readOnly/>
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
  values: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool
};

export default CheckBoxGroup;
