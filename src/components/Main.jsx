import { useState } from "react";
import AnswerList from "./AnswersList";

const initialState = {
  colour: "",
  spendTime: [false, false, false, false],
  review: "",
  userName: "",
  email: "",
};
function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initialState);
  const [answerList, setAnswerList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    setAnswerList([...answerList, formState]);

    setFormState(initialState);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;
    const name = event.target.name;
  

  if (name === "colour") {
    setFormState({ ...formState, colour: value });
  }

  if (name === "spend-time") {
    const newState = { ...formState };
  }
}
if (value === "swimming") {
  newState.spendTime[0] = !newState.spendTime[0];
  newState.spendTime[3] = false;
  setFormState(newState);
} else if (value=== "bathing") {
  newState.spendTime[1] = !newState.timespent[1];
  newState.spendTime[3] = false;
  setFormState(newState);
} else if (value === "chatting") {
  newState.spendTime[2] = !newState.timespent[2];
  newState.spendTime[3] = false;
  setFormState(newState);
} else {
  if (newState.spendTime[3] === false) {
    newState.spendTime[0] = false;
    newState.spendTime[1] = false;
    newState.spendTime[2] = false;
    newState.spendTime[3] = true;
  } else {
    newState.spendTime[3] = false;
  }
  setFormState(newState);
}

if (name === "review") {
  setFormState({ ...formState, review: value });
}
if (name === "userName") {
  setFormState({ ...formState, userName: value });
}
if (name === "email") {
  setFormState({ ...formState, email: value });
}

return (
  <main className="main">
    <section className={`main__list ${open ? "open" : ""}`}>
      <h2>Answers list</h2>
      {/* answers should go here */}
      <AnswerList answeList={AnswerList} />
    </section>
    <section className="main__form">
      {
        <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
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
                  checked={formState.colour === "1"}
                  onChange={handleChange}
                />
                <label htmlfor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  checked={formState.colour === "2"}
                  onChange={handleChange}
                />
                <label htmlfor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  checked={formState.colour === "3"}
                  onChange={handleChange}
                />
                <label htmlfor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  checked={formState.colour === "4"}
                  onChange={handleChange}
                />
                <label htmlfor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    checked={formState.spendTime[0]}
                    onChange={handleChange}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing"
                    checked={formState.spendtime[1]} onChange={handleChange} />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    checked={formState.spendTime[2]}
                    onChange={handleChange}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime"
                    checked={formState.spendTime[3]} onChange={handleChange} />
        
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
              value={formState.review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formState.userName}
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
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      }
    </section>
  </main>
);
    }

export default Main;
