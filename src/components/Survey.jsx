import { useEffect, useState } from "react";
import Form from "./form";
import AnswersList from "./AnswersList";

const INITIAL_ANSWERS_LIST = [
  {username: "", email: "ray97@mail.com", colourRating: 1, timeSpent: ["noTime"], review: "what a joke"},
  {username: "", email: "sophie89@mail.com", colourRating: 1, timeSpent: ["noTime"], review: "how do i even use this thing?"}
]

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answerList, setAnswerList] = useState(INITIAL_ANSWERS_LIST)

  const addNewAnswer = (answer) => {
    setAnswerList([...answerList, answer])
  }

  useEffect(() => {
    console.log("Answers:", answerList) 
  }, [answerList])

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <AnswersList answersList={answerList}/>
      </section>
      <section className="survey__form">
        <Form submit={addNewAnswer}/>
      </section>
    </main>
  );
}

export default Survey;
