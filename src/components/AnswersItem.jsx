// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

export const answersSet = { //export it for using in main to fix scoping issues
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  if (!Array.isArray(list)) return null  //to make sure that it return nothing if the list is not an array
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item] || item }</li> // if it cant find the item in answerSet, it will use the item directly

      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Remember here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, colourRating, timeSpent, review, bestFeatures, worstBits, duckConsistency, duckLogo }, onEditClick, index   // added new props look like the original form
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        
          <em>What would you say that are the best features of your rubber duck:</em>
          <ItemsList list={bestFeatures} />

          <em>What would you say that are the worst bits of your rubber duck:</em>
          <ItemsList list={worstBits} />
        
          <em>How do you rate your rubber duck consistency:</em> 
          <p>{duckConsistency}</p>
         
          <em>How do you rate your rubber duck colour?</em> 
          <p>{colourRating}</p>
          
          <em>How do you rate your rubber duck logo:</em>
          <p>{duckLogo}</p>
        
          <em>How do you like to spend time with your rubber duck:</em>
          <ItemsList list={timeSpent} />

          <em>What else have you got to say about your rubber duck:</em>
          <p>{review}</p>

          <button onClick={() => onEditClick(index)}>Edit</button> 
      </article>
    </li>
  );
}
