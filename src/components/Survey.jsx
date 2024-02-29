import { useEffect, useState } from "react";
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


const getForm = async () => {
  const request = {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(answersList)
  }
  await fetch("http://localhost:3000/forms", request)
}

const postForm = async (answersList) => {

  const request = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(answersList)
  }
  await fetch("http://localhost:3000/forms", request)
}


const putForm = async (id, answersList) => {
  const request = {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(answersList)
  }
  await fetch(`http://localhost:3000/forms/${id}`, request)
}

const deleteForm = async(id) => {
  const request = {
    method: "DELETE",
  }
  await fetch(`http://localhost:3000/forms/${id}`, request)

}


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {
          <AnswersList answersList={answersList} setAnswersList={setAnswersList} setState={setState}/>
        }
      </section>
      <section className="survey__form">{
        <Form setAnswersList= {setAnswersList} answersList={answersList} state={state} setState={setState} postForm={postForm}/>
      }</section>
    </main>
  );
}

export default Survey;
