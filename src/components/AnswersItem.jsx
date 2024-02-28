import AnswersList from "./AnswersList";

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({ answerItem, onEditAnswer, removeAnswer }) {
  const { q1, q2, q3, q4, q5, q6 } = answerItem

  return (
    <li>
      <article className="answer">
        <h3>{q5 || "Anon"} said:</h3>
        <p>
          <em>What would you say are the best features of your rubberduck?</em>
            <AnswersList answersList={q1} /> 
        </p>
        <p>
          <em>What would you say are the worst bits of your rubberduck?</em>
            <AnswersList answersList={q2} />
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{q3}</span>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
            <span className="answer__line">{q4}</span>
        </p>
        <input type="button" value={"Edit answer"} onClick={() => onEditAnswer(answerItem)} />
        <input type="button" value={"Delete answer"} onClick={() => removeAnswer(answerItem)} />
      </article>
    </li>
  );
}
