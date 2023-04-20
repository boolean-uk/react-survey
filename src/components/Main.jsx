import { useState } from "react";

const initialFormData = {
  color : '',
  "spend-time": [],
  review: '',
  username: '',
  email: ''
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    const {name, type, value, checked} = event.target
    if (type === "checkbox") {
      const temp = [...formData["spend-time"]]
      formData["spend-time"] = temp
      if (checked) {
        formData["spend-time"].push(value)
        setFormData({...formData})
      } else {
        const filteredSpendTime = formData["spend-time"].filter(item => item !== value)
        formData["spend-time"] = [...filteredSpendTime]
        setFormData({...formData})
      }
    } else {
      setFormData({...formData, [name]: value})
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setFormData(initialFormData)
  }

  return (
    <main className="main">
      {console.log(formData)}
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={formData.color === "1"}/>
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={formData.color === "2"}/>
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={formData.color === "3"}/>
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={formData.color === "4"}/>
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming" onChange={handleChange} checked={formData["spend-time"].includes("swimming")}/>
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" onChange={handleChange} checked={formData["spend-time"].includes("bathing")}/>
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting" onChange={handleChange} checked={formData["spend-time"].includes("chatting")}/>
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" onChange={handleChange} checked={formData["spend-time"].includes("noTime")}/>I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleChange} value={formData.review}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" onChange={handleChange} value={formData.username}/>
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" onChange={handleChange} value={formData.email}/>
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!"/>
        </form>
      </section>
    </main>
  );
}

export default Main;
