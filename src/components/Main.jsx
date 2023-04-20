import { useState } from "react";
import Radio from "./Radio";
import Checkboxes from "./Checkboxes";
import AnswersList from "./AnswersList";


let id = 0

const initialForm = {
  id: id,
  username: "",
  colour: "",
  timeSpent: [],
  review: "",
  email: ""
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialForm)
  const [answersList, setAnswersList] = useState([])

  const handleReviewChange = (e) => {
    const newData = { ...formData }
    newData.review = e.target.value
    setFormData(newData)
  }

  const handleUsernameChange = (e) => {
    const newData = { ...formData }
    newData.username = e.target.value
    setFormData(newData)
  }

  const handleEmailChange = (e) => {
    const newData = { ...formData }
    newData.email = e.target.value
    setFormData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let exists = false
    let updatedAnswersList = answersList.map(answer => {
      if (answer.id === formData.id) {
        answer = { ...formData }
        exists = true
      }
      return answer
    })

    if (!exists) {
      updatedAnswersList = [...answersList, formData]
    }

    setAnswersList([...updatedAnswersList])

    initialForm.id++
    setFormData(initialForm)
  }

  const updateForm = (data) => {
    setFormData(data)
  }

  return (
    <main className="main">
      {/* {console.log(indexOfDataBeenEdited)} */}
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {answersList.length > 0 ? <AnswersList updateForm={updateForm} answersList={answersList} /> : ""}
      </section>
      <section className="main__form">
        {
          <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              <Radio
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              <Checkboxes
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            <label>
              What else have you got to say about your rubber duck?
              <textarea name="review" cols="30" rows="10" value={formData.review} onChange={handleReviewChange}></textarea>
            </label>
            <label>
              Put your name here (if you feel like it):
              <input type="text" name="username" value={formData.username} onChange={handleUsernameChange} />
            </label>
            <label>
              Leave us your email pretty please??
              <input type="email" name="email" value={formData.email} onChange={handleEmailChange} />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
          </form>
        }
      </section>
    </main>
  );
}

export default Main;
