import React, { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form/Form";

function Survey() {
  const [answers, setAnswers] = useState([]);
  const [editData, setEditData] = useState(null);

  const addAnswer = (newAnswer) => {
    setAnswers((prevAnswers) => {
      if (editData) {
        return prevAnswers.map((answer) =>
          answer.id === editData.id ? newAnswer : answer
        );
      } else {
        return [...prevAnswers, newAnswer];
      }
    });
    setEditData(null); // Clear edit data after adding/updating answer
  };

  const handleEdit = (data) => {
    setEditData(data);
  };

  const handleCancelEdit = () => {
    setEditData(null);
  };

  return (
    <main className="survey">
      <section className="survey__list">
        <h2>Answers list</h2>
        <AnswersList answers={answers} onEdit={handleEdit} />
      </section>
      <section className="survey__form">
        <Form
          addAnswer={addAnswer}
          editData={editData}
          onCancelEdit={handleCancelEdit}
        />
      </section>
    </main>
  );
}

export default Survey;
