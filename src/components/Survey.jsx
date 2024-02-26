import { useState } from "react";

import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState({
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: "",
  });

  const [answersList, setAnswersList] = useState([]);

  const colorOptions = ["1", "2", "3", "4"];

  const spendingTimeOptions = [
    { value: "swimming", label: "Swimming" },
    { value: "bathing", label: "Bathing" },
    { value: "chatting", label: "Chatting" },
    { value: "noTime", label: "don't like to spend time with it" },
  ];

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (name !== undefined) {
      if (type === "checkbox") {
        if (checked) {
          setFormData({
            ...formData,
            spendTime: [...formData.spendTime, value],
          });
        } else {
          setFormData({
            ...formData,
            spendTime: formData.spendTime.filter((item) => item !== value),
          });
        }
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Assuming formData has properties like color, spendTime, review, username, email
    // const answers = [
    //   { question: "Color", answer: formData.color },
    //   { question: "Spend Time", answer: formData.spendTime.join(", ") },
    //   { question: "Review", answer: formData.review },
    //   { question: "Username", answer: formData.username },
    //   { question: "Email", answer: formData.email },
    // ];

    const submittedAnswer = {
      colour: formData.color,
      timeSpent: formData.spendTime,
      review: formData.review,
      username: formData.username,
      email: formData.email,
    };

    setAnswersList((prevAnswersList) => [...prevAnswersList, submittedAnswer]);

    console.log("Answers: ", submittedAnswer);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answersList={answersList} />
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
