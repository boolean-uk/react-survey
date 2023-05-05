import { useState } from "react";

const initialFormData = {
  color: '',
  "spend-time": [],
  review: '',
  username: '',
  email: ''
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData({...formData, [name]: value})
    }

    const handleChecked = (event) => {
      const { value, checked } = event.target
      let newSpendTime
      if (checked) {
        newSpendTime = [...formData["spend-time"], value]
      } else {
        newSpendTime = formData["spend-time"].filter(item => item !== value)
      }
      setFormData({...formData, "spend-time": newSpendTime})      
    }

    const handleSubmit = (event) => {
      console.log(`submit`)
      event.preventDefault()
      setFormData(initialFormData)
      console.log(initialFormData)
      
      document.querySelectorAll('input[type="radio"], input[type="checkbox"], input[type="text"], input[type="email"], textarea').forEach(input => {
        input.checked = false;
        input.value = ""
      });

    }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
      <form className="form" onSubmit={handleSubmit} >
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} /><label
                htmlFor="color-one"
                >1</label
              >
            </li>
            <li>
              <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} /><label
                htmlFor="color-two"
                >2</label
              >
            </li>
            <li>
              <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} /><label
                htmlFor="color-three"
                >3</label
              >
            </li>
            <li>
              <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} /><label
                htmlFor="color-four"
                >4</label
              >
            </li>
          </ul>
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck</h3>
          <ul>
            <li>
              <label
                ><input
                  name="spend-time" type="checkbox" value="swimming" onChange={handleChecked}
                />Swimming</label
              >
            </li>
            <li>
              <label
                ><input name="spend-time" type="checkbox" value="bathing" onChange={handleChecked} />Bathing</label
              >
            </li>
            <li>
              <label
                ><input
                  name="spend-time" type="checkbox" value="chatting" onChange={handleChecked}
                />Chatting</label
              >
            </li>
            <li>
              <label
                ><input name="spend-time" type="checkbox" value="noTime" onChange={handleChecked} />I don't like to
                spend time with it</label
              >
            </li>
          </ul>
        </div>
        <label
          >What else have you got to say about your rubber duck?<textarea
            name="review"
            cols="30"
            rows="10"
            onChange={handleChange} 
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            onChange={handleChange} /></label
        ><label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            onChange={handleChange} /></label
        ><input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      </section>
    </main>
  );
}

export default Main;
