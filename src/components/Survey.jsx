import FormComponent from "./FormComponent";
import AnswerListComponent from "./AnswersList";
import { useState } from "react";


function Survey() {
  const [open, SetOpen] = useState(false); //Ignore this state
  const [answerList, SetAnswersList] = useState([])
  const [survey, SetSurvey] = useState({timeSpent: []})



  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswerListComponent answerList={answerList}/>
      </section>
      <section className="survey__form">
        <FormComponent survey={survey} SetSurvey={SetSurvey} answerList={answerList} SetAnswersList={SetAnswersList}/>
      </section>
    </main>
  )
}

export default Survey;
