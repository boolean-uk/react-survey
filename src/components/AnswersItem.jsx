const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  none: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, idx) => (
        <li key={idx}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  answerItem: { username, colour, timeSpent, review }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>{review ? "What else have you got to say about your rubber duck?"
          : "No review"
          }</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
