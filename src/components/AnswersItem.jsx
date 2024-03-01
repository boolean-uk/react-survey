// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

function ItemsList({ list }) {
  if (list === undefined) {
    return
  }
  return (
    <ul>
      {list.map((item) => (
        <li>{item}</li>
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
    colour,
    timeSpent,
    review,
    bestThings,
    worstThings,
    consistency,
    logo,
    email,
    id,
  },
  setCurrentlyEditing: setCurrentlyEditing,
  index: index,
  deleteAnswer: deleteAnswer,
}) {
  const answerItem = {
    username: username,
    colour: colour,
    timeSpent: timeSpent,
    review: review,
    bestThings: bestThings,
    worstThings: worstThings,
    consistency: consistency,
    logo: logo,
    id: id,
    email: email,
    index: index,
  };

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>What would you say are the best features of your rubber duck?</em>
          <span className="answer__line">
            <ItemsList list={bestThings} />
          </span>
        </p>
        <p>
          <em>What would you say are the worst bits of your rubber duck?</em>
          <span className="answer__line">
            <ItemsList list={worstThings} />
          </span>
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button
          onClick={() => {
            setCurrentlyEditing(answerItem);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteAnswer(answerItem);
          }}
        >
          Delete
        </button>
      </article>
    </li>
  );
}
