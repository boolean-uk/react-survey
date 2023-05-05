import { useState } from "react";
import Form from './Form'

const initialFormData = {
  rating: '',
  swimming: false,
  bathing: false,
  chatting: false,
  noTime: false,
  review: '',
  username: '',
  email: '',
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formState, setFormState] = useState(initialFormData)

  const resetForm = () => {setFormState(initialFormData)}

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <Form 
          formState={formState}
          setFormState={setFormState}
          resetForm={resetForm}
          initialFormData={initialFormData}
        />
      </section>
    </main>
  );
}

export default Main;
