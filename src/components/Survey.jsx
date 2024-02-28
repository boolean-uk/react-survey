import { useState , useEffect} from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";
import {PostData,  GetAllData, Delete, EditAnswerJson} from "./ToJSON";
/* eslint no-unused-vars:0 */

const INITIAL_FORM_STATE = {
  color: "",
  timeSpent: [],
  review: "",
  name:"",
  email:""
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [answers, setAnswers] = useState([])
  const [editing, setEditing] = useState(null)
  const [id, setId] = useState(1)

  useEffect(() => {GetAllData(setAnswers)}, [])

  const EditAnswer = (oldData) => {
    setFormData({...oldData})
    setEditing(oldData.id)
  }
  const addAnswer = (answer) => {
    if (editing === null)
    {
      answers.push({...answer, id:id})
      setId(id +1)
      setAnswers([...answers])
      PostData(answer)
    }
    else {
      EditAnswerJson(answer.id, answer)
      answers.splice(answers.indexOf( answers.find((answer) => answer.id === editing)), 1, answer)
      setAnswers([...answers])
    }
    setEditing(null)
  }
  const DeleteAnswer = (id) => {
    console.log("Delete:", id)
    Delete(id)
    setAnswers(answers.filter((answer) => answer.id !== id))
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList= {answers} EditAnswer = {EditAnswer} DeleteAnswer={DeleteAnswer}/>
      </section>
      <section className="survey__form">
        <Form setFormData={setFormData} formData={formData} setAnswers = {addAnswer}/>
      </section>
    </main>
  );
}

export default Survey;
