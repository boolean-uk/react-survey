import { useState } from "react";
import AnswersList from "./AnswersList";
import RadioButtons from "./RadioButtons";
import CheckBoxes from "./CheckBoxes";

const initialFormData = {
  id: null,
  color: '',
  timeSpent: [],
  review: '',
  username: '',
  email: ''
}

let id = 1

function Main() {
    const [open, setOpen] = useState(false); //Ignore this state
    const [formData, setFormData] = useState(initialFormData)
    const [editing, setEditing] = useState(false)
    const [answers, setAnswers] = useState([])

    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData({...formData, [name]: value})
    }

    const handleEditAnswer = (formData) => {
      setFormData(formData)
      setEditing(true)
    }

    const handleChecked = (event) => {
      const { value, checked, name } = event.target
      if (checked) {
        setFormData({...formData, [name]: [...formData.timeSpent, value]})
      } else (
        setFormData({...formData, [name]: formData.timeSpent.filter(item => item !== value)})
      )
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      if (editing) {
        setEditing(false)
        const editedAnswers = answers.map((item) => {
          if (item.id === formData.id) {
            item.color = formData.color
            item.timeSpent = formData.timeSpent
            item.review = formData.review
            item.username = formData.username
            item.email = formData.email
            item.id = formData.id
          } return item
        })
        setAnswers(editedAnswers)
      
      } else {
        formData.id = id
        setAnswers([...answers, formData])
        id++
      }
      setFormData(initialFormData)
    }

    const logAnswers = () => {
        console.log(`H2 Clicked`)
        console.log('answers',answers)
        console.log('formData:', formData)
        console.log(editing)
        console.log(answers)
    }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2 onClick={logAnswers} >Answers list</h2>
        <AnswersList answers={answers} handleEditAnswer={handleEditAnswer} />
      </section>
      <section className="main__form">
      <form className="form" onSubmit={handleSubmit} >
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <RadioButtons handleChange={handleChange} formData={formData} />
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <CheckBoxes handleChecked={handleChecked} formData={formData} />
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formData.review}
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username} /></label
        ><label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email} /></label
        ><input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      </section>
    </main>
  );
}

export default Main;
