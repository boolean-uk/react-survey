/* eslint-disable react/prop-types */
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  answerItem: { id, colorRating, spendTime, text, name},
  highlighted,
  handleDelete
}) {
  return (
    <div >
      <article className={`answer ${highlighted ? 'highlighted' : ''}`}>
        <h3>{name || "Anon"} said:</h3>
        <div>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colorRating}</span>
        </div>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </div>
        <div>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{text}</span>
        </div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </article>
    </div>
  );
}

