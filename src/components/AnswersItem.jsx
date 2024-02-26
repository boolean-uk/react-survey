import PropTypes from "prop-types";
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

function ItemsList(list) {
  if (list.length === 0) {
    return <li>None</li>;
  }
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: {
    username,
    email,
    review,
    color,
    consistency,
    logo,
    features,
    nags,
    spendTime,
  },
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>

        <em>
          What would you say that are the best features of your rubber duck?
        </em>
        <span className="answer__line">{ItemsList(features)}</span>

        <em>What would you say that are the worst nags of your rubber duck?</em>
        <span className="answer__line">{ItemsList(nags)}</span>

        {consistency && (
          <p>
            <em>How do you rate your rubber duck consistency?</em>
            <span className="answer__line">{consistency}</span>
          </p>
        )}
        {color && (
          <p>
            <em>How do you rate your rubber duck colour?</em>
            <span className="answer__line">{color}</span>
          </p>
        )}
        {logo && (
          <p>
            <em>How do you rate your rubber duck logo?</em>
            <span className="answer__line">{logo}</span>
          </p>
        )}

        {spendTime && spendTime.length > 0 && (
          <p>
            <em>How do you like to spend time with your rubber duck?</em>
            <span className="answer__line">{ItemsList(spendTime)}</span>
          </p>
        )}

        {review && (
          <p>
            <em>What else have you got to say about your rubber duck?</em>
            <span className="answer__line">{review}</span>
          </p>
        )}
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.object,
  username: PropTypes.string,
  email: PropTypes.string,
  review: PropTypes.string,
  color: PropTypes.string,
  consistency: PropTypes.string,
  logo: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  nags: PropTypes.arrayOf(PropTypes.string),
  spendTime: PropTypes.arrayOf(PropTypes.string),
};
