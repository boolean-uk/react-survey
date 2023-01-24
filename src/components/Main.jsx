import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

const initalInfo = {
  color: '',
  spendTime: [],
  review: '',
  username: '',
  email: '',
}

function Main() {

  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setanswersList] = useState([])
  const [formInfo, setformInfo] = useState(initalInfo)
  const [isEditing, setisEditing] = useState(false)
  const [editIndex, seteditIndex] = useState()

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
          answersList={answersList}
          setformInfo={setformInfo}
          initalInfo={initalInfo}
          isEditing={isEditing}
          setisEditing={setisEditing}
          seteditIndex={seteditIndex}/>
      </section>
      <section className="main__form">
        <Form 
          initalInfo={initalInfo}
          formInfo={formInfo}
          setformInfo={setformInfo}
          answersList={answersList} 
          setanswersList={setanswersList}
          isEditing={isEditing}
          setisEditing={setisEditing}
          editIndex={editIndex}/>
      </section>
    </main>
  );
}

export default Main;
