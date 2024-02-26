import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  //   {
  //   color: "",

  //   spendTime: "",
  //   review: "",
  //   username: "",
  //   emails: "",
  // } );

  // const handleChange = (e) => {
  //   //(e) => { ... }: This is an arrow function that takes an event object e as its argument.
  //   //This event object contains information about the event that occurred, such as which input field triggered the change.

  //   // Extracting the name and value from the event target (input field)
  //   //This line destructures the name and value properties from the target property of the
  //   //event object. The target property refers to the element that triggered the event, which in this case is the input field that the user interacted with.
  //   const { name, value } = e.target;

  //   // Updating the state using the extracted name and value
  //   // The spread operator (...) is used to create a new object with the existing state values
  //   // The square brackets ([]) around the name variable indicate that it's a computed property name,
  //   // meaning that the actual property name will be determined dynamically based on the value of the name variable.
  //   // This allows us to update the state with the corresponding field name (e.g., username, email) dynamically.
  //   setAnswers((prevState) => ({
  //     //This line updates the state using the setAnswers function, which is provided by the useState hook. It takes a
  //     //callback function as an argument, which receives the previous state (prevState) as its argument. Inside the callback
  //     //function, a new state object is created using the spread operator (...prevState) to copy all existing state properties,
  //     //and then the value of the input field that triggered the change is updated dynamically using computed property names ([name]: value).
  //     ...prevState,
  //     [name]: value, //name and value: These variables hold the name and value of the input field that triggered the change.
  //     //The name variable corresponds to the name attribute of the input field, while the value variable corresponds to the value entered by the user into the input field.
  //   }));
  // };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? (checked ? value : "") : value;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the submitted answer to the answers state array

    setAnswers((prevAnswers) => {
      // Ensure prevAnswers is initialized properly
      const updatedAnswers = Array.isArray(prevAnswers) ? [...prevAnswers] : [];
      // Concatenate the new answer
      updatedAnswers.push(answers);
      return updatedAnswers;
    });
    setFormSubmitted(true);
  };

  return (
    <main className="survey">
      {/* <section className={`survey__list ${open ? "open" : ""}`}> */}
      <section className="survey__list">
        <h2>Answers list</h2>
        {formSubmitted && <AnswersList answersList={answers} />}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="colour-one"
                  type="radio"
                  name="colour"
                  value="1"
                  onChange={handleChange}
                />
                <label htmlFor="colour-one">1</label>
              </li>
              <li>
                <input
                  id="colour-two"
                  type="radio"
                  name="colour"
                  value="2"
                  onChange={handleChange}
                />
                <label htmlFor="colour-two">2</label>
              </li>
              <li>
                <input
                  id="colour-three"
                  type="radio"
                  name="colour"
                  value="3"
                  onChange={handleChange}
                />
                <label htmlFor="colour-three">3</label>
              </li>
              <li>
                <input
                  id="colour-four"
                  type="radio"
                  name="colour"
                  value="4"
                  onChange={handleChange}
                />
                <label htmlFor="colour-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                  />
                  I don't like to spend time with it
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
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" onChange={handleChange} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" onChange={handleChange} />
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
