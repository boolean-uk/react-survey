// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
  yellow: "It's yellow!",
  squeeks: "It squeeks!",
  haslogo: "It as a logo!",
  isbig: "It's big!"
};

function ItemsList({ list }) {
  const selectedItems = Object.keys(list).filter((item) => list[item] === true);
  return (
    <ul>
        {selectedItems.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
  }

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, color, best, worst, logo, consistensy, spendtime, review, email }, onEdit, index }) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>What are the best features of your rubber duck?</em>
          <ItemsList list={best} />
        </p>
        <p>
          <em>What are the worst bits of your rubber duck?</em>
          <ItemsList list={worst} />
        </p>
        <p>
          <em>How do you rate your rubber duck consistensy?</em>
          <span className="answer__line">{consistensy}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendtime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <p>Email: {email}</p>
        <button onClick={() => onEdit(index)}>Edit</button>
      </article>
    </li>
  );
}
