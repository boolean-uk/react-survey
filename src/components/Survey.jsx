import React, { useState, useEffect } from "react";
import AnswersList from "./AnswersList";

const jsonURL = "http://localhost:3000";

const INITIAL_FORM_STATE = {
  color: "",
  timeSpent: [],
  review: "",
  name: "",
  email: ""
};

function Survey() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [answers, setAnswers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    getAllData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    addAnswer(formData);
    setFormData(INITIAL_FORM_STATE);
  };

  const handleInput = (event) => {
    const { name, type, value, checked } = event.target;
    if (name === "color" || name === "review" || name === "email" || name === "username") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "spend-time") {
      const newTimeSpent = checked
        ? [...formData.timeSpent, value]
        : formData.timeSpent.filter((time) => time !== value);
      setFormData({ ...formData, timeSpent: newTimeSpent });
    }
  };

  const editAnswer = (oldData) => {
    setFormData({ ...oldData });
    setEditing(oldData.id);
  };

  const addAnswer = (answer) => {
    if (editing === null) {
      const newAnswer = { ...answer, id: id };
      setAnswers([...answers, newAnswer]);
      postData(newAnswer);
      setId(id + 1);
    } else {
      editAnswerJson(answer.id, answer);
      const updatedAnswers = answers.map((ans) => (ans.id === answer.id ? answer : ans));
      setAnswers(updatedAnswers);
    }
    setEditing(null);
  };

  const deleteAnswer = (id) => {
    deleteData(id);
    setAnswers(answers.filter((answer) => answer.id !== id));
  };

  const postData = (data) => {
    const URL = `${jsonURL}/forms`;
    const postRequestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(URL, postRequestOptions)
      .then((response) => response.json())
      .then((newForm) => console.log("POST Data: ", newForm));
  };

  const deleteData = (answerId) => {
    const requestOptions = {
      method: "DELETE",
    };

    const URL = `${jsonURL}/forms/${answerId}`;

    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((deletedAnswer) => console.log("DELETE /form json data:", deletedAnswer));
  };

  const editAnswerJson = (answerId, data) => {
    const postRequestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(`${jsonURL}/forms/${answerId}`, postRequestOptions)
      .then((response) => response.json())
      .then((updatedAnswer) => console.log("Update answer: ", updatedAnswer));
  };

  const getAllData = () => {
    fetch(`${jsonURL}/forms`, {})
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("GET DATA", jsonData);
        setAnswers(jsonData);
      });
  };

  return (
    <main className="survey">
      <section className="survey__list">
        <h2>Answers list</h2>
        <AnswersList answersList={answers} editAnswer={editAnswer} deleteAnswer={deleteAnswer} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about rubber duck</h2>
          {/* Color rating */}
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {[1, 2, 3, 4].map((rating) => (
                <li key={rating}>
                  <input
                    id={`color-${rating}`}
                    type="radio"
                    name="color"
                    value={rating}
                    checked={formData.color === String(rating)}
                    onChange={handleInput}
                  />
                  <label htmlFor={`color-${rating}`}>{rating}</label>
                </li>
              ))}
            </ul>
          </div>
          {/* Time spent */}
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {["swimming", "bathing", "chatting", "noTime"].map((activity) => (
                <li key={activity}>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value={activity}
                      checked={formData.timeSpent.includes(activity)}
                      onChange={handleInput}
                    />
                    {activity === "noTime" ? "I don't like to spend time with it" : activity.charAt(0).toUpperCase() + activity.slice(1)}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          {/* Review, Name, Email */}
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" value={formData.review} onChange={handleInput}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" value={formData.name} onChange={handleInput} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={formData.email} onChange={handleInput} />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;


