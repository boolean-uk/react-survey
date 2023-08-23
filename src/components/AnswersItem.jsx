// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

import { data } from "../data";

function ItemsList({ data, answersSet }) {
  const list = Object.keys(data).filter(key => data[key])

  if (list.length === 0)  return null
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

function Paragraph({ message, data, answersSet }) {
  return (
    <p>
      <em>{message}</em>
      {
        (answersSet) ?
          <ItemsList data={data} answersSet={answersSet} /> :
          <span className="answer__line">{data}</span>
      }
    </p>
  )
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, bestFeatures, worstBits, consistency, color, logo, timeSpent, review }, index, handleEditAnswer
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <Paragraph
          message={data.bestFeatures.header}
          data={bestFeatures}
          answersSet={data.bestFeatures.answersSet}
        />
        <Paragraph
          message={data.worstBits.header}
          data={worstBits}
          answersSet={data.worstBits.answersSet}
        />
        <Paragraph
          message={data.consistency.header}
          data={consistency}
        />
        <Paragraph
          message={data.color.header}
          data={color}
        />
        <Paragraph
          message={data.logo.header}
          data={logo}
        />
        <Paragraph
          message={data.timeSpent.header}
          data={timeSpent}
          answersSet={data.timeSpent.answersSet}
        />
        <Paragraph
          message={data.review.header}
          data={review}
          answersSet={data.review.answersSet}
        />
        <button onClick={() => handleEditAnswer(index)}>Edit answer</button>
      </article>
    </li>
  );
}
