import { useState } from "react";
import Form from "./form";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
      </section>
      <section className="survey__form">
        <Form />
      </section>
    </main>
  );
}

export default Survey;
