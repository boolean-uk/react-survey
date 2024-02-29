import PropTypes from "prop-types";
import { useState } from "react";

function RadioButtonRating({ title, options, value, onChange, leftLabel, rightLabel, isValid=true}) {
    return (
        <div className="form__group radio">
            <h3 className={isValid? "" : "invalid"}>{title}</h3>
            <ul>
                {leftLabel !== undefined ? <li key="l1"><p className="side_label">{leftLabel}</p></li> : null}
                {options.map((option, index) => (
                    <li key={index}>
                        <input type="radio" value={option} checked={value===option} readOnly/>
                        <label onClick={() => onChange(option)}>{option}</label>
                    </li>
                ))}
                {rightLabel !== undefined ? <li key="l2"><p className="side_label">{rightLabel}</p></li> : null}
            </ul>
        </div>
    );
}

RadioButtonRating.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  isValid: PropTypes.bool
};

export default RadioButtonRating;