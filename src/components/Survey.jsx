import { useState, useEffect } from "react";
import AnswersList from './AnswersList/AnswersList.jsx'
import NewAnswer from "./NewAnswer.jsx"
import { defaultObject } from "../constants.js";

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedForms, setSubmittedForms] = useState([])
  const [editEntry, setEditEntry] = useState(undefined)

  useEffect(() => {
    retrieveSubmittedForms()
  }, [])

  const retrieveSubmittedForms = async () => {
    await fetch("http://localhost:3000/forms")
      .then((res) =>  res.json())
      .then((objects) => setSubmittedForms([...objects]))
  }

  const postForm = async (form) => {
    // Resource: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const request = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(form)
    }
    await fetch("http://localhost:3000/forms", request)
  }

  const addData = async (dataObject) => {
    if (editEntry !== undefined) {
      setSubmittedForms((submittedForms) => {
        const formsUpdated = [...submittedForms]
        formsUpdated[formsUpdated.indexOf(editEntry)] = dataObject
        return formsUpdated
      })
      setEditEntry(undefined)
    } else {
      await postForm(dataObject)
      retrieveSubmittedForms()
    }
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={submittedForms} editEntry={setEditEntry}/>
      </section>
      <section className="survey__form">
        {editEntry === undefined ? (
          <NewAnswer template={defaultObject} addData={addData}/>
        ) : (
          <NewAnswer template={editEntry} addData={addData}/>
        )}
      </section>
    </main>
  );
}

export default Survey;
