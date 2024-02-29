function ItemsList({ list }) {
  if (list === "") {
    return <p>No a n s w e r</p>;
  }
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
// This is the main component being exported from this file
function AnswersItem(props) {
  const editItem = (target) => {};
  return (
    <li>
      <article className="answer">
        <button onClick={() => editItem(props.answerItem)}>Edit</button>
        <h3>{props.answerItem.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{props.answerItem.colorRate}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{props.answerItem.consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber ducks logo?</em>
          <span className="answer__line">{props.answerItem.logo}</span>
        </p>
        <p>
          <em>What is the best features of your rubber duck?</em>
          <ItemsList
            list={props.answerItem.bestFeatures}
            answerItem={props.answerItem}
          />
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList
            list={props.answerItem.activity}
            answerItem={props.answerItem}
          />
        </p>
        <p>
          <em>What is the worst features of your rubber duck?</em>
          <ItemsList
            list={props.answerItem.worstFeatures}
            answerItem={props.answerItem}
          />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{props.answerItem.review}</span>
        </p>
      </article>
    </li>
  );
}
export default AnswersItem;
