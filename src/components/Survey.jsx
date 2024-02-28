import { useState } from "react";
import RadioButtonList from "./RadioButtonList";
import Checkboxes from "./Checkboxes";
import AnswersList from "./AnswersList";

const initialForm = {
  color: 0,
  timeSpent: [],
  review: "",
  name: "",
  email: ""
}

const URL = "http://localhost:3000/surveys/"

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const [edit, setEdit] = useState(-1)
  const [userData, setUserData] = useState(initialForm)

  function handleChange(event) {
    const {name, type, value, checked} = event.target
    
    if (name === "spend-time") {
      if (checked) {
        setUserData({...userData, timeSpent: [...userData.timeSpent, value]})
      } else {
        setUserData({...userData, timeSpent: userData.timeSpent.filter(answer => answer !== value)})
      }
    } else { setUserData({...userData, [name]: value}) }
  }

  async function getAnswers() {
    const getRequest = {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }
    const response = await fetch(URL, getRequest)
    const initialAnswers = await response.json()
    setAnswers([...initialAnswers])
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (edit === -1) {

      const postRequest = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }

      await fetch(URL, postRequest)
      setAnswers([...answers, userData])

    } else {
      const newAnserrs = [...answers]
      newAnserrs[edit] = userData

      const putRequest = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }

      await fetch(URL + answers[edit].id, putRequest)
      setAnswers(newAnserrs)
      setEdit(-1)
    }
    await getAnswers()
    setUserData(initialForm)
  }

  function editAnswer(event) {
    const index = event.target.id
    setEdit(index)
    setUserData(answers[index])
  }

  async function deleteAnswer(event) {
    const deleteRequest = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userData)
    }

    await fetch(URL + answers[event.target.id].id, deleteRequest)
    await getAnswers()
    setEdit(-1)
    setUserData(initialForm)
  }

  getAnswers()

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answers} editAnswer={editAnswer} deleteAnswer={deleteAnswer}/>
      </section>
      <section className="survey__form">{/* a form should be here */}
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <RadioButtonList userData={userData} onChange={handleChange}/>
          <Checkboxes userData={userData} onChange={handleChange}/>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={userData.review}
              onChange={handleChange}/>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input 
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}/>
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}/>
          </label>
          <input 
            onClick={handleSubmit}
            className="form_submit" 
            type="submit" 
            value="Submit Survey!"/>
        </form>
      </section>
    </main>
  );
}

export default Survey;
