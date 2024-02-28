import { useEffect, useState } from "react";
import { SurveyForm } from './Form/SurveyForm'
import AnswersList from "./Answere/AnswersList";

const emptyForm = {
  colorRating: 0,
  spendTime: [],
  text: '',
  name: '',
  email: ''
}

function Survey() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false); //Ignore this state
  const [form, setForm] = useState(emptyForm)
  const [answers, setAnswers] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/answers')
      .then(response => response.json())
      .then(data => setAnswers(data))
      .catch(error => console.error('Error fetching answers:', error));
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (form.id) {
      fetch(`http://localhost:3000/answers/${form.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      .then(response => response.json())
      .then(updatedAnswer => {
        setAnswers(prevAnswers => {
          return prevAnswers.map(answer => answer.id === updatedAnswer.id ? updatedAnswer : answer);
        });
      })
      .catch(error => console.error('Error updating answer:', error));
    } else {
      fetch('http://localhost:3000/answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      .then(response => response.json())
      .then(newAnswer => {
        setAnswers(prevAnswers => [newAnswer, ...prevAnswers]);
      })
      .catch(error => console.error('Error adding new answer:', error));
    }
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/answers/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setAnswers(prevAnswers => prevAnswers.filter(answer => answer.id !== id));
      }
    })
    .catch(error => console.error('Error deleting answer:', error));
  }

  useEffect(() => {
    setForm(emptyForm)
  }, [answers]);

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <AnswersList setForm={setForm} answersList={answers} highlightedItemId={form.id} handleDelete={handleDelete}/>
      </section>
      <section className="survey__form">
        <SurveyForm form={form} setForm={setForm} HandleSubmit={HandleSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
