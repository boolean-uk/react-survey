import { useState } from "react";

const initalFormData = {
  username: "",
  email: "",
  review: "",
  colourRating: "",
  activities: "",

}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initalFormData)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const type = event.target.type;
    const name = event.target.name;
    const checked = event.target.checked;
    
    console.log("handleChange", name, type, value, checked)

    const newFormState = {...formState}

    if (name === "review") {
      newFormState.review = value
    }

    if (name === "username") {
      newFormState.username = value
    }

    if (name === "email") {
      newFormState.email = value
    }

    if (name === "color") {
      newFormState.colourRating = value
    }

    setFormState(newFormState)

  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
      </section>
      <section className="main__form">
        <form class="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input onChange={handleChange} id="color-one" type="radio" name="color" value="1" />
                <label for="color-one">1</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-two" type="radio" name="color" value="2" />
                <label for="color-two">2</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-three" type="radio" name="color" value="3" />
                <label for="color-three">3</label>
              </li>
              <li>
                <input onChange={handleChange} id="color-four" type="radio" name="color" value="4" />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" />I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea onChange={handleChange} name="review" cols="30" rows="10"></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input onChange={handleChange} type="text" name="username" value={formState.username} />
          </label>
          <label>
            Leave us your email pretty please??
            <input onChange={handleChange} type="email" name="email" value={formState.email} />
          </label>
          <input onClick={handleSubmit} class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
