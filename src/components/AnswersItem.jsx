// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function TimeSpentSet({list}){
  
  //console.log({swimming, bathing, chatting, noTime})

  return (<>
    
      <li>{list[0] ? "Swimming" : "FALSE"}</li>
      <li>{list[1] ? "Bathing" : ""}</li>
      <li>{list[2] ? "Chatting" : ""}</li>
      <li>{list[3] ? "I don't like to spend time with it" : ""}</li>

    
    </>

  )
}

// function ItemsList({ list }) {
//   return (
//     <ul>
//       {list.map((item) => (
//         <li>{answersSet[item]}</li>
//       ))}
//     </ul>
//   );
// }

// This is the main component being exported from this file
function AnswersItem({savedForms: {rating, swimming, bathing, chatting, noTime, feedback, name, email }}) 
{
  let list = [swimming, bathing, chatting, noTime]
  console.log(list)
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{rating}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <TimeSpentSet list={list} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{feedback}</span>
        </p>
      </article>
    </li>
  );
}

export default AnswersItem