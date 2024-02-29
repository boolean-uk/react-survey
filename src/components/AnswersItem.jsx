// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
  yellow: "It's yellow",
  squeak: "Squeaks",
  logo: "logo",
  big: "It's big"
};

function ItemsList({ list = []}) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem(props) {



  return (
    
    <li>
      <article className="answer">
        <h3>{props.answerItem.name} said:</h3>
        <p>
          <em>What would you say that are the best features of your rubber duck?</em>
          <ItemsList list={props.answerItem.best} />
        </p>
        <p>
          <em>What would you say that are the worst nags of your rubber duck?</em>
          <ItemsList list={props.answerItem.worst} />
        </p>
        <p>
          <em>Who do you rate your rubber duck consistency</em>
          <span className="answer__line">{props.answerItem.consistancy}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{props.answerItem.color}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{props.answerItem.logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={props.answerItem.spendTime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{props.answerItem.review}</span>
        </p>
      </article>
    </li>
  );
}
