import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./form";

function Survey() {
  const [answers, setAnswers] = useState([])
  const [open, setOpen] = useState(false); //Ignore this state

  const initialFormState = {
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
  }

  const [form, setForm] = useState(initialFormState)
  const [editId, setEditId] = useState(null)
  //const [answerToEdit, setAnswerToEdit] = useState(null)

  const handleInput = (event, fieldName) =>{

    if(fieldName ==="spendTime") {
      const updatedSpendTime = [...form.spendTime]
      const index = updatedSpendTime.indexOf(event.target.value)

      if(index === -1) {
        updatedSpendTime.push(event.target.value)
      } else {
        updatedSpendTime.splice(index, 1)
      }

      setForm({ ...form, [fieldName]: updatedSpendTime })
    } else
    {
      setForm({ ...form, [fieldName]: event.target.value })
    }
  }

  const submitForm = event => {
    event.preventDefault();

    // Check if we are editing an existing answer
    if (editId !== null) {
      const index = answers.findIndex(answer => answer.id === editId)

      if (index !== -1) {
        // Create a copy of the answers array
        const updatedAnswers = [...answers]
        
        // Update the answer at the found index with the new form data
        updatedAnswers[index] = { ...form, id: editId }
        
        // Update the answers array with the modified answer
        setAnswers(updatedAnswers)
        
        // Reset editId after updating
        setEditId(null)
      }
    } else {
      // Add a new answer
      setAnswers([...answers, form])
    }
  
    // Reset form
    setForm(initialFormState)
    setEditId(null)
  }


  const editSurvey = id => {
    const answerToEdit = answers.find(answer => answer.id === id);
  
    if (answerToEdit) {
      // Set form state to the data of the survey to edit
      setForm({ ...answerToEdit });
      // Set editId to the id of the survey to edit
      setEditId(id);
    } else {
      // Reset form state if answerToEdit is not found
      setForm(initialFormState);
      // Reset editId
      setEditId(null);
    }
  }

  return (
    <main className="survey">

      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {
          //JSON.stringify(answers)
        }
        <AnswersList answersList={answers} editSurvey={editSurvey} />
      </section>

      <section className="survey__form">
        <Form 
        form={form}
        handleInput={handleInput}
        submitForm={submitForm}
        />
      </section>
    </main>
  )
}

export default Survey;
