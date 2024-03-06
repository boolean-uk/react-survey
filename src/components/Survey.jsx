import { useState } from "react";
import AnswersList from "./AnswersList";


const initialFormData = {
  color: "",
  swimming: false,
  bathing: false,
  chatting: false,
  noTime: false,
  review: "",
  username: "",
  email: "",
};
function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const[answers, setAnswers] = useState(initialFormData)
  const[formData, setFormData] = useState(initialFormData)

  console.log(answers)

  

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target
    setFormData({ ...formData, [name]: checked })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setFormData(initialFormData)
    document.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.checked = false
    })
    document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.checked = false
    })
    document.querySelector('textarea[name="review"]').value = '' 

  }
  



  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>

        {/* answers should go here */}
        
        {/* <AnswersList /> */}

      </section>
      <section className="survey__form">
        
        {/* a form should be here */}
        <form className="form" onSubmit={handleFormSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/*<!-- Radio inputs go here -->*/}
              <ul>
                <li>
                  <input id="color-one" type="radio" name="color" value="1" onChange={handleFormChange}/>
                  <label for="color-one">
                    1
                  </label>
                </li>
                <li>
                  <input id="color-two" type="radio" name="color" value="2" onChange={handleFormChange}/>
                  <label for="color-two">
                    2
                  </label>
                </li>
                <li>
                  <input 
                    id="color-three" 
                    type="radio" 
                    name="color" 
                    value="3" 
                    onChange={handleFormChange}/>
                  <label for="color-three">
                    3
                  </label>
                </li>
                <li>
                  <input id="color-four" type="radio" name="color" value="4" onChange={handleFormChange}/>
                  <label
                    for="color-four">
                      4
                  </label>
                </li>
              </ul>


          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            
            {/*<!-- checkboxes go here -->*/}
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
                I don't like to spend time with it
                </label>
              </li>
            </ul>

          </div>
          <label
            >What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              onChange={handleFormChange}

            >
            </textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormChange} />
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
          <input className="form__submit" 
          type="submit" 
          value="Submit Survey!" />
        </form>
        
        
        
        </section>
    </main>
  )
}

export default Survey;

