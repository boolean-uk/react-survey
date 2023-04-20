import { useState } from "react";

import Form from "./Form";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const defaultData = {
    timeSpent: [],
    colour: null,
    review: "",
    username: "",
    email: "",
  }

  const [userData, setUserData] = useState(defaultData);

  const [answers, setAnswers] = useState([
    {
      username: "John",
      timeSpent: ["swimming"],
      colour: '1',
      review: 'reveiew',
      email: 'ki@ki'
    }
  ]);

  const [edit, setEdit] = useState(-1)

  const handleEditButton = (answerItem) => {
    const index = answers.indexOf(answerItem)
    setUserData(answerItem)
    setEdit(index)
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    // *console.table(userData);
    setAnswers([...answers, userData]);
    setUserData(defaultData)
  };

  const handleEdit = (e) => {
    e.preventDefault()
    setAnswers(answers.map((answer, i) => {
      if (i === edit)
        return userData
      return answer
    }))

    setUserData(defaultData)
    setEdit(-1)
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answers={answers} handleEditButton={handleEditButton} />
      </section>
      <section className="main__form">
        {/* a form should be here */}
        <Form handleSumbit={ edit === -1 ? handleSumbit : handleEdit } userData={userData} setUserData={setUserData} />
      </section>
    </main>
  );
}

export default Main;
