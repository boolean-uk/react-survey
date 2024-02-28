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
export default function AnswersItem({ 
  answerItem: {name, color, timeSpent, review }, i, handleEdit
}) 
{
  // function handleEdit(){
  //   console.log("edit on index: "+i)
  // }
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck color?</em>
          <span className="answer__line">{color}</span>
        </p>
        
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button onClick={()=>handleEdit(i)}>Edit</button>
      </article>
    </li>
  );
}
AnswersItem.propTypes = {
  answersItem: PropTypes.object,
  i: PropTypes.number,
  handleEdit: PropTypes.func
};
