import { useEffect, useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";
function Survey() {
  const open = false;
  const [edit, setEdit] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState({
    color: null,
    timeSpent: {
      swimming: false,
      bathing: false,
      chatting: false,
      noTime: false,
    },
    review: "",
    username: "",
    email: "",
  });
  function addAnswers(newAnswer) {
    if (edit === -1) {
      setAnswers([...answers, newAnswer]);
    }
    else {
      setAnswer([...answers,answers[edit]=newAnswer])
    }
    setEdit(-1)
  }
  useEffect(() => {}, [answers]);
  useEffect(() => {
  }, [answer]);
  function editForm(value) {
    setEdit(value)
    setAnswer(answers[value]);
  }
  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {<AnswersList answersList={answers} onEdit={editForm} />}
      </section>
      <section className="survey__form">
        {<Form submit={addAnswers} answers={answer} setAnswers={setAnswer} />}
      </section>
    </main>
  );
}

export default Survey;
