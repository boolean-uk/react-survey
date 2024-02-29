import { useState, useEffect } from "react";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import AnswersList from "./AnswersList";

function Survey() {

  const initialFormState = {
    rating: 0,
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false,
    feedback: "",
    name: "",
    email: ""
  }

  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialFormState)
  const [savedForms, setSavedForms] = useState([])
  const [currentId, setCurrentId] = useState(null)

  
  useEffect(()=> {
    console.log('USEEFFECT', savedForms)
  }, [savedForms])


  function submitFunc(event){
    event.preventDefault()

    console.log(formData)

    if(currentId !== null)
    {
      let tempForms = savedForms
      tempForms[currentId] = formData
      setSavedForms(tempForms)
      setCurrentId(null)
    }
    else
    {
      setSavedForms([...savedForms, formData]);
    }

    setFormData(initialFormState)

   
  }

  function loadForm(id)
  {
    //console.log(id)
    setFormData(savedForms[id])
    setCurrentId(id)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList savedForms={savedForms} loadForm={loadForm}/>
      </section>


      <section className="survey__form">
      <form className="form"  onSubmit={(event) => submitFunc(event)}>
        <h2>Tell us what you think about your rubber duck!</h2>
         <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
            <RadioGroup formData={formData} setFormData={setFormData}/>
         </div>
        <div className="form__group">
         <h3>How do you like to spend time with your rubber duck</h3>
          <CheckboxGroup formData={formData} setFormData={setFormData}/>
        </div>
        <label>What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
            onChange={(change) => setFormData({...formData, feedback: change.target.value})}
            value={formData.feedback}>
          </textarea>
        </label>
        <label>Put your name here (if you feel like it):
          <input
          type="text"
          name="username"
          onChange={(change) => setFormData({...formData, name: change.target.value})}
          value={formData.name} />
        </label>
        <label>Leave us your email pretty please??
          <input
          type="email"
          name="email"
          onChange={(change) => setFormData({...formData, email: change.target.value})}
          value={formData.email} />
        </label>
        <input className="form__submit" type="submit" value="Submit Survey!" />
      </form>
      
      </section>
    </main>
  );
}

export default Survey;
