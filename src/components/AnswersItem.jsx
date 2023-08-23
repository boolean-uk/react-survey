// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
  yellow: "It's Yellow",
  squeaks: "It squeaks",
  logo: "It has a logo",
  big: "It's big",
};

function ItemsList({ list = [] }) {
  if (!Array.isArray(list)) {
    return null;
  }
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item] || item}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, colour, spendTime, review, worstBits, bestFeatures, logo, consistency }, handleEdit
})

{
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <div>
          <em>What are the best features about your rubber duck?</em>
          <ItemsList list={bestFeatures} />
        </div>
        <div>
          <em>What are the worst bits about your rubber duck?</em>
          <ItemsList list={worstBits} />
        </div>
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
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button onClick={handleEdit}>Edit</button>
      </article>
    </li>
  );
}
