import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedForms, setSubmittedForms] = useState([])
  const [formToEdit, setFormToEdit] = useState()
  const [isEdited, setIsEdited] = useState({editing: false, index: -1})
  const [formData, setFormData] = useState({
    color: '',
    spendTime: [],
    review: '',
    username: '',
    email: ''
  });

  useEffect(() => {
    if (isEdited.editing) {
      setFormData(submittedForms[isEdited.index])
    }
  }, [isEdited])
  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList submittedForms={submittedForms} formToEdit={formToEdit} setIsEdited={setIsEdited} />
      </section>
      <section className="survey__form">
          <Form 
            submittedForms={submittedForms} 
            setSubmittedForms={setSubmittedForms} 
            formToEdit={formToEdit} 
            setFormToEdit={setFormToEdit} 
            isEdited={isEdited}
            setIsEdited={setIsEdited}
            formData={formData}
            setFormData={setFormData}
          /> 
        </section>
    </main>
  );
}

export default Survey;
