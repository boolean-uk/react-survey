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
      {list.map((item, index) => {
        return <li key={index}>{answersSet[item]}</li>
      })}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem(props) {

  const answerItem = props.answerItem
  const { color, spendTime, review, username } = answerItem
  const index = props.index
  const setformInfo = props.setformInfo
  const initalInfo = props.initalInfo
  const isEditing = props.isEditing
  const setisEditing = props.setisEditing
  const seteditIndex = props.seteditIndex

  const handelEdit = (event) => {
    if(!isEditing) {
      setisEditing(true)
      event.target.className = "editButton selected"
      setformInfo(answerItem)
      seteditIndex(index)
    } else {
      setisEditing(false)
      event.target.className = "editButton"
      setformInfo(initalInfo)
    }
  }

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <button onClick={handelEdit} className="editButton">Edit</button>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendTime} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
