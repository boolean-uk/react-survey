import { useState } from "react";
import SurveyItem from "./SurveyItem";
import AnswersItem from "./AnswersItem";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const answerObj = {
    username: "",
    colour: "",
    consistency: "",
    logo: "",
    timeSpent: "",
    review: ""
  }

  const [answers, setAnswers] = useState(answerObj)
  console.log(answers)

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersItem answerItem={answers}/>
      </section>
      <section className="survey__form">
        <SurveyItem answerItem={answers} updateAnswers={setAnswers} />  
      </section>
    </main>
  );
}

export default Survey;