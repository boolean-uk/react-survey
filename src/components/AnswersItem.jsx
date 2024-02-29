// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
import PropTypes from 'prop-types'
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function itemLine(key, value) {
  console.log(key, value);
  return <li key={key}>{key+": "+value}</li>;
}

function ItemsList(props) {
  const timeSpent = props.timeSpent;
  const keys = Object.keys(answersSet);
  return (
    <ul>
      {keys.map((key) => {
        return itemLine(key, timeSpent[key])
      })}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem(props){
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  const { username, color, timeSpent, review } = props

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
    username: PropTypes.string.isRequired,
    color: PropTypes.string,
    timeSpent: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
}
