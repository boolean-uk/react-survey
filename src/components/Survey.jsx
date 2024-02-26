import { useState } from "react";
import Form from "./Form";

const INITIAL_FORM_STATE = {
  color: "",
  timeSpent: [],
  review: "",
  name:"",
  email:""
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const reset = () =>{setFormData({...INITIAL_FORM_STATE})
    console.log("Resetting form")

  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <Form setFormData={setFormData} formData={formData} reset = {reset}/>
      </section>
    </main>
  );
}

export default Survey;
