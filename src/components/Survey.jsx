import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";

const checkboxes = ['swimming', 'bathing', 'chatting', 'noTime'];
const ratingOptions = ['1', '2', '3', '4'];

// Add id field to be able to edit answers
const initialFormData = {
  id: undefined,
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

  // Get data from db and put into answersList
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/answers")
      const answers = await response.json()
      setAnswersList(answers)
    } catch (error) {
      console.error("Error fetching answers:", error)
    }
  }

  // Get data from db on pageload
  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If new, add to db, if not update db
    if (userData.id === undefined) {
      await fetch("http://localhost:3000/answers", {
        method: "POST",
        body: JSON.stringify(userData),
      }); 
    } else {
      await fetch(`http://localhost:3000/answers/${userData.id}`, {
        method: "PUT",
        body: JSON.stringify(userData),
      }); 
    }

    // update list on page with newest data
    await fetchData()
    setUserData(initialFormData)
  }

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    if (name !== undefined) {
      if (type === "checkbox") {
        if (name === "timeSpent") {
          // Adds and removes the different checkbox options to spentTime array
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

  // sets user data to the one in the answerItem passed from AnswersItem
  const editAnswer = (answerItem) => {
    setUserData(answerItem)
  }

  // Delete answer with given id and update answersList
  const deleteAnswer = async (id) => {
    await fetch(`http://localhost:3000/answers/${id}`, {
        method: "DELETE"
      });

    await fetchData()
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
       <AnswersList answersList={answersList} editAnswer={editAnswer} deleteAnswer={deleteAnswer} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {// Add all rating levels to form
              ratingOptions.map((option, index) => (
                <li key={index}>
                  <input id={`color-${option}`} type="radio" name="colour" value={option} onChange={handleChange} checked={userData.colour === option}/>
                  <label htmlFor={`color-${option}`}>{option}</label>
                </li>
              ))
              }
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              { // Add all spentTime activities to form
              checkboxes.map((option, index) => (
                <li key={index}>
                  <label>
                    <input name='timeSpent' type="checkbox" value={option} onChange={handleChange} checked={userData.timeSpent.includes(option)}/>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </label>
                </li>
              ))
              }
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
