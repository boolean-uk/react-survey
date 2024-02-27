import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [form, setForm] = useState({
    color: "",
    spend_time: [],
    review: "",
    email: "",
    username: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm(values => ({ ...values, [name]: value }))
  }

  const handleChangeCheck = (event) => {
    const isChecked = event.target.checked;
    if(isChecked){
      setForm({spend_time: [...form.spend_time, event.target.value]})
    }else {
      const index = form.spend_time.indexOf(event.target.value)
      form.spend_time.splice(index, 1)
      setForm({spend_time: form.spend_time})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} /><label
                  htmlFor="color-one"
                >1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} /><label
                  htmlFor="color-two"
                >2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} /><label
                  htmlFor="color-three"
                >3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} /><label
                  htmlFor="color-four"
                >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                ><input
                    name="spend_time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChangeCheck}
                  />Swimming</label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend_time"  
                    type="checkbox" 
                    value="bathing" 
                    onChange={handleChangeCheck} />Bathing</label>
              </li>
              <li>
                <label
                ><input
                    name="spend_time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChangeCheck}
                  />Chatting</label>
              </li>
              <li>
                <label
                ><input name="spend_time" type="checkbox" value="noTime" onChange={handleChangeCheck}/>I don't like to
                  spend time with it</label>
              </li>
            </ul>

          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={form.review}
              onChange={handleChange}
            ></textarea></label>
          <label
          >Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={form.email} 
              onChange={handleChange}/>
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>

      </section>
    </main>
  );
}

export default Survey;
