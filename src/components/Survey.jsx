import { useState } from "react";

const initialFormData = {
  color: "",
  spendTime: {
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
  },
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  const [userData, setUserData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/answers", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    console.log(userData)
    setUserData(initialFormData);
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (name !== undefined) {
      if (type === "checkbox") {
        setUserData({ ...userData, spendTime: { ...userData.spendTime, [value]: checked }
        });
      } else {
        setUserData({ ...userData, [name]: value });
      }
    }
  };
  

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        ANSWERS HERE
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
            {/*<!-- Radio inputs go here -->*/}
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={handleChange}
                  checked={userData.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={handleChange}
                  checked={userData.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={handleChange}
                  checked={userData.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={handleChange}
                  checked={userData.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/*<!-- checkboxes go here -->*/}
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time-swimming"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                    checked={userData.spendTime.swimming}
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-bathing"
                    type="checkbox"
                    value="bathing"
                    onChange={handleChange}
                    checked={userData.spendTime.bathing}
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-chatting"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                    checked={userData.spendTime.chatting}
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time-noTime"
                    type="checkbox"
                    value="noTime"
                    onChange={handleChange}
                    checked={userData.spendTime.noTime}
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
              value={userData.review}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={userData.username}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
