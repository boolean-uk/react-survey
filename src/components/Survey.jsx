import { useState, useEffect } from "react";
import AnswersList from './AnswersList/AnswersList.jsx'
import NewAnswer from "./NewAnswer.jsx"
import { defaultObject } from "../constants.js"

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedForms, setSubmittedForms] = useState([])
  const [editEntry, setEditEntry] = useState(undefined)

  useEffect(() => {
    retrieveSubmittedForms()
  }, [])

  /**
   * Retrieve (GET) the forms located within the json-server in the  db.json database.
   */
  const retrieveSubmittedForms = async () => {
    await fetch("http://localhost:3000/forms")
      .then((res) =>  res.json())
      .then((objects) => setSubmittedForms([...objects]))
  }

  /**
   * Create/POST a new form object into the json-server db.json database.
   * @param {Object} form The form object to be inserted into the database
   */
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

  /**
   * 
   * @param {string} id The ID of the form element to update
   * @param {Object} form The form object to be updated in the database
   */
  const putForm = async (id, form) => {
    const request = {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(form)
    }
    await fetch(`http://localhost:3000/forms/${id}`, request)
  }

  const deleteForm = async(id) => {
    const request = {
      method: "DELETE",
    }
    await fetch(`http://localhost:3000/forms/${id}`, request)
    await retrieveSubmittedForms()
  }

  const addData = async (dataObject) => {
    if (editEntry !== undefined) {
      await putForm(editEntry.id, dataObject)
      await retrieveSubmittedForms()
      setEditEntry(undefined)
    } else {
      await postForm(dataObject)
      await retrieveSubmittedForms()
    }
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={submittedForms} deleteEntry={deleteForm} editEntry={setEditEntry}/>
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
