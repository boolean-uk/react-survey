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
  // Remember here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, colour, timeSpent, review },
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <div>
          <em>How do you rate your rubber duck color?</em>
          <span className="answer__line">{colour}</span>
        </div>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </div>
        <div>
          <em>
            {review
              ? "What else have you got to say about your rubber duck?"
              : "No review"}
          </em>
          <span className="answer__line">{review}</span>
        </div>
      </article>
    </li>
  );
}
