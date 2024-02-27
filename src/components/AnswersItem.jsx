/* eslint-disable react/prop-types */
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

const answersSet2 = {
  color: "It's yellow!",
  squeak: "It squeaks!",
  logo: "It has a logo!",
  size: "It's big!",
};

function ItemsList({ list, bool }) {
  let ans = {};

  if (bool) {
    ans = Object.entries(list)
      .filter((val) => val[1] === true)
      .map((val) => answersSet[val[0]]);
  } else {
    ans = Object.entries(list)
      .filter((val) => val[1] === true)
      .map((val) => answersSet2[val[0]]);
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ul>
      {ans.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: {
    id,
    username,
    consistency,
    color,
    logo,
    timeSpent,
    bestFeature,
    worstFeature,
    review,
  },
  handleEdit,
  handleDelete,
  props,
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <div>
          <em>What would you say are the best features of your rubber duck?</em>
          <ItemsList list={bestFeature} bool={false} />
        </div>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={worstFeature} bool={false} />
        </div>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} bool={true} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <div>
          <button onClick={(e) => handleEdit(e, props, id)}>Edit</button>
        </div>
        <div>
          <button onClick={(e) => handleDelete(e, props, id)}>Delete</button>
        </div>
      </article>
    </li>
  );
}
