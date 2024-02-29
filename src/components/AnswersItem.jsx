import React from "react";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <div>
      {" "}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{answersSet[item]}</li>
        ))}
      </ul>
    </div>
  );
}

// AnswersItem.jsx
export default function AnswersItem({
  answerItem: { id, username, colour, timeSpent, review },
  onEdit,
}) {
  const handleEdit = () => {
    onEdit(id); // Pass the ID to the onEdit function
  };

  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <div>
          {" "}
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button onClick={handleEdit}>Edit</button>
      </article>
    </li>
  );
}
