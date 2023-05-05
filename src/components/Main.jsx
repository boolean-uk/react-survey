import { useState } from "react";
import AnswersList from "./AnswersList";

const initialFormData = {
  id: null,
  color: '',
  timeSpent: [],
  review: '',
  username: '',
  email: ''
}

let id = 1

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

    const [formData, setFormData] = useState(initialFormData)
    const [answers, setAnswers] = useState([])
    // CHANGE THIS BACK TO BLANK AT THE END
    // const [answers, setAnswers] = useState(
    //   [{
    //     id: 1,
    //     color: '1',
    //     timeSpent: ["swimming","noTime"],
    //     review: '123',
    //     username: '456',
    //     email: '789@gmail.com'
    //   }]
    // )

    const handleChange = (event) => {
      const { name, value } = event.target
      setFormData({...formData, [name]: value})
    }

    const handleChecked = (event) => {
      const { value, checked, name } = event.target
      let newSpendTime
      if (checked) {
        newSpendTime = [...formData[name], value]
      } else {
        newSpendTime = formData[name].filter(item => item !== value)
      }
      setFormData({...formData, name: newSpendTime})      
    }

    const handleSubmit = (event) => {
      console.log(`submit`)
      event.preventDefault()
      formData.id = id
      setAnswers([...answers, formData])
      id++
      setFormData(initialFormData)
      
      document.querySelectorAll('input[type="checkbox"]').forEach(input => {
        input.checked = false;
        input.value = ""
      });
    }

    const logAnswers = () => {
        console.log(`H2 Clicked`)
        console.log('answers',answers)
        console.log('initialFormData',initialFormData)
      
    }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2 onClick={logAnswers} >Answers list</h2>
        <AnswersList answers={answers} />
      </section>
      <section className="main__form">
      <form className="form" onSubmit={handleSubmit} >
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} checked={formData.color === "1"} /><label
                htmlFor="color-one"
                >1</label
              >
            </li>
            <li>
              <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} checked={formData.color === "2"} /><label
                htmlFor="color-two"
                >2</label
              >
            </li>
            <li>
              <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} checked={formData.color === "3"} /><label
                htmlFor="color-three"
                >3</label
              >
            </li>
            <li>
              <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} checked={formData.color === "4"} /><label
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
                  name="timeSpent" type="checkbox" value="swimming" onChange={handleChecked}
                />Swimming</label
              >
            </li>
            <li>
              <label
                ><input name="timeSpent" type="checkbox" value="bathing" onChange={handleChecked} />Bathing</label
              >
            </li>
            <li>
              <label
                ><input
                  name="timeSpent" type="checkbox" value="chatting" onChange={handleChecked}
                />Chatting</label
              >
            </li>
            <li>
              <label
                ><input name="timeSpent" type="checkbox" value="noTime" onChange={handleChecked} />I don't like to
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
            value={formData.review}
          ></textarea></label
        ><label
          >Put your name here (if you feel like it):<input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username} /></label
        ><label
          >Leave us your email pretty please??<input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email} /></label
        ><input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      </section>
    </main>
  );
}

export default Main;
