// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

function ItemsList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  answerItem: {
    best = [],
    worst = [],
    consistency = 0,
    color = 0,
    logo = 0,
    time = [],
    text = "",
    email = "",
    name = "Anon",
  },
}) {
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>
            What would you say that are the best features of your rubber duck?
          </em>
          <ItemsList items={best} />
        </p>
        <p>
          <em>
            What would you say that are the worst bits of your rubber duck?
          </em>
          <ItemsList items={worst} />
        </p>
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
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList items={time} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{text}</span>
        </p>
      </article>
    </li>
  );
}
