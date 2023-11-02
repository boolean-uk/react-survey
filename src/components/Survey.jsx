import { useState } from "react";

const initialForm = {
  raterubber: "",
  spendTime: "",
  aboutDucker: "",
  name: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(initialForm);

  // creating a function to submit the form and set it to original state

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    setForm(initialForm);
  };

  const changeInput = (event) => {
    console.log("I will update what you type");
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      if (checked) {
        setForm({ ...form, [name]: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">{/* a form should be here */}</section>
      <section className="survey-form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about rubber duck!</h2>
          <div className="form_group radio">
            <h3>How do you rate rubber duck color?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="raterubber"
                  value="1"
                  checked={form.raterubber === "1"}
                  onChange={(event) => changeInput(event)}
                />
                <label for="color-one">1 </label>
              </li>

              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="raterubber"
                  value="2"
                  checked={form.raterubber === "2"}
                  onChange={(event) => changeInput(event)}
                />
                <label for="color-two">2</label>
              </li>

              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="raterubber"
                  value="3"
                  checked={form.raterubber === "3"}
                  onChange={(event) => changeInput(event)}
                />
                <label for="color-three">3</label>
              </li>

              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="raterubber"
                  value="4"
                  checked={form.raterubber === "4"}
                  onChange={(event) => changeInput(event)}
                />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          {/* creating the checkbox*/}
          <div className="form_group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="spendTime"
                    value="swimming"
                    checked={form.spendTime === "swimming"}
                    onChange={(event) => changeInput(event)}
                  />{" "}
                  swimming
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="checkbox"
                    name="spendTime"
                    value="chatting"
                    checked={form.spendTime === "chatting"}
                    onChange={(event) => changeInput(event)}
                  />{" "}
                  Chatting
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="checkbox"
                    name="spendTime"
                    value="noTime"
                    checked={form.spendTime === "noTime"}
                    onChange={(event) => changeInput(event)}
                  />{" "}
                  i dont like to spend time with it!
                </label>
              </li>
            </ul>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="aboutDucker"
              cols="30"
              rows="10"
              value={form.aboutDucker}
              onChange={(event) => changeInput(event)}
            ></textarea>
          </label>

          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="e.g Papi Skywalker"
              onChange={(event) => changeInput(event)}
            />
          </label>

          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="davidpapi77@gmail.com"
              onChange={(event) => changeInput(event)}
            />
          </label>

          <input className="form_submit" type="submit" value="Submit" />
        </form>
      </section>
    </main>
  );
}

export default Survey;
