import { useState } from "react";
import Form from "./Form.jsx";
import AnswersList from "./AnswersList.jsx";


const handleChange = (x, setter) => {
  const { value, type, checked } = x.target;

    if (type === 'checkbox') {
      setter(y => {
        if (checked) {
          console.log([...y, value])
          return [...y, value]
        } else {
          console.log(y.filter(y => y !== value))
          return y.filter(y => y !== value)
        }
      });
    } else {
      setter(value);
    }
  console.log(value)
}

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [colour, setColour] = useState(1);
  const [timeSpent, setTimeSpent] = useState([]);
  const [review, setReview] = useState('');
  const [answersList, setAnswersList] = useState([]);

  function submitForm(e){
    e.preventDefault();
    let tempUsername = username
    if(email !== ''){
      tempUsername = `${username} (${email})`
    }
    const answersItem = {
      username: tempUsername,
      colour: parseInt(colour),
      timeSpent: timeSpent,
      review: review
    }
    setAnswersList([
      ...answersList, answersItem
    ])
    console.log([...answersList, answersItem])
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList = {answersList} />
      </section>
      <section className="survey__form">{<Form 
      handleChange = {handleChange} 
      username =  {username} 
      setUsername = {setUsername}
      email = {email}
      setEmail = {setEmail}
      colour = {parseInt(colour)}
      setColour = {setColour}
      timeSpent = {timeSpent}
      setTimeSpent = {setTimeSpent}
      review = {review}
      setReview = {setReview}
      submitForm = {submitForm}
      />}</section>
    </main>
  );
}

export default Survey;
