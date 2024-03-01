// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below


// FIX THIS INTO SMALLER COMPONENTS WHEN TIME
const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

const featuresSet = {
  yellow: "It is yellow lel",
  squeaks: "It is squeaky",
  logo: "It has a logo",
  big: "Biggest rub ducker"
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

function ItemsList2({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{featuresSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
// This is the main component being exported from this file
export default function AnswersItem({
  answerItem: {
    username,
    color,
    consistency,
    logo,
    spendTime,
    bestFeatures,
    review,
    email
  },
  handleEdit,
  handleDelete
}) {
  console.log("Best Features:", bestFeatures);
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you rate the consistency of your rubber duck?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>Do you like the logo on your rubber duck?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={Object.keys(spendTime).filter((key) => spendTime[key])} />
        </p>
        <p>
          <em>What do you like the best about your rubber duck?</em>
          <ItemsList2 list={Object.keys(bestFeatures).filter((key) => bestFeatures[key])} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <p>
          <em>Email:</em>
          <span className="answer__line">{email}</span>
        </p>
        <button className="edit-button" onClick={() => handleEdit({ username, color, consistency, logo, spendTime, bestFeatures, review, email })}>edit</button>
        <button className="delete-button" onClick={() => handleDelete({ username, color, consistency, logo, spendTime, bestFeatures, review, email })}>Delete</button> {/* Delete button */}
      </article>
    </li>
  );
}