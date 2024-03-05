// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
import PropTypes from "prop-types";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
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

export default function AnswersItem({
  answerItem: { username, color, timeSpent, review, email },
  onEditClick,
}) {
  const handleEditClick = () => {
    console.log(timeSpent);
    onEditClick({ username, color, timeSpent, review, email });
  };

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
          {timeSpent ? (
            <ItemsList list={timeSpent} />
          ) : (
            <span>No answer provided</span>
          )}
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button onClick={handleEditClick}>Edit</button>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.shape({
    username: PropTypes.string,
    color: PropTypes.string,
    timeSpent: PropTypes.array,
    review: PropTypes.string,
    email: PropTypes.string,
  }),
  onEditClick: PropTypes.func,
};

ItemsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};
