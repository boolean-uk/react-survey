import { useState } from "react";
import AnswersList from "./AnswersList";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

const initialForm = {
  id: null ,
  color: '',
  timeSpent: [],
  review: '',
  username: '',
  email: ''
}

let id = 1

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData , setFormData] = useState(initialForm)
  const [answersList, setAnswersList] = useState([])

  const [oldFormData, setOldFormData] = useState(initialForm)
  const [editCard, setEditCard] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editCard) {
      const editedAnswers = answersList.map((answerItem) => {
        if (answerItem.id === oldFormData.id) {
          // Editing the props of formData when submitting
          setEditCard(false)
          answerItem.color = formData.color
          answerItem.timeSpent = formData.timeSpent
          answerItem.review = formData.review
          answerItem.username = formData.username
          answerItem.email = formData.email
        }
        return answerItem
      })
      setAnswersList(editedAnswers)
    } else {
      // Manually assigning an id to the answer before pushing to answersList
      formData.id = id
      setAnswersList([...answersList,formData])
      id++
    }
    setFormData({
      color: '',
      timeSpent: [],
      review: '',
      username: '',
      email: ''
    })
  }

  const handleChange = (e) => { 
    const {name,type, value, checked} = e.target
    // console.log(name, value);
    const arr = formData.timeSpent
    if (name === "timeSpent" && !arr.some(item => item === value)) {
      setFormData({...formData,[name] : [...formData.timeSpent,value]})
    } else if (name === "timeSpent" && arr.some(item => item === value)  ) {
      setFormData({...formData, [name]: formData.timeSpent.filter(item => item !== value)  })
    } else {
      setFormData({...formData,[name] : value})
    }
  }

  const handleEditData = (formData) => {
    setFormData(formData)
    console.log(formData); 
    setOldFormData(formData)
    setEditCard(true)
  }

  const handleDeleteData = (idTodelete) => {
    const deletedAnswer = answersList.filter(answerItem => answerItem.id !== idTodelete)
    setAnswersList(deletedAnswer)
  }



  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
        answersList={answersList}
        handleEditData={handleEditData}
        handleDeleteData={handleDeleteData} />
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck color?</h3>
            <RadioButtons handleChange={handleChange} formData={formData} />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes handleChange={handleChange} formData={formData} />
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea onChange={handleChange} name="review" cols="30" rows="10" value={formData.review}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input onChange={handleChange} type="text" name="username" value={formData.username} />
          </label>
          <label>
            Leave us your email pretty please??
            <input onChange={handleChange} type="email" name="email" value={formData.email} />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
