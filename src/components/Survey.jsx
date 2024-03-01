import { useState } from "react";
import AnswersList from "./AnswersList";

let answerForms = [];

function Survey() {
  const [open, setOpen] = useState(false);

  const initialData = {
    color: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  };
  const [data, setData] = useState(initialData);
  const [answerData, setAnswerData] = useState(answerForms);
  const [changes, setChanges] = useState(-1);

  const submit = (event) => {
    event.preventDefault();
    answerForms.push(data);
    setAnswerData(answerForms);
    setData(initialData);
  };

  const editSubmit = (event) => {
    event.preventDefault();
    answerForms[changes] = data;
    setAnswerData([...answerForms]);
    setData(initialData);
    setChanges(-1);
  };

  const input = (event) => {
    const { name, type, value, checked } = event.target;

    if (type === "checkbox") {
      let arr = [...data.timeSpent];
      if (checked) arr.push(value);
      else arr.splice(arr.indexOf(value), 1);
      setData({ ...data, timeSpent: arr });
    } else setData({ ...data, [name]: value });
  };

  const editForm = (data) => {
    setData({
      color: data.color,
      timeSpent: data.timeSpent,
      review: data.review,
      username: data.username,
      email: data.email,
    });
    setChanges(data.index);
  };

  const deleteForm = (data) => {
    answerForms.splice(data.index, 1);
    setAnswerData([...answerForms]);
  };

  return (
    <>
      <main className="survey">
        <section className={`survey__list ${open ? "open" : ""}`}>
          <h2>Answers list</h2>
          {/* answers should go here */}
          <AnswersList
            answerData={answerData}
            editForm={editForm}
            deleteForm={deleteForm}
          />
        </section>
        <section className="survey__form">
          {/* a form should be here */}
        </section>
        <form
          className="form"
          onSubmit={changes > -1 ? editSubmit : submit}
        >
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
                  checked={data.color === "1"}
                  onChange={input}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={data.color === "2"}
                  onChange={input}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={data.color === "3"}
                  onChange={input}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={data.color === "4"}
                  onChange={input}
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
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={input}
                    checked={data.timeSpent.includes("swimming")}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onChange={input}
                    checked={data.timeSpent.includes("bathing")}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={input}
                    checked={data.timeSpent.includes("chatting")}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onChange={input}
                    checked={data.timeSpent.includes("noTime")}
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
              value={data.review}
              onChange={input}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={input}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={input}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </main>
    </>
  );
}

export default Survey;
