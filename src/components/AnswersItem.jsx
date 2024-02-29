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
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, color, timeSpent, review, email}, ...props

}) {

  const {index, setState, answersList, setAnswersList} = props;

  //Sets state to clicked item
  const handleEdit = (e) => {
    e.preventDefault();
    let newState = {
      id: index,
      color: color,
      timeSpent: timeSpent,
      username: username,
      review: review,
      email: email,
    };
    setState(newState);
  }

  const handleDelete = (e) => {
    e.preventDefault();

    setAnswersList(prevAnswersList => prevAnswersList
      .filter(answer => answer.id !== index)
      .map(answer => ({...answer, id: answer.id -1}))
    )

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
          <ItemsList list={Object.keys(timeSpent).filter((e) => timeSpent[e] === true)} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button onClick={(e) => handleEdit(e)}>Edit</button>
        <button onClick={(e) => handleDelete(e)}>Remove</button>

      </article>

    </li>
  );
}
