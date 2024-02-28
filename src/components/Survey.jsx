import { useState } from "react";
import AnswersList from './AnswersList/AnswersList.jsx'
import NewAnswer from "./NewAnswer.jsx"
import { defaultObject } from "../constants.js";

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedForms, setSubmittedForms] = useState([])
  const [editEntry, setEditEntry] = useState(undefined)

  const addData = (dataObject) => {
    if (editEntry !== undefined) {
      setSubmittedForms((submittedForms) => {
        const formsUpdated = [...submittedForms]
        formsUpdated[formsUpdated.indexOf(editEntry)] = dataObject
        return formsUpdated
      })
      setEditEntry(undefined)
    } else {
      setSubmittedForms([dataObject, ...submittedForms])
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
