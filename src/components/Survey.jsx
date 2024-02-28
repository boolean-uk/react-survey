import { useEffect, useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const [formData, setFormData] = useState({
    color: 0,
    timeSpent: [],
    review: "",
    name: "",
    email: "",
  });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // useEffect(() => {
  //   console.log(answers)
  // }, [answers])
  const handleEdit = (index) => {
    console.log(index)
    setSelectedAnswerIndex(index);
    setFormData(answers[index]);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} handleEdit={handleEdit}/>
      </section>
      <section className="survey__form">
        <Form setAnswers ={setAnswers} answers={answers} setFormData = {setFormData} formData={formData} selectedAnswerIndex={selectedAnswerIndex} setSelectedAnswerIndex={setSelectedAnswerIndex}/>
      </section>
    </main>
  );
}

export default Survey;
