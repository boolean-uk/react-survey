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

ItemsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function AnswersItem({ answerItem, onDelete, onEdit }) {
  return (
    <li>
      <article className="answer">
        <h3>{answerItem.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerItem.timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
        <button onClick={() => onDelete(answerItem.id)}>Delete</button>
        <button onClick={() => onEdit(answerItem)}>Edit</button>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.shape({
    username: PropTypes.string,
    colour: PropTypes.string,
    timeSpent: PropTypes.arrayOf(PropTypes.string),
    review: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AnswersItem;
