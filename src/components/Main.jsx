import { useEffect, useState } from "react";

import Form from "./Form";
import AnswersList from "./AnswersList";
import axios from "axios";

function Main() {
  const api = axios.create({ baseURL: "http://localhost:3030/answers" });
  const [open, setOpen] = useState(false); //Ignore this state

  const defaultData = {
    timeSpent: [],
    colour: null,
    review: "",
    username: "",
    email: "",
  };
  useEffect(() => {
    api
      .get()
      .then((res) => setAnswers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [userData, setUserData] = useState(defaultData);

  const [answers, setAnswers] = useState([]);

  const [edit, setEdit] = useState(-1);

  const handleEditButton = (answerItem) => {
    const index = answers.indexOf(answerItem);
    setUserData(answerItem);
    setEdit(index);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    // *console.table(userData);
    setAnswers([...answers, userData]);
    api
      .post("", userData)
      .then()
      .catch((err) => console.log(err));
    setUserData(defaultData);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    api.put(`/${edit + 1}/`, userData);
    setAnswers(
      answers.map((answer, i) => {
        if (i === edit) return userData;
        return answer;
      })
    );

    setUserData(defaultData);
    setEdit(-1);
  };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList answers={answers} handleEditButton={handleEditButton} />
      </section>
      <section className="main__form">
        {/* a form should be here */}
        <Form
          handleSumbit={edit === -1 ? handleSumbit : handleEdit}
          userData={userData}
          setUserData={setUserData}
        />
      </section>
    </main>
  );
}

export default Main;
