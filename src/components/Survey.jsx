import { useEffect, useState } from "react";
import Form from "./form/form";
import AnswersList from "./AnswersList";
import axios from 'axios';

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  //State of current from and too be edited
  const [state, setState] = useState(
    {
        id: 0,
        color: "",
        timeSpent: {
            bathing: false,
            swimming: false,
            chatting: false,
            noTime: false,    
        },
        username: "",
        review: "",
        email: "",
    }
);

useEffect(() => {
  const fetchData = async () => {
    axios.get('http://localhost:3000/forms')
    .then(response => {
      // Handle the retrieved data
      console.log(response.data);
      setAnswersList(response.data)
     
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
  }

  fetchData();
}, []);


const postState = async (state) => {

  axios.post('http://localhost:3000/forms', {
    id: state.id,
    color: state.color,
    timeSpent: state.timeSpent,
    username: state.username,
    review: state.review,
    email: state.email,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const deleteState = async (id) => {
  axios.delete(`http://localhost:3000/forms/${id}`)
  .then((response) => {
    // Handle success response
    console.log('Deleted successfully:', response.data);
  })
  .catch((error) => {
    // Handle error
    console.error('Error deleting resource:', error);
  });
}



  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {
          <AnswersList answersList={answersList} setAnswersList={setAnswersList} setState={setState} deleteState={deleteState}/>
        }
      </section>
      <section className="survey__form">{
        <Form setAnswersList= {setAnswersList} answersList={answersList} state={state} setState={setState} postState={postState} />
      }</section>
    </main>
  );
}

export default Survey;
