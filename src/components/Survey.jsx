import { useState } from "react";
import FormComponent from "./Survey/Form";
import AnswersListComponent from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [surveys, setSurveys] = useState([])
  const [survey, setSurvey] = useState({
    key: 0,
    name: "",
    email: "",
    colorRating: 0,
    spendingTime: [],
    comment: "",
  })
  


  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersListComponent surveys={surveys} setSurvey={setSurvey}/>
      </section>
      <section className="survey__form">
        <FormComponent surveys={surveys} setSurveys={setSurveys} survey={survey} setSurvey={setSurvey} />
      </section>
    </main>
  );
}

export default Survey;
