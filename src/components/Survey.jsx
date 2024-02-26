import { useState } from "react";
// import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState();
  const [formData, setFormData] = useState({
    colourRating: "",
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
    textArea: "",
    name: "",
    email: "",
  });

  const handleFormChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleFormChange", name, type, value, checked);
    if (name === "colour") setFormData({ ...formData, colourRating: value });
    else if (name === "review") setFormData({ ...formData, textArea: value });
    else if (name === "username") setFormData({ ...formData, name: value });
    else if (name === "email") setFormData({ ...formData, email: value });
  };
  const handleCheckBoxChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleFormChange", name, type, value, checked);
    if (value === "swimming") setFormData({ ...formData, swimming: checked });
    else if (value === "bathing")
      setFormData({ ...formData, bathing: checked });
    else if (value === "chatting")
      setFormData({ ...formData, chatting: checked });
    else if (value === "noTime") setFormData({ ...formData, noTime: checked });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(
      "colourRating: " +
        formData.colourRating +
        "\nswimming: " +
        formData.swimming +
        "\nbathing: " +
        formData.bathing +
        "\nchatting: " +
        formData.chatting +
        "\nnoTime: " +
        formData.noTime +
        "\ntextArea: " +
        formData.textArea +
        "\nname: " +
        formData.name +
        "\nemail: " +
        formData.email
    );
  };
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here <AnswersList />*/}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleFormSubmit}>
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
                  onChange={handleFormChange}
                />
                <label htmlFor="colour-one">1</label>
              </li>
              <li>
                <input
                  id="colour-two"
                  type="radio"
                  name="colour"
                  value="2"
                  onChange={handleFormChange}
                />
                <label htmlFor="colour-two">2</label>
              </li>
              <li>
                <input
                  id="colour-three"
                  type="radio"
                  name="colour"
                  value="3"
                  onChange={handleFormChange}
                />
                <label htmlFor="colour-three">3</label>
              </li>
              <li>
                <input
                  id="colour-four"
                  type="radio"
                  name="colour"
                  value="4"
                  onChange={handleFormChange}
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
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleCheckBoxChange}
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
                    onChange={handleCheckBoxChange}
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
                    onChange={handleCheckBoxChange}
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
                    onChange={handleCheckBoxChange}
                  />
                  I don&apos;t like to spend time with it
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
              value={formData.textArea}
              onChange={handleFormChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.name}
              onChange={handleFormChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
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
