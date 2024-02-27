import { useEffect, useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState({colour: -1, timeSpent: [], review: "", username: "", email: ""});
  const [storedAnswers, setStoredAnswers] = useState([]);
  const [edit, setEdit] = useState({isEditing: false, index: -1});

  useEffect(() => {
    if (edit.isEditing) {
      setAnswers(storedAnswers[edit.index]);
    }
  }, [edit, storedAnswers]);

  const getFromDb = async () => {
    const apiRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    const response = await fetch("http://localhost:3000/surveys", apiRequest);
    const data = await response.json();
    setStoredAnswers(data.reverse());
  }

  useEffect(() => {
    getFromDb();
  }, []);

  const postToDb = async (answers) => {
    const apiRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answers)
    }
    await fetch("http://localhost:3000/surveys", apiRequest);
    getFromDb();
  }

  const putToDb = async (answers, id) => {
    const apiRequest = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(answers)
    }
    await fetch(`http://localhost:3000/surveys/${id}`, apiRequest);
    getFromDb();
  }

  const deleteFromDb = async (id) => {
    const apiRequest = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    await fetch(`http://localhost:3000/surveys/${id}`, apiRequest);
    getFromDb();
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEditing) {
      putToDb(answers, storedAnswers[edit.index].id);
      setEdit({isEditing: false, index: -1});
      setAnswers({colour: -1, timeSpent: "", review: "", username: "", email: ""});
      return;
    }

    postToDb(answers);
    setAnswers({colour: -1, timeSpent: "", review: "", username: "", email: ""});
  }

  const checkboxOptions = [{value: 'swimming', label: 'Swimming'}, {value: 'bathing', label: 'Bathing'}, {value: 'chatting', label: 'Chatting'}, {value: 'noTime', label: "I don't like to spend time with it"}];

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList deleteFromDb={deleteFromDb} setEdit={setEdit} answersList={storedAnswers} />
      </section>
      <section className="survey__form">
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {[1, 2, 3, 4].map((i) => (
                <li key={i}>
                  <input onChange={() => setAnswers({...answers, colour: i})} checked={answers.colour === i} id={`color-${i}`} type="radio" name="color" value={i} />
                  <label htmlFor={`color-${i}`}>{i}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {checkboxOptions.map((option, i) => (
                <li key={i}>
                <label>
                  <input onChange={() => setAnswers({...answers, timeSpent: answers.timeSpent.includes(option.value) ?  answers.timeSpent.filter(t => t != option.value): [...answers.timeSpent, option.value]})} checked={answers.timeSpent.includes(option.value)} name="spend-time" type="checkbox" value={option.value} />
                  {option.label}
                </label>
              </li>
              ))}
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              onChange={(e) => setAnswers({...answers, review: e.target.value})}
              value={answers.review}
              name="review"
              cols="30"
              rows="10" />
          </label>
          <label>Put your name here (if you feel like it):
            <input
              onChange={(e) => setAnswers({...answers, username: e.target.value})}
              value={answers.username}
              type="text"
              name="username"
            />
          </label>
          <label>Leave us your email pretty please??
            <input
              onChange={(e) => setAnswers({...answers, email: e.target.value})}
              value={answers.email}
              type="email"
              name="email"
            />
          </label>
          <input onClick={handleSubmit} className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
