import { useState } from "react"

import Form from "./Form"
import AnswersList from "./AnswersList"

const SUBMISSION_DATABASE = []

const DEFAULT_FORM = {
  color: 0,
  spend_time: {
    swimming: false,
    bathing: false,
    chatting: false,
    no_time: false
  },
  review: '',
  username: '',
  email: ''
}

function getDeepClone(obj) { // there is a more dynamic way in doing this... but it is what it is...
  const OBJ = {...obj}
  OBJ.spend_time = {...obj.spend_time}
  return OBJ
}

function Survey() {
  const [open,] = useState(false) //Ignore this state
  const [form, setForm] = useState(DEFAULT_FORM)

  const submit = (event) => {
    event.preventDefault()

    const _foundMatch = SUBMISSION_DATABASE.findIndex((elm) => { return elm.uuid === form.uuid })

    if (_foundMatch === -1)
      SUBMISSION_DATABASE.push(getDeepClone({...form, uuid: crypto.randomUUID()}))
    else
      SUBMISSION_DATABASE[_foundMatch] = getDeepClone(form)
    setForm(getDeepClone(DEFAULT_FORM))
  }

  const eventCallback = (event) => {
    const _targetField = event.target.name
    const _updatedForm = {...form}
    _updatedForm.spend_time = {...form.spend_time}

    if (typeof(_updatedForm[_targetField]) === 'object') // a very cheap way in making simple code (if you want to replicate this, make sure values and names are set accordingly)
      _updatedForm[_targetField][event.target.value] = event.target.checked
    else
      _updatedForm[_targetField] = event.target.value

    setForm(_updatedForm)
  }

  const editCallback = (event) => {
    for (const submission of SUBMISSION_DATABASE) {
      if (submission.uuid === event.target.value) {
        setForm(getDeepClone(submission))
        break
      }
    }
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList forms={SUBMISSION_DATABASE} editCallback={editCallback} />
      </section>
      <section className="survey__form">
        <Form submit={submit} eventCallback={eventCallback} form={form} />
      </section>
    </main>
  );
}

export default Survey;
