// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below
import React, { useState } from "react";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  console.log('timeSpent:', list);
  let items = list
  if(!Array.isArray(list)) {
    items = Object.entries(list)
  }


  return (
    <ul>
      {items.map(([key, value]) => (
        <li key={key}>{answersSet[key]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({answerItem, onEdit }) {
  const  { username, color, timeSpent, review, email} = answerItem
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEditClick = () => {
    setIsEditing(true);
    onEdit(answerItem); // Pass current answer item to parent component for editing
  };



  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <h4>{email || "Anon"}</h4>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ul>
            {Object.entries(timeSpent).map(([key, value]) => (
              value && <li key={key}>{answersSet[key]}</li>
            ))}
          </ul>
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      </article>
    </li>
  );
}
