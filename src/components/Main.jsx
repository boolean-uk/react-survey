import { useEffect, useRef, useState } from "react";
import AnswersList from '../components/AnswersList'
import axios from "axios";
import SurveyForm from "./SurveyForm";
function Main() {

  const initialData = {
    color: '1',
    timeSpent: [],
    review: '',
    username: '',
    email: ''
  }

  const [open, setOpen] = useState(false); //Ignore this state
  const [data, setData] = useState(initialData)

  const [answers, setAnswers] = useState([])

  const editIndex = useRef(-1)


  useEffect(()=>{
    axios.get('http://localhost:3030/answers').then((response) => setAnswers(response.data))
  }, [])

  const handleChange = (e) => {
    const { type, name, checked, value } = e.target
    if (type === 'checkbox') {

      let index = data.timeSpent.indexOf(value)
      let arr = [...data.timeSpent]
      if(index === -1 && checked) arr.push(value)
      else if(index !== -1 && !checked) arr.splice(index, 1)
      

      setData({ ...data, timeSpent: arr })
    } else {
      setData({ ...data, [name]: value })

    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editIndex.current !== -1) {

      const updatedAnswers = [...answers]

      updatedAnswers[editIndex.current] = data

      axios.patch(`http://localhost:3030/answers/${answers[editIndex.current].id}`, updatedAnswers[editIndex.current]).then(response => setAnswers(updatedAnswers))

    } else{
      axios.post('http://localhost:3030/answers', data).then(response => {
        if(response.status === 201)
          setAnswers([...answers, response.data])
      }) 
    }
     
    setData(initialData)
    editIndex.current = -1
  }

  const handleAnswerEdit = (answer) => {
    let index = answers.indexOf(answer)

    editIndex.current = index
    setData({...answers[index]})

  }

  const handleAnswerDelete = (answer) => {
    let index = answers.indexOf(answer)

    axios.delete(`http://localhost:3030/answers/${answers[index].id}`).then(response => {
      if(response.status === 200)
        setAnswers(answers.filter((answer, i) => i !== index))
    })
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>

        {answers.length > 0 && <AnswersList answersList={answers} handleEdit={handleAnswerEdit} handleDelete = {handleAnswerDelete}/>}
      </section>
      <section className="main__form">
        <SurveyForm data={data} handleChange={handleChange} handleSubmit={handleSubmit}/>
       
      </section>
    </main>
  );
}

export default Main;
