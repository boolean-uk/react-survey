// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list, key }) {
  return (
    <ul>
      {list.map((item, key) => (
        <li key={key}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

function AnswersItem({
  answerItem: { username, color, timeSpent, review, email, id }, handleEditAnswer
}) {

  const handleEdit = () => {
    handleEditAnswer({
      color: color,
      timeSpent: timeSpent,
      review: review,
      username: username,
      email: email,
      id: id
    })
  }

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
              <ItemsList list={timeSpent} />
            </p>
            <p>
              <em>What else have you got to say about your rubber duck?</em>
              <span className="answer__line">{review}</span>
            </p>
            <button onClick={handleEdit} >EDIT</button>
          </article>
        </li>
  )
}

export default AnswersItem
