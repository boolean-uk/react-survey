import { useState } from "react";
import AnswersList from "./AnswersList.jsx";
import Form from "./Form.jsx"

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  
  const [answers, setAnswers] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);
  
  const [userData, setUserData] = useState({
    ratingColor: '1',
    timeSpent: [],
    review: "",
    username: '',
    email: ''
  })

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
         <AnswersList answers={answers} setAnswers={setAnswers} userData={userData} setUserData={setUserData} setEditingIndex={setEditingIndex}/>
       </section>
      <section className="survey__form">
        <Form userData={userData} setUserData={setUserData} answers={answers} setAnswers={setAnswers} editingIndex={editingIndex} setEditingIndex={setEditingIndex}/>
      </section>
    </main>
  );
}

export default Survey;
