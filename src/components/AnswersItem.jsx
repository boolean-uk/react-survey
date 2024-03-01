// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = ["Swimming", "Bathing", "Chatting", "I don't like to spend time with it"]

function ItemsList({ spendTime }) {
  const selectedAnswers = answersSet.filter((answer, index) => spendTime[index]);

  return (
    <ul>
      {selectedAnswers.map((answer, index) => (
        <li key={index}>{answer}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { color, spendTime, review, username } }) {

  console.log("answer item: " + color + " spendtime: " + spendTime)

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList
            spendTime={spendTime}
          />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
