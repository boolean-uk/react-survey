import { useState } from "react";
import "./AnswersList";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([]);
  const [form, setForm] = useState({
    colour: "",
    spendTime: {
      swimming: false,
      bathing: false,
      chatting: false,
      other: false
    },
    review: "",
    username: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswers([...answers, form]);
    event.target.reset();
  }

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        spendTime: {
          ...form.spendTime,
          [value]: checked
        }
      });
    }
    else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        {
          <AnswersList answersList={answers} />
        }
      </section>
      <section className="survey__form" onSubmit={(e) => handleSubmit(e)}>
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <input type="radio" id="1" name="colour" value="1" onChange={handleFormChange} checked={form.colour === "1"} />
            <label htmlFor="1">1</label>
            <input type="radio" id="2" name="colour" value="2" onChange={handleFormChange} checked={form.colour === "2"} />
            <label htmlFor="2">2</label>
            <input type="radio" id="3" name="colour" value="3" onChange={handleFormChange} checked={form.colour === "3"} />
            <label htmlFor="3">3</label>
            <input type="radio" id="4" name="colour" value="4" onChange={handleFormChange} checked={form.colour === "4"} />
            <label htmlFor="4">4</label>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <label htmlFor="swimming">Swimming</label>
            <input type="checkbox" id="swimming" name="spend-time" value="swimming" onChange={handleFormChange} checked={form.spendTime.swimming} />
            <label htmlFor="bathing">Bathing</label>
            <input type="checkbox" id="bathing" name="spend-time" value="bathing" onChange={handleFormChange} checked={form.spendTime.bathing} />
            <label htmlFor="chatting">Chatting</label>
            <input type="checkbox" id="chatting" name="spend-time" value="chatting" onChange={handleFormChange} checked={form.spendTime.chatting} />
            <label htmlFor="other">Other stuff ╰(*°▽°*)╯</label>
            <input type="checkbox" id="other" name="spend-time" value="other" onChange={handleFormChange} checked={form.spendTime.other} />
          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={form.review}
              onChange={handleFormChange}
            ></textarea>
          </label>
          <label>Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleFormChange}
            />
          </label>
          <label>Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleFormChange}
            />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
      <section className="survey__form">{/* a form should be here */}</section>
    </main>
  );
}

export default Survey;