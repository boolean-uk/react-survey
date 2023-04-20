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
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, color, timeSpent, review , email, id}
, handleEditData,handleDeleteData}) {

  const handleEdit = () => {
    handleEditData(
      {
        color: color,
        timeSpent: timeSpent,
        review: review,
        username: username,
        email: email,
        id: id
      }
    )
  }

  const handleDelete = () => {
    handleDeleteData(id)
  }

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck color?</em>
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
        <div>
          <button onClick={handleDelete} className="answer-buttons delete">Delete</button>
          <button onClick={handleEdit} className="answer-buttons">Edit</button>
        </div>
      </article>
    </li>
  );
}
