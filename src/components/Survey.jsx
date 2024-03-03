import { useState } from "react";
import AnswersList from "./AnswersList";

const initialFormData = {
  color: "",
  spendTime: [],  
  username: "",
  email: "",
  review: "",
};
export default function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [userData, setUserData] = useState(initialFormData);

  const [formChanged, setFormChanged] = useState({
    firstName: false,
    password: false,
  });

const colorOptions = ["1", "2", "3", "4"];
const spendTimeOptions = ["Swimming", "Bathing", "Chatting", "NoTime"];
const [submissions, setSubmissions] = useState([]);

  // Updated handleChange method
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (type === "checkbox") {
      if (checked) {
        // Add the checkbox value to the array
        setUserData({
          ...userData,
          [name]: [...userData[name], value],
        });
      } else {
        // Remove the checkbox value from the array
        setUserData({
          ...userData,
          [name]: userData[name].filter((item) => item !== value),
        });
      }
    } else {
      // Handle other input types
      setUserData({ ...userData, [name]: value });
      setFormChanged({ ...formChanged, [name]: true });
    }
  };

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted: ", { userData });
  setSubmissions([...submissions, userData]); // Add userData to submissions array
  setUserData(initialFormData); // Reset form data after submission
};
  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
         answersList={submissions}
         setSubmissions = {setSubmissions}
        />
        
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              {colorOptions.map((color) => (
                <li key={color}>
                  <input
                    id={color}
                    type="radio"
                    name="color"
                    value={color}
                    onChange={handleChange}
                    checked={userData.color === color}
                  />
                  <label htmlFor={color}>{color}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              {spendTimeOptions.map((activity) => (
                <li key={activity}>
                  <label>
                    <input
                      name="spendTime"
                      type="checkbox"
                      value={activity}
                      onChange={handleChange}
                      checked={userData.spendTime.includes(activity)}
                    /> {activity}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"z
              rows="10"
              onChange={handleChange}
              value={userData.review}>
              </textarea>
            </label>
            <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={userData.username} /></label>z
          <label>Leave us your email pretty please??
            <input
              type = "email"
              name = "email"
              onChange={handleChange}
              value = {userData.email} /></label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
    </section>
    </main>
  );
}