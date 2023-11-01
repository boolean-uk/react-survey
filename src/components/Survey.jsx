import { useState } from "react";

import Form from "./Form";

const INITIAL_STATE = {
  color: "",
  "spend-time": [],
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(INITIAL_STATE);
  const [formHistory, setFormHistory] = useState([]);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
      </section>
      <Form
        form={form}
        setForm={setForm}
        formHistory={formHistory}
        setFormHistory={setFormHistory}
        INITIAL_STATE={INITIAL_STATE}
      ></Form>
    </main>
  );
}

export default Survey;
