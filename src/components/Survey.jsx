import { useState } from "react";
import AnswersList from "./AnswersList";

const checkboxes = ['swimming', 'bathing', 'chatting', 'noTime'];
const ratingOptions = ['1', '2', '3', '4'];

const initialFormData = {
  id: -1,
  colour: 0,
  review: "",
  username: "",
  email: "",
  timeSpent: []
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [userData, setUserData] = useState(initialFormData)

  const [answersList, setAnswersList] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.id !== -1) {
      setAnswersList(answersList.map(answer => answer.id === userData.id ? {id: answer.id , ...userData} : answer))
    } else {
      setAnswersList([...answersList, {...userData, id: answersList.length}])
    }

    setUserData(initialFormData)
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    if (name !== undefined) {
      if (type === "checkbox") {
        if (name === "timeSpent") {
          if (userData.timeSpent.includes(value)) {
            setUserData({...userData, timeSpent: userData.timeSpent.filter(ts => ts !== value)})
          } else {
            setUserData({...userData, timeSpent: [...userData.timeSpent, value]})
          }
        }
      } else {
        setUserData({ ...userData, [name]: value })
      }
    }
  }

  const editAnswer = (answerItem) => {
    setUserData(answerItem)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
       <AnswersList answersList={answersList} editAnswer={editAnswer} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {ratingOptions.map((option, index) => (
                <li key={index}>
                  <input id={`color-${option}`} type="radio" name="colour" value={option} onChange={handleChange} checked={userData.colour === option}/>
                  <label htmlFor={`color-${option}`}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {checkboxes.map((option, index) => (
                <li key={index}>
                  <label>
                    <input name='timeSpent' type="checkbox" value={option} onChange={handleChange} checked={userData.timeSpent.includes(option)}/>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleChange} value={userData.review}/>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" onChange={handleChange} value={userData.username}/>
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" onChange={handleChange} value={userData.email}/>
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  )
}

export default Survey;
