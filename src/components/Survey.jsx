import { useState, useEffect } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [formState, setFormState] = useState({
    color: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  });
  const [answers, setAnswers] = useState([]);
  const [editingAnswer, setEditingAnswer] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/answers")
      .then((response) => response.json())
      .then((data) => setAnswers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      setFormState((prevState) => ({
        ...prevState,
        timeSpent: prevState.timeSpent.includes(value)
          ? prevState.timeSpent.filter((item) => item !== value)
          : [...prevState.timeSpent, value],
      }));
    } else {
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingAnswer) {
      fetch(`http://localhost:3000/answers/${editingAnswer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })
        .then((response) => response.json())
        .then((data) => {
          setAnswers((prevAnswers) =>
            prevAnswers.map((answer) => (answer.id === data.id ? data : answer))
          );
          setEditingAnswer(null);
        });
    } else {
      fetch("http://localhost:3000/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })
        .then((response) => response.json())
        .then((data) => {
          setAnswers((prevAnswers) => [...prevAnswers, data]);
        });
    }
    setFormState({
      color: "",
      timeSpent: [],
      review: "",
      username: "",
      email: "",
    });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/answers/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setAnswers((prevAnswers) =>
          prevAnswers.filter((answer) => answer.id !== id)
        );
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleEdit = (answer) => {
    setFormState(answer);
    setEditingAnswer(answer);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          answersList={answers}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  checked={formState.color === "1"}
                  onChange={handleChange}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={formState.color === "2"}
                  onChange={handleChange}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={formState.color === "3"}
                  onChange={handleChange}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={formState.color === "4"}
                  onChange={handleChange}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="swimming"
                    checked={formState.timeSpent.includes("swimming")}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="bathing"
                    checked={formState.timeSpent.includes("bathing")}
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="chatting"
                    checked={formState.timeSpent.includes("chatting")}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="noTime"
                    checked={formState.timeSpent.includes("noTime")}
                    onChange={handleChange}
                  />
                  I dont like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={formState.review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
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
