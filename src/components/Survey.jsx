import { useState } from "react";
import SurveyItem from "./SurveyItem";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState()

  const answerObj = {
    username: "Test",
    colour: undefined,
    timeSpent: "",
    review: undefined
  }
  
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersItem answerItem={answerObj}/>
      </section>
      <section className="survey__form">
        <SurveyItem />  
      </section>
    </main>
  );
}

export default Survey;