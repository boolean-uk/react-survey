// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  no_time: "I don't like to spend time with it"
};

function ItemsList(spendTime) {
  return (
    <ul>
      {Object.keys(spendTime.list).map((key, index) => (
        <div key={index}>
          {spendTime.list[key] &&
            <li>{answersSet[key]}</li>
          }
        </div>
      ))}
    </ul>
  )
}

// This is the main component being exported from this file
export default function AnswersItem(properties) {
  return (
    <li>
      <article className="answer">
        <h3>{properties.answerItem.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{properties.answerItem.color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={properties.answerItem.spend_time} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{properties.answerItem.review}</span>
        </p>
        <button value={properties.answerItem.uuid} onClick={properties.editCallback}>EDIT</button>
      </article>
    </li>
  );
}
