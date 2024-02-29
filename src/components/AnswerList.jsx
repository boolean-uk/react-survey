/* eslint-disable react/prop-types */
const activityText = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

export default function AnswerList({ answers }) {
  return (
    <div className="answer">
      <h3>{`${answers.name} said:`}</h3>

      <p className="question">How do you rate your rubber duck colour?</p>
      <p>{`${answers.radioValue}/4`}</p>

      <p className="question">
        How do you like to spend time with your rubber duck?
      </p>
      <ul>
        {Object.keys(answers.checkboxValues)
          .filter((activity) => answers.checkboxValues[activity])
          .map((activity, i) => (
            <li key={i}>{activityText[activity]}</li>
          ))}
      </ul>

      <p className="question">
        What else have you got to say about your rubber duck?
      </p>
      <p>{answers.feedback}</p>
    </div>
  );
}
