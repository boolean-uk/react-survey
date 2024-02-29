// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList(list) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}> 
          {answersSet[item]}
        </li>
      ))}
    </ul>
  );
}

export default function AnswersItem(properties){
  // eslint-disable-next-line react/prop-types
  //answerItem: { username, ratingColour, timeSpent, review }
//}) {
  return (
    <li>
      <article className="answer">
        <h3>{properties.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{properties.ratingColour}</span> 
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={properties.timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{properties.review}</span>
        </p>
      </article>
    </li>
  );
}
