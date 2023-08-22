import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {

  const { answersList,setAnswersList, setFormData } = props;

  const handleEdit = (event) =>{
    event.preventDefault()
    const targetForm = answersList[event.target[0].value]
    setFormData(targetForm)
    setAnswersList(answersList.filter((item) => item !== targetForm))
    console.log(event.target[0].value)
  }

  const handleDelete = (event) =>{
    event.preventDefault()
    const targetForm = answersList[event.target[0].value]
    setAnswersList(answersList.filter((item) => item !== targetForm))
    console.log(event.target[0].value)
  }
  

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <div>
        <AnswersItem answerItem={answerItem} key={i} index={i}/>
        <div className="form-buttons">
        <form onSubmit={handleEdit} >
          <button type='submit' value={i} className="form-edit">Edit</button>
        </form>
        <form onSubmit={handleDelete}>
          <button type='submit' value={i} className="form-delete">Delete</button>
        </form>
        </div>
        </div>
      ))}
    </ul>
  );
}
