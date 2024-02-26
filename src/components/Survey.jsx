import { useEffect, useState } from "react";

import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    color: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  });

  const [answersList, setAnswersList] = useState([]);
  const [editFormData, setEditFormData] = useState(null);

  const colorOptions = ["1", "2", "3", "4"];

  const spendingTimeOptions = [
    { value: "swimming", label: "Swimming" },
    { value: "bathing", label: "Bathing" },
    { value: "chatting", label: "Chatting" },
    { value: "noTime", label: "don't like to spend time with it" },
  ];

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log(name, type, value, checked);
    if (name !== undefined) {
      if (type === "checkbox") {
        if (checked) {
          console.log("hello");
          setFormData({
            ...formData,
            timeSpent: [...formData.timeSpent, value],
          });
          console.log(formData);
        } else {
          setFormData({
            ...formData,
            timeSpent: formData.timeSpent.filter((item) => item !== value),
          });
          console.log(formData);
        }
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const submittedAnswer = {
      color: formData.color,
      timeSpent: formData.timeSpent,
      review: formData.review,
      username: formData.username,
      email: formData.email,
    };

    if (editFormData) {
      console.log("editfom data true");
      setAnswersList((prevAnswersList) =>
        prevAnswersList.map((answer) =>
          answer === editFormData ? submittedAnswer : answer
        )
      );
      console.log("answerList after changes", answersList);
      console.log("turn setEditFormData to null");
      setEditFormData(null);
    } else {
      console.log("else");
      setAnswersList((prevAnswersList) => [
        ...prevAnswersList,
        submittedAnswer,
      ]);
    }

    console.log("Answers: ", submittedAnswer);
  };

  const handleEditClick = (editedData) => {
    console.log("edetedData", editedData);
    setFormData(editedData);
    setEditFormData(editedData);
    console.log("editformdata", editFormData);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answersList} onEditClick={handleEditClick} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {colorOptions.map((option) => (
                <li key={option}>
                  <input
                    id={`color-${option}`}
                    type="radio"
                    name="color"
                    value={option}
                    onChange={handleInputChange}
                    checked={formData.color === option}
                  />
                  <label htmlFor={`color-${option}`}>{option}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {spendingTimeOptions.map((option) => (
                <li key={option.value}>
                  <label>
                    <input
                      name="spend-time"
                      type="checkbox"
                      value={option.value}
                      onChange={handleInputChange}
                      checked={formData.timeSpent.includes(option.value)}
                    />
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleInputChange}
              value={formData.review}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
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

export default Survey;
