import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state 
  const [edit, setEdit] = useState({
    index: 0,
    on: false
  })   
  const [form, setForm] = useState({
    color: "1",
    "spend-time": [],
    review: "",
    username: "",
    email: ""
  })
  const [answers, setAnswers] = useState([])

  const handleSubmit = (event) =>{
    event.preventDefault()
    if (edit.on){
      let answersCopy = [...answers].splice(edit.index,1,form)
      setAnswers(answersCopy)
      setEdit({
        index: null,
        on: false
      })
    }
    else{
      setAnswers([...answers,form])
    }
    clearForm()
  }

  const editForm = (index) => {
    setEdit({
      index: index,
      on: true
    })
    setForm(answers[index])
  }

  const clearForm = () =>{
    const reset = Object.keys(form).reduce((acc, key) => {      
      acc[key] = key === "spend-time" ? [] : ""
      return acc
    }, {})
    setForm(reset)    
  }

  const handleChangeForm = (event) =>{
    const {name, value} = event.target
    let copy = []
    if (name === "spend-time"){
      copy = form["spend-time"].includes(value) ? form["spend-time"].filter(x => x !== value) : [...form["spend-time"], value]  
    }       
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "spend-time" ? copy : value
    }))
    
  } 
  
  const radios = []
  for (let i = 1;  i <= 4; i++){
    const radio = (     
      <li>
        <input
        id={`color${i}`}
        type="radio"
        name="color"
        value={i.toString()}
        onChange={handleChangeForm}
        checked={form.color === i.toString()}   
        />        
        <label htmlFor={`color${i}`}>
        {i}
        </label>  
      </li>
    )
    radios.push(radio)
  }    
  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>        
          {answers.map((a, index) => (
            <div className="answer" key={index}>
              <ul>
                <li>
                  <p><b>How do you rate your rubber duck colour?</b></p>
                  <p>{a.color}</p>
                </li>
                <li>
                  <p><b>How do you like to spend time with your rubber duck?</b></p>
                  <p>{a["spend-time"]}</p>
                </li>
                <li>
                  <p><b>What else have you got to say about your rubber duck?</b></p>
                  <p>{a.review}</p>
                </li>
              </ul>
              <button onClick={() => editForm(index)} >Edit</button>
            </div>
          ))}        
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3> 
            <ul>
              {radios}
            </ul>                                            
          </div>
          <div>
            <h3>How do you like to spend time with your rubber duck</h3>         
            <ul>
            <li>
              <label>
                <input
                name="spend-time" 
                type="checkbox" 
                value="swimming"
                checked={form["spend-time"].includes("swimming")} 
                onChange={handleChangeForm} />
                Swimming
              </label>
            </li>  
            <li>
              <label>
                <input
                name="spend-time"
                type="checkbox"
                value="bathing" 
                checked={form["spend-time"].includes("bathing")} 
                onChange={handleChangeForm} />                
                Bathing
              </label>
            </li>
            
            <li>
              <label>
                <input
                name="spend-time" 
                type="checkbox" 
                value="chatting"
                checked={form["spend-time"].includes("chatting")} 
                onChange={handleChangeForm} />                
                Chatting
              </label>
            </li>
            
            <li>
              <label>
                <input
                name="spend-time"
                type="checkbox"
                value="noTime"
                checked={form["spend-time"].includes("noTime")} 
                onChange={handleChangeForm}
                 />                
                I don't like to spend time with it
              </label>
            </li>                   
            </ul>                
          </div>

          <label>What else have you got to say about your rubber duck?
            <textarea
            name="review"
            cols="30"
            rows="10"
            value={form.review}
            onChange={handleChangeForm}>
            </textarea>
          </label>

          <label>Put your name here (if you feel like it):
            <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChangeForm}
            />
            </label>

            <label>Leave us your email pretty please??
              <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChangeForm}  
              />
            </label>
              <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
        <AnswersList answersList={[form]} />
      </section>
    </main>
  );
}

export default Survey;