import { useEffect, useState } from "react";
import { SurveyForm } from './Form/SurveyForm'
import AnswersList from "./Answere/AnswersList";

const emptyForm = {
  id: 0,
  colorRating: 0,
  spendTime: [],
  text: '',
  name: '',
  email: ''
}

let nextAnswerId = 1;

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(emptyForm)
  const [answers, setAnswers] = useState([])
  
  const HandleSubmit = (e) => {
    e.preventDefault();

    const formIndex = answers.findIndex(answer => answer.id === form.id);

    if (formIndex !== -1) {
      setAnswers(prevAnswers => {
        return prevAnswers.map((answer, index) => {
          if (index === formIndex)
            return form;
          else
            return answer;
        });
      });
    }
    else {
      const formWithId = {...form, id: nextAnswerId++}
      setAnswers(prevAnswers => [formWithId, ...prevAnswers]);
    }

    setForm(emptyForm);
  }

  useEffect(() => {
    console.log("Answers updated:", answers);
  }, [answers]);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <AnswersList setForm={setForm} answersList={answers} highlightedItemId={form.id} />
      </section>
      <section className="survey__form">
        <SurveyForm form={form} setForm={setForm} HandleSubmit={HandleSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
