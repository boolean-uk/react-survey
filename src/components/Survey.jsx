import { useState } from "react";
import AnswersList from "./AnswersList";

const INITIAL_STATE = {
  username: '',
  email: '',
  color: '',
  spendTime: '',
  review: '',
  features: '',
  worstFeatures: "",
};


function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChanges = (event) => {
    const { name, type, id, checked, value } = event.target
      setForm({ ...form, [name]: value })
  }

  const submitHandle = (event) => {
    event.preventDefault()
    event.target.reset()
    console.log(form)

    setForm(INITIAL_STATE)
  }


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <AnswersList /> */}
      </section>
      <section className="survey__form">
        <form
          className="form"
          onSubmit={submitHandle}>
          <h2>Tell us what you think about your rubber duck!</h2>


          <div className="form__group">
            <h3>What do you think are the best features of your rubber duck?</h3>
            <ul className="spendTimeWithDuck_checkbox">
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="yellow"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.features === "yellow"}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="squeaks"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.features === "squeaks"}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="logo"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.features === "logo"}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="features"
                    type="checkbox"
                    value="big"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.features === "big"}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>


          <div className="form__group">
            <h3>What do you think are the worst features of your rubber duck?</h3>
            <ul className="spendTimeWithDuck_checkbox">
              <li>
                <label>
                  <input
                    name="worstFeatures"
                    type="checkbox"
                    value="yellow"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.worstFeatures === "yellow"}
                  />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstFeatures"
                    type="checkbox"
                    value="squeaks"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.worstFeatures === "squeaks"}
                  />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstFeatures"
                    type="checkbox"
                    value="logo"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.worstFeatures === "logo"}
                  />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="worstFeatures"
                    type="checkbox"
                    value="big"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.worstFeatures === "big"}
                  />
                  It's big!
                </label>
              </li>
            </ul>
          </div>


          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul className="rateColourOfDuck_radio">
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onChange={(event) => { handleChanges(event) }}
                  checked={form.color === "1"}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onChange={(event) => { handleChanges(event) }}
                  checked={form.color === "2"}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onChange={(event) => { handleChanges(event) }}
                  checked={form.color === "3"}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onChange={(event) => { handleChanges(event) }}
                  checked={form.color === "4"}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>


          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul className="spendTimeWithDuck_checkbox">
              <li>
                <label>
                  <input
                    name="spendTime"
                    type="checkbox"
                    value="swimming"
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.spendTime === "swimming"}
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
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.spendTime === "bathing"}
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
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.spendTime === "chatting"}
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
                    onChange={(event) => { handleChanges(event) }}
                    checked={form.spendTime === "noTime"}
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
              onChange={(event) => { handleChanges(event) }}

            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={(event) => { handleChanges(event) }}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => { handleChanges(event) }}
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
