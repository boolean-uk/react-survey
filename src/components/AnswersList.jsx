import React from "react";
import AnswersItem from "./AnswersItem";

const AnswersList = ({ answers, onEdit }) => {
  return (
    <ul>
      {answers && answers.length > 0 ? (
        answers.map((answer, i) => (
          <AnswersItem answerItem={answer} key={i} onEdit={onEdit} />
        ))
      ) : (
        <p>No answers available</p>
      )}
    </ul>
  );
};

export default AnswersList;
