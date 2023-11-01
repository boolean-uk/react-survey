// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

// const answersSet = {
//   swimming: "Swimming",
//   bathing: "Bathing",
//   chatting: "Chatting",
//   noTime: "I don't like to spend time with it"
// };

function ItemsList({list:question}) {
  console.log(question)
  return (
    <ul>
      {Object.keys(question).map((item, i) => {
        if (question[item] === true){
          return (
            <li key={i}>{item}</li>
          )
        }
      }
      
      )}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({answerItem: {bestFeatures, colour, consistency, email, logo, review, timeSpent, username, worstBits}}, {key:i}) {


  console.log(timeSpent)
  return (
    <li key={i}>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>What would you say are the best features of your rubber duck?</em>
          <ItemsList list={bestFeatures} />
        </p>
        <p>
          <em>What would you say are the worst bits about your rubber duck?</em>
          <ItemsList list={worstBits} />
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
