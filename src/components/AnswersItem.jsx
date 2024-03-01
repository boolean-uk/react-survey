// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: {
    rateConsistency,
    rateColour,
    rateLogo,
    preferedTimeSpent,
    whatElseText,
    fullName,
    email,
  }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{fullName || "Anon"} said:</h3>
        <h4>Email: {email || "No email added :("}</h4>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{rateConsistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{rateColour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{rateLogo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={preferedTimeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{whatElseText}</span>
        </p>
      </article>
    </li>
  );
}
