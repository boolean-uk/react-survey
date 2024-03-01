// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }){
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}> 
          {answersSet[item]}
        </li>
      ))}
    </ul>
  );
      }

export default function AnswersItem({ answer, index, setUserData, setEditingIndex }) {
  const { username, ratingColor, timeSpent, review } = answer;

  const handleEdit = () => {
    setUserData({...answer});
    setEditingIndex(index);
  };
  
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{ratingColor}</span> 
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
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