import React, { useState } from "react";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I dont like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  answerItem: { name, color, spend, saying },
  onEdit
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name,
    color,
    spend,
    saying
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleEditSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    onEdit(editedData);
  };

  return (
    <li>
      <article className="answer">
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Rubber Duck Colour:
              <input
                type="number"
                min={1}
                max={4}
                name="color"
                value={editedData.color}
                onChange={handleInputChange}
              />
            </label>
            <label>
              How do you like to spend time with your rubber duck?
              <ItemsList list={editedData.spend} />
            </label>
          
            <label>
              What else have you got to say about your rubber duck?
              <textarea
                name="saying"
                rows="4"
                value={editedData.saying}
                onChange={handleInputChange}
              ></textarea>
            </label>
            <button type="submit">Save</button>
          </form>
        ) : (
          <>
            <h3>{name || "Anon"} said:</h3>
            <p>
              <em>How do you rate your rubber duck colour?</em>
              <span className="answer__line">{color}</span>
            </p>
            <p>
              <em>How do you like to spend time with your rubber duck?</em>
              <ItemsList list={spend} />
            </p>
            <p>
              <em>What else have you got to say about your rubber duck?</em>
              <span className="answer__line">{saying}</span>
            </p>
            <button className="edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        )}
      </article>
    </li>
  );
}
