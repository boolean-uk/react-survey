import PropTypes from 'prop-types'
import { useState } from "react";

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
        <li key={index}>
          {answersSet[item]}</li>
      ))}
    </ul>
  );
}
ItemsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.string
  )
}

// This is the main component being exported from this file
export default function Answer({
  answer,
  setAnswer,
  setEdit
}) {
  const handleEditClick = () => {
    setAnswer(answer);
    setEdit(answer.email)
  };
  return (
    <li>
      <article className="answer">
        <h3>{answer.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answer.colour}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
        </p>
        <ItemsList list={answer.spendTime} />
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answer.review}</span>
        </p>
        <button
          type="button"
          className="edit__button"
          onClick={handleEditClick}

        >
          Edit
        </button>
      </article>
    </li>
  );
}
Answer.propTypes = {
  answer:
    PropTypes.shape(
      {
        username: PropTypes.string,
        colour: PropTypes.string,
        spendTime: PropTypes.arrayOf(PropTypes.string),
        review: PropTypes.string,
        email: PropTypes.string
      }
    ),
  setAnswer: PropTypes.func,
  setEdit: PropTypes.func,
}
