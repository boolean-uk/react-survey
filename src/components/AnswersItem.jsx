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
      {list.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItemComponent({ survey: { key, name, email, colorRating, spendingTime, comment }, setSurvey }) {
  function editSurvey() {
    setSurvey({
      key: key,
      name: name,
      email: email,
      colorRating: colorRating,
      spendingTime: spendingTime,
      comment: comment
    })
  }

  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colorRating}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendingTime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{comment}</span>
        </p>
        <button className="answer__edit" onClick={editSurvey}>
          Edit
        </button>
      </article>
    </li>
  );
}
