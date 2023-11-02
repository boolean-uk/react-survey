import { useState } from "react";
import SurveyItem from "./SurveyItem";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const answerObj = {
    username: "Test",
    colour: "ColorTest",
    timeSpent: "spendTimeTest",
    review: "NOPE"
  }
  const [answers, setAnswers] = useState(answerObj)


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersItem answerItem={answers}/>
      </section>
      <section className="survey__form">
        <SurveyItem />  
      </section>
    </main>
  );
}

export default Survey;