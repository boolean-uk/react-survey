import PropTypes from "prop-types";

export default function CheckBoxes(props) {
  return (
    <ul>
      {props.options.map((option, index) => (
        <li key={index}>
          <label>
            <input
              className="checkbox"
              type="checkbox"
              value={option}
              name={props.name}
              checked={props.additionalProp.userData[`${props.line}`].includes(
                option
              )}
              onChange={(event) => {
                if (
                  props.additionalProp.userData[`${props.line}`].includes(
                    event.target.value
                  )
                ) {
                  props.additionalProp.setUserData({
                    ...props.additionalProp.userData,
                    [`${props.line}`]: props.additionalProp.userData[
                      `${props.line}`
                    ].filter((item) => item !== event.target.value),
                  });
                } else {
                  props.additionalProp.setUserData({
                    ...props.additionalProp.userData,
                    [`${props.line}`]: [
                      ...props.additionalProp.userData[`${props.line}`],
                      event.target.value,
                    ],
                  });
                }
              }}
            />
            {option}
          </label>
        </li>
      ))}
    </ul>
  );
}

CheckBoxes.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  additionalProp: PropTypes.any.isRequired,
  line: PropTypes.string.isRequired,
};
