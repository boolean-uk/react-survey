/* eslint-disable react/prop-types */
const activityText = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

export default function AnswerList({ answers, handleEditAnswer }) {
  return (
    <ul className="answer-list">
      {answers.map((answer, i) => (
        <li key={i}>
          <div className="answer">
            <h3>
              {answer.name.trim().length === 0
                ? `Some dude said:`
                : `${answer.name} said:`}
            </h3>

            <p className="question">How do you rate your rubber duck colour?</p>
            <p>{`${answer.radioValue}/4`}</p>

            <p className="question">
              How do you like to spend time with your rubber duck?
            </p>
            <ul>
              {Object.keys(answer.checkboxValues)
                .filter((activity) => answer.checkboxValues[activity])
                .map((activity, i) => (
                  <li key={i}>{activityText[activity]}</li>
                ))}
            </ul>

            <p className="question">
              What else have you got to say about your rubber duck?
            </p>
            <p>{answer.feedback}</p>

            <button
              className="answer-button"
              onClick={() => handleEditAnswer(i)}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
