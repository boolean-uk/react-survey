import React, { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form/Form";

function Survey() {
  const [answers, setAnswers] = useState([]);
  const [editData, setEditData] = useState(null);
  const [editId, setEditId] = useState(null); // Track the ID of the answer being edited

  const addAnswer = (newAnswer) => {
    if (editId !== null) {
      // If an ID is present, update the specific answer
      setAnswers((prevAnswers) =>
        prevAnswers.map((answer) =>
          answer.id === editId ? { ...answer, ...newAnswer } : answer
        )
      );
      setEditId(null); // Reset the edit ID after editing
    } else {
      // Otherwise, add a new answer
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { id: Date.now(), ...newAnswer },
      ]);
    }
    setEditData(null);
  };

  const handleEdit = (id) => {
    // Find the answer with the corresponding ID and set it as the edit data
    const editAnswer = answers.find((answer) => answer.id === id);
    if (editAnswer) {
      setEditData(editAnswer);
      setEditId(id); // Set the edit ID
    }
  };

  const handleCancelEdit = () => {
    setEditData(null);
    setEditId(null);
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
