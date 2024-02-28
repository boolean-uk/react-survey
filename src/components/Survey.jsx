import { useState } from "react";

function Survey() {
  // state fields 
  const [open, setOpen] = useState(false); //Ignore this state
  
  const initialForm = {
    email: "",
    username: "",
    review: "",
    time: [],
    colour: ""
  }
  const [form, setForm] = useState(initialForm)

  // generic input handler for all except checkboxes
  const handleInput = (event) => {
    const inputForm = {...form}
    inputForm[event.target.name] = event.target.value
    setForm(inputForm)
  }

  const handleCheckboxInput = (event) => {
    let newTimeCheckboxes = []
    // if "I don't like spending time with it" selected, unselect other answers
    if (event.target.value === "noTime"){
      newTimeCheckboxes = [event.target.value]
    } else if (form[event.target.name].includes(event.target.value)) {
      newTimeCheckboxes = form[event.target.name].filter((i) => i !== event.target.value)
    } else {
      newTimeCheckboxes = [...form[event.target.name].filter((i) => i !== "noTime"), event.target.value]
    }
    setForm({...form, time: newTimeCheckboxes})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    //reset form
    setForm({...initialForm})
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
    <h2>Tell us what you think about your rubber duck!</h2>
    <div className="form__group radio">
      <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li><input onChange={handleInput}
          id="colour-one"
          type="radio"
          name="colour"
          value="1"
          />
          <label htmlFor="colour-one">1</label>
          </li>
          <li><input onChange={handleInput}
          id="colour-two"
          type="radio"
          name="colour"
          value="2"
          />
          <label htmlFor="colour-two">2</label>
          </li>
          <li><input onChange={handleInput}
          id="colour-three"
          type="radio"
          name="colour"
          value="3"
          />
          <label htmlFor="colour-three">3</label>
          </li>
          <li><input onChange={handleInput}
          id="colour-four"
          type="radio"
          name="colour"
          value="1"
          />
          <label htmlFor="colour-four">4</label>
          </li>
        </ul>
    </div>
    <div className="form__group">
      <h3>How do you like to spend time with your rubber duck</h3>
      <label>
        <input onChange={handleCheckboxInput}
          type="checkbox"
          name="time"
          value="swimming"
          checked={form["time"].includes("swimming") ? true : false}
          />Swimming
      </label>
      <label>
        <input onChange={handleCheckboxInput}
          type="checkbox"
          name="time"
          value="bathing"
          checked={form["time"].includes("bathing") ? true : false}
          />Bathing
      </label>
      <label>
        <input onChange={handleCheckboxInput}
          type="checkbox"
          name="time"
          value="chatting"
          checked={form["time"].includes("chatting") ? true : false}
          />Chatting
      </label>
      <label>
        <input onChange={handleCheckboxInput}
          type="checkbox"
          name="time"
          value="noTime"
          checked={form["time"].includes("noTime") ? true : false}
          // eslint-disable-next-line react/no-unescaped-entities
          />I don't like spending time with it
      </label>
    </div>
    <label
      >What else have you got to say about your rubber duck?<textarea
        name="review"
        cols="30"
        rows="10"
        placeholder="write your thoughts here"
        onChange={handleInput}
        value={form.review}
      ></textarea>
      </label>
      <label
      >Put your name here (if you feel like it):<input
        type="text"
        name="username"
        onChange={handleInput}
        value={form.username} /></label
    ><label
      >Leave us your email pretty please??<input
        type="email"
        name="email"
        onChange={handleInput}
        value={form.email} />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
  </form>
      </section>
    </main>
  );
}

export default Survey;
