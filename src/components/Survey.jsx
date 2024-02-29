import { useState } from "react";
import Form from "./form/form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  //State of current from and too be edited
  const [state, setState] = useState(
    {
        id: 0,
        color: "",
        timeSpent: {
            bathing: false,
            swimming: false,
            chatting: false,
            noTime: false,    
        },
        username: "",
        review: "",
        email: "",
    }
);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {
          <AnswersList answersList={answersList} setState={setState}/>
        }
      </section>
      <section className="survey__form">{
        <Form setAnswersList= {setAnswersList} answersList={answersList} state={state} setState={setState}/>
      }</section>
    </main>
  );
}

export default Survey;
