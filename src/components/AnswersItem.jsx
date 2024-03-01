// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
import PropTypes from "prop-types";
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};
function itemLine(key, value) {
  return <li key={key}>{key+": "+value}</li>;
}
function ItemsList(props) {
  const timeSpent = props.timeSpent;
  const keys = Object.keys(answersSet);

  return (
    <ul>
      {keys.map((key) => {
        return itemLine(key, timeSpent[key]);
      })}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem(props) {
  const username = props.answerItem.username;
  const colour = props.answerItem.color;
  const timeSpent = props.answerItem.timeSpent;
  const review = props.answerItem.review;

  function onEdit(){
    props.onEdit(props.id)
  }
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
        </p>
        <ItemsList timeSpent={timeSpent} />
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      <button onClick={onEdit}>Edit</button>
      </article>
      
    </li>
  );
}
ItemsList.propTypes = {
  timeSpent: PropTypes.object.isRequired,
};
AnswersItem.propTypes = {
  answerItem: PropTypes.shape({
    username: PropTypes.string.isRequired,
    color: PropTypes.string,
    timeSpent: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
  }),
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
