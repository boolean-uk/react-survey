import PropTypes from "prop-types";
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ spendTime }) {
  return (
    <ul>
      {spendTime.swimming && <li>{answersSet.swimming}</li>}
      {spendTime.bathing && <li>{answersSet.bathing}</li>}
      {spendTime.chatting && <li>{answersSet.chatting}</li>}
      {spendTime.noTime && <li>{answersSet.noTime}</li>}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, color, spendTime, review, email },
  index: key,
  setFormData: setFormData,
  setIsEditing: setIsEditing,
  setEditingIndex: setEditingIndex,
}) {
  const handleEdit = () => {
    // Fills in form with the answer being edited
    setFormData({ color, spendTime, review, username, email });
    // Used by handleSubmit to check if it's a new answer or an edit that is submitted
    setIsEditing(true);
    // Used by handleSubmit to update the answer after submitting an edit
    setEditingIndex(key);
  };

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList spendTime={spendTime} />
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

AnswersItem.propTypes = {
  answerItem: PropTypes.object,
  index: PropTypes.number,
  setFormData: PropTypes.func,
  setIsEditing: PropTypes.func,
  setEditingIndex: PropTypes.func,
};

ItemsList.propTypes = {
  spendTime: PropTypes.object,
};
