// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import PropTypes from "prop-types";

// This is the main component being exported from this file
export default function AnswersItem(props) {
  const keys = Object.keys(props.answer);
  return (
    <li>
      <article className="answer">
        <h3>{props.answer[keys[8]] || "Anon"} said:</h3>

        {keys.map(
          (key, index) =>
            index !== 7 &&
            index !== 0 && (
              <p key={`answer-${index}`}>
                <em>{key}</em>
                {Array.isArray(props.answer[key]) ? (
                  <ul className="itemList">
                    {props.answer[key].map((item, idx) => (
                      <li key={`answer-${index}-${idx}`}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="answer__line">{props.answer[key]}</span>
                )}
              </p>
            )
        )}
        <button
          onClick={() =>
            props.editList({
              index: props.answer[keys[0]],
              firstLine: props.answer[keys[1]],
              secondLine: props.answer[keys[2]],
              thirdLine: props.answer[keys[3]],
              fourthLine: props.answer[keys[4]],
              fifthLine: props.answer[keys[5]],
              sixthLine: props.answer[keys[6]],
              seventhLine: props.answer[keys[7]],
              eighthLine: props.answer[keys[8]],
              ninthLine: props.answer[keys[9]],
            })
          }>
          Edit
        </button>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answer: PropTypes.object.isRequired,
  editList: PropTypes.func.isRequired,
};
