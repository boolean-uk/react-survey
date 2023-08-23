import React from 'react'

const timeSpent = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function TimeSpentList({ list }) {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{timeSpent[item]}</li>
        ))}
      </ul>
    </div>
  );
}

const bestFeatures = {
  yellow: "It's yellow!",
  squeaks: "It squeaks!",
  logo: "It has a logo!",
  big: "It's big!"
};

function BestFeaturesList({ list }) {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{bestFeatures[item]}</li>
        ))}
      </ul>
    </div>
  );
}

const worstBits = {
  yellow: "It's yellow!",
  squeaks: "It squeaks!",
  logo: "It has a logo!",
  big: "It's big!"
};

function WorstBitsList({ list }) {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{worstBits[item]}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AnswersItem({ answerItem, handleDelete, handleEdit }) {

  const { username, consistency, logo, colour, timeSpent, bestFeatures, worstBits, review } = answerItem;

  return (
    <li>
      <article className="answer">
        <h3>{username || "Someone"} said:</h3> 
        <div>
          <em>What would you say that are the best features of your rubber duck?</em>
          <BestFeaturesList list={bestFeatures} />
        </div>
        <div>
          <em>What would you say that are the worst bits of your rubber duck?</em>
          <WorstBitsList list={worstBits} />
        </div>
        <div>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </div>
        <div>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </div>
        <div>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </div>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <TimeSpentList list={timeSpent} />
        </div>
        <div>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => handleDelete(answerItem)}>Delete</button>
        </div>
      </article>
    </li>
  );
}