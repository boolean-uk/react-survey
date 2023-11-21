// Components don't need to be separeted into individual files
// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, bestFeatures, worstFeatures, colour, consistency, logo, timeSpent, review }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>What are your duck's best features?</em>
          <span className="answer__line">{bestFeatures}</span>
        </p>
        <p>
          <em>What are your duck's worst features?</em>
          <span className="answer__line">{worstFeatures}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck's colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck's consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck's logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <span className="answer__line">{timeSpent}</span>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
