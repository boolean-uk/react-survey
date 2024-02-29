// Components don't need to be separeted into individual files

import { SPEND_TIME_ANSWER_OPTIONS } from "../misc/consts";

// Here we have a smaller component that helps compose the AnswersItem below
function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, idx) => (
        <li key={idx}>{SPEND_TIME_ANSWER_OPTIONS[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, colourRating, timeSpent, review }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colourRating}</span>
        </p>
        {timeSpent.length > 0? 
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        : null}
        {review.length > 0?
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        : null}
      </article>
    </li>
  );
}
