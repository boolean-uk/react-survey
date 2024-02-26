// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
/* eslint-disable react/prop-types */
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
  setFormData,
  deleteItem,
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem,
}) {
  const { username, colour, timeSpent, review } = answerItem;
  const loadAnswer = () => {
    // console.log("Load ---");
    // console.log(setFormData);
    // console.log(answerItem);
    setFormData(answerItem);
  };
  return (
    <li>
      <article className="answer">
        <button onClick={loadAnswer} style={{ padding: "5px" }}>
          Edit this answer
        </button>
        <button
          onClick={() => deleteItem(answerItem)}
          style={{ padding: "5px", color: "white", backgroundColor: "red" }}
        >
          Delete
        </button>
        <h3>{username || "Anon"} said:</h3>

        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
        </p>
        <ItemsList list={timeSpent} />

        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
