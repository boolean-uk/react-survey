import PropTypes from 'prop-types'
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};


const propertySetQualities = {
  color: "It's yellow!",
  sound: "It squeaks!",
  logo: "It has a logo!",
  size: "It's big!"
}

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
  answerItem: { username, colourRating, timeSpent, review, bestFeatures, nagFeatures}
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colourRating}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} objectSet={answersSet} />
        </div>
        <div>
          <em>What do you think is the best features of the duck?</em>
          <ItemsList list={bestFeatures} objectSet={propertySetQualities} />
        </div>
        <div>
          <em>What do you think is the worst features of the duck?</em>
          <ItemsList list={nagFeatures} objectSet={propertySetQualities} />
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
  answerItem: PropTypes.object,
  username: PropTypes.string,
  colourRating: PropTypes.number,
  timeSpent: PropTypes.array,
  review: PropTypes.string,
  bestFeatures: PropTypes.array,
  nagFeatures: PropTypes.array,
}