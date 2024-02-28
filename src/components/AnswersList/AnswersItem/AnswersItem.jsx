import PropTypes from 'prop-types'
import { propertySetQualities, propertySetTime } from "../../../constants.js"
import "./AnswersItem.css"
import editButton from "../../../assets/icons/pencil-icon.webp"
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

function ItemsList({ list, objectSet}) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{objectSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem, editEntry
}) {
  const { username, colourRating, timeSpent, review, bestFeatures, nagFeatures} = answerItem
  return (
    <li>
      <article className="answer">
        <button className="edit_answer_button" onClick={() => editEntry(answerItem)}>
          <img src={editButton} />
        </button>
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colourRating}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={Object.keys(timeSpent).filter((key) => timeSpent[key])} objectSet={propertySetTime} />
        </div>
        <div>
          <em>What do you think is the best features of the duck?</em>
          <ItemsList list={Object.keys(bestFeatures).filter((key) => bestFeatures[key])} objectSet={propertySetQualities} />
        </div>
        <div>
          <em>What do you think is the worst features of the duck?</em>
          <ItemsList list={Object.keys(nagFeatures).filter((key) => nagFeatures[key])} objectSet={propertySetQualities} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}

ItemsList.propTypes = {
  list: PropTypes.array,
  objectSet: PropTypes.object
}

AnswersItem.propTypes = {
  editEntry: PropTypes.func,
  answerItem: PropTypes.object,
  username: PropTypes.string,
  colourRating: PropTypes.number,
  timeSpent: PropTypes.array,
  review: PropTypes.string,
  bestFeatures: PropTypes.array,
  nagFeatures: PropTypes.array,
}