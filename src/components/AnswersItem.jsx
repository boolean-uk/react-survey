// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
import PropTypes from "prop-types"

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

// This is the main component being exported from this file
// Feel free to change this props names to what suits you best
// Rememeber here we're destructuring answerItem, which is the prop name that we've passed
function AnswersItem({ answerItem }) {
  function ItemsList( list ) {
    return (
      <span>
        {list.list.map((item, index) => (
          <li key={index}>{answersSet[item]}</li>
        ))}
      </span>
    )
  }

  return (
    <li>
      <article className="answer">
        <h3>{answerItem.username} said:</h3>
        <p>
          <em>Email</em>
          <span className="answer__line">{answerItem.email}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerItem.timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line" >{answerItem.review} </span>
        </p>
      </article>
    </li>
    )
}

AnswersItem.propTypes = {
  answerItem: PropTypes.object.isRequired,
}

export default AnswersItem