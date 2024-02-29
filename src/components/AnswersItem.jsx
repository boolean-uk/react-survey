import PropTypes from 'prop-types'
// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
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

// This is the main component being exported from this file

export default function AnswersItem({answerItem: { username, color, spendtime, review, email, id }, setUserData}){

  const handleEdit = () =>{
    setUserData({   
      color: color,
      spendtime: spendtime,
      review: review,
      username: username,
      email: email,
      id: id
    })
  }

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={spendtime} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button onClick={handleEdit}>Edit</button>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.object,
  setUserData: PropTypes.func
}

ItemsList.propTypes = {
  list: PropTypes.array
}