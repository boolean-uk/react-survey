import { useEffect, useState } from "react";
import AnswersItem from "./AnswersItem";
import { getAnswers, patchAnswer, postAnswer, deleteAnswer } from "../http/requests";

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  const question1and2Options = ['It´s yellow!', 'It squeeks', 'It has a logo', 'It´s big'];
  const question345Options = [1,2,3,4];
  const defaultObject = {
    id: null,
    q1: [],
    q2: [],
    q3: '',
    q4: '',
    q5: '',
    q6: ''
  }
  const [answer, setAnswer] = useState(defaultObject);
  const [submittedForms, setSubmittedForms] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true)

  const post = async (body) => {
    postAnswer(body);
    setAnswer(defaultObject)
    setShouldFetch(true)
  }

  const patch = async (id,body) => {
    patchAnswer(id, body)
    setAnswer(defaultObject)
    setShouldFetch(true)
  }

  useEffect(() => {
    if (shouldFetch){
      getAnswers().then(setSubmittedForms)
      setShouldFetch(false)
    }
  },[shouldFetch])

  const submitForm = (event) => {
    event.preventDefault();
    if (answer.id !== null){
      patch(answer.id, answer)
    } else {
      // answer.id is null so creating a string id
      answer.id = submittedForms.length.toString()
      post(answer)
    }
  }

  const handleInputChange = (event, question) => {
    const { name, checked, type, value } = event.target;
    // handle checkbox
    if (type === "checkbox") {
      setAnswer((prevAnswer) => {
        const updatedQuestion = new Set(prevAnswer[question]);
        if (checked) {
          updatedQuestion.add(name);
        } else {
          updatedQuestion.delete(name);
        }
        return { ...prevAnswer, [question]: Array.from(updatedQuestion) };
      });
    }
    // different types overview
    if (type === "radio" || type === "textarea" || type === "text" || type === "email") {
      setAnswer((prevAnswer) => ({ ...prevAnswer, [question]: value }));
    }
  }

  const onEditAnswer = (editedAnswer) => {
    setAnswer(editedAnswer)
  }

  const removeAnswer = (removedAnswer) => {
    deleteAnswer(removedAnswer.id)
  } 

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {submittedForms.map((a, index) => (
          <AnswersItem key={index} answerItem={a} onEditAnswer={onEditAnswer} removeAnswer={removeAnswer} />
        ))}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group input">
            <h3>What would you say are the best features of your rubberduck?</h3>
            {question1and2Options.map((val, index) => (
              <label key={index}>
                {val}
                <input type="checkbox" name={val} id={index} onChange={(e) => handleInputChange(e, 'q1')} checked={answer.q1.includes(val)} />
              </label>
            ))}
          </div>
          <div className="form__group">
            <h3>What would you say are the worst bits of your rubberduck?</h3>
            {question1and2Options.map((val, index) => (
              <label key={index}>
                {val}
                <input type="checkbox" name={val} id={val} onChange={(e) => handleInputChange(e, 'q2')} checked={answer.q2.includes(val)} />
              </label>
            ))}
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {question345Options.map((val, index) => (
              <label key={index} className="">
                {val}
                <input type="radio" name="q3" id={index} value={val} onChange={(e) => handleInputChange(e, 'q3')} checked={answer.q3 === val} />
              </label>
            ))}
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="q4" cols={30} rows={10} onChange={(e) => handleInputChange(e, 'q4')} value={answer.q4}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" placeholder="eg. Donald Duck" name="q5" onChange={(e) => handleInputChange(e, 'q5')} value={answer.q5} />
          </label>
          <label>Leave us your email pretty please??
            <input type="email" name="q6" placeholder="eg. donald@duckduck.go" onChange={(e) => handleInputChange(e, 'q6')} value={answer.q6} required />
          </label>
          <input className="form_submit" type="submit" value={"Submit survey!"} />
        </form>
      </section>
    </main>
  );
}

export default Survey;
