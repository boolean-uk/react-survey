import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state

  const [answers, setAnswers] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [userData, setUserData] = useState({
    colour: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  });



  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log(event.target);

    if (type === "checkbox") {
      setUserData((prevUserData) => {
        if (checked) {
          // If checkbox is checked, add the value to timeSpent array
          return {
            ...prevUserData,
            timeSpent: [...prevUserData.timeSpent, value],
          };
        } else {
          // If checkbox is unchecked, remove the value from timeSpent array
          return {
            ...prevUserData,
            timeSpent: prevUserData.timeSpent.filter((item) => item !== value),
          };
        }
      });
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAnswer = { ...userData };
    if (editMode && editIndex !== null) {
      // If in edit mode, update the existing answer
      setAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[editIndex] = newAnswer;
        return updatedAnswers;
      });
      setEditMode(false); // Exit edit mode after submission
    } else {
      // Otherwise, add a new answer
      setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
    }
    setUserData({
      colour: "",
      timeSpent: [],
      review: "",
      username: "",
      email: "",
    });
  };

  const handleEditClick = (index) => {
    // Populate the form fields with the current answer data
    const answerToEdit = answers[index];
    setUserData(answerToEdit);
    setEditIndex(index);
    setEditMode(true);
  };

  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* Answers should go here */}
        <AnswersList answersList={answers} handleEditClick={handleEditClick}/>
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit} >
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <input
              id="color-one"
              type="radio"
              name="colour"
              value="1"
              onChange={handleChange}
              checked={userData.colour === "1"}
            />
            <label htmlFor="color-one">1</label>
            <input
              id="color-two"
              type="radio"
              name="colour"
              value="2"
              onChange={handleChange}
              checked={userData.colour === "2"}
            />
            <label htmlFor="color-two">2</label>
            <input
              id="color-three"
              type="radio"
              name="colour"
              value="3"
              onChange={handleChange}
              checked={userData.colour === "3"}
            />
            <label htmlFor="color-three">3</label>
            <input
              id="color-four"
              type="radio"
              name="colour"
              value="4"
              onChange={handleChange}
              checked={userData.colour === "4"}
            />
            <label htmlFor="color-four">4</label>

            {/* Radio inputs go here */}
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* Checkboxes go here */}
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="swimming"
                onChange={handleChange}
                checked={userData.timeSpent.includes("swimming")}
              />
              Swimming
            </label>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="bathing"
                onChange={handleChange}
                checked={userData.timeSpent.includes("bathing")}
              />
              Bathing
            </label>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="chatting"
                onChange={handleChange}
                checked={userData.timeSpent.includes("chatting")}
              />
              Chatting
            </label>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value="noTime"
                onChange={handleChange}
                checked={userData.timeSpent.includes("noTime")}
              />
              I don't like to spend time with it
            </label>
          </div>
          <label htmlFor="review">
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              id="review"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={userData.review}
            ></textarea>
          </label>
          <label htmlFor="username">
            Put your name here (if you feel like it):
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Leave us your email pretty please??
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value={"Submit Answer"}
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
