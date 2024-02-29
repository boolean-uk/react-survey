import { useState } from "react";
import AnswersList from "./AnswersList";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])
  const [formData, setFormData] = useState({
        color: "",
        timeSpent: {
              swimming: false,
              bathing: false,
              chatting: false,
              noTime: false
            },
            review: "",
            username: "",
            email: "",})


            const handleChange = (event) => {
              const { name, value, checked, type} = event.target;
            
              if (name === "timeSpent") {
                setFormData((prevData) => ({
                  ...prevData,
                  timeSpent: {
                    ...prevData.timeSpent,
                    [value]: checked,
                  },
                }));
              } else {
                setFormData((prevData) => ({
                  ...prevData,
                  [name]: value,
                }));
              }
            };
            
const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Submitted:', formData)
    setAnswers([...answers, formData])  
    event.target.reset()
}

const handleEdit = (answers) => {
  setFormData(answers)
}

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} onEdit={handleEdit}/>
      </section>
      <section className="survey__form">
      <form className="form" onSubmit={handleSubmit}>
                <h2>Tell us what you think about your rubber duck!</h2>
                <div className="form__group radio">
                    <h3>How do you rate your rubber duck colour?</h3>
                    <ul>
<li>
    <input id="color-one" type="radio" name="color" value="1" onChange={handleChange}/><label
      htmlFor="color-one"
      >1</label
    >
  </li>
  <li>
    <input id="color-two" type="radio" name="color" value="2" onChange={handleChange}/><label
      htmlFor="color-two"
      >2</label
    >
  </li>
  <li>
    <input id="color-three" type="radio" name="color" value="3" onChange={handleChange}/><label
      htmlFor="color-three"
      >3</label
    >
  </li>
  <li>
    <input id="color-four" type="radio" name="color" value="4" onChange={handleChange}/><label
      htmlFor="color-four"
      >4</label
    >
  </li>
</ul>

                </div>
                <div className="form__group">
                    <h3>How do you like to spend time with your rubber duck</h3>
                    <ul>
  <li key="swimming">
    <label
      ><input
        name="timeSpent"
        type="checkbox"
        value="swimming"
        checked={formData.timeSpent["swimming"]}
        onChange={handleChange}
      />Swimming
      </label>
  </li>
  <li key="bathing">
    <label
      ><input 
      name="timeSpent" 
      type="checkbox" 
      value="bathing" 
      checked={formData.timeSpent["bathing"]}
      onChange={handleChange}
      />Bathing
      </label>
  </li>
  <li key="chatting">
    <label
      ><input
        name="timeSpent"
        type="checkbox"
        value="chatting"
        onChange={handleChange}
        checked={formData.timeSpent["chatting"]}
      />Chatting
      </label>
  </li>
  <li key="noTime">
    <label
      ><input
       name="timeSpent" 
       type="checkbox" 
       value="noTime" 
       checked={formData.timeSpent["noTime"]}
       onChange={handleChange}
       />I don't like to spend time with it
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
                        onChange={handleChange}
                    ></textarea>
                </label>
                <label>
                    Put your name here (if you feel like it):
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                     
                    />
                </label>
                <label>
                    Leave us your email pretty please??
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                </label>
                <input className="form__submit" type="submit" value="Submit Survey!" />
            </form>
      </section>
    </main>
  );
}

export default Survey;
