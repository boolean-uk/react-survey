import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState({
    color: 0,
    spendTime: [],
    review: '',
    username: '',
    email: ''
  })

  const [answersList,setAnswersList] = useState([])

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData,[name]: value})
    console.log(formData)
  }

  const handleSpendTime = (event) => {
    const { value, checked, name } = event.target
    if (checked) {
      setFormData({...formData,[name]: formData.spendTime.push(value)})
    } else {
      setFormData({...formData,[name]: formData.spendTime.splice(formData.spendTime.indexOf(value),1)})
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setAnswersList([...answersList,formData])
    setFormData({color: 0,
      spendTime: [],
      review: '',
      username: '',
      email: ''})
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} setFormData={setFormData} setAnswersList={setAnswersList}/>
      </section>
      <section className="main__form">{
        <Form formData={formData} handleChange={handleChange} handleSpendTime={handleSpendTime} handleSubmit={handleSubmit}/>
      }</section>
    </main>
  );
}

export default Main;
