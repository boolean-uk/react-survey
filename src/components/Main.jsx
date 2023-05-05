import { useState } from "react";
import { Form } from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const initialFormState = {
    duckRating: null,
    spendTime: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: "",
    username: "",
    email: "",
  };

  const [formState, setFormState] = useState(initialFormState);

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
          initialFormState={initialFormState}
        />
      </section>
    </main>
  );
}

export default Main;
