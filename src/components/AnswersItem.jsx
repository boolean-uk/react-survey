// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

// const answersSet = {
//   swimming: "Swimming",
//   bathing: "Bathing",
//   chatting: "Chatting",
//   noTime: "I don't like to spend time with it"
// };

function ItemsList({list:question}) {
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
export default function AnswersItem({answerItem, setForm, setAnswersList, answersList,index}) {

 const {bestFeatures, colour, consistency, email, logo, review, timeSpent, username, worstBits} = answerItem
 

  const editForm = () => {
    setForm(answerItem)
    console.log(index)
    const updatedAnswersList = answersList.filter((answer, i) => {
      console.log(i)
      return(i!== index)
    })
    setAnswersList(updatedAnswersList)
  }

  return (
    <li key={index}>
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
        <button onClick={() => editForm()}>Edit</button>
      </article>
    </li>
  );
}

