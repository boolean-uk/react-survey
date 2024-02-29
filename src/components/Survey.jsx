import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [listUserData, setListUserData] = useState({ data: [] });
  const [currentIndex, setCurrentIndex] = useState(1);
  const [userData, setUserData] = useState({
    index: currentIndex,
    firstLine: [],
    secondLine: [],
    thirdLine: 0,
    fourthLine: 0,
    fifthLine: 0,
    sixthLine: [],
    seventhLine: "",
    eighthLine: "",
    ninthLine: "",
  });

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={listUserData.data} editList={setUserData} />
      </section>
      <section className="survey__form">
        {" "}
        <Form
          userData={userData}
          setUserData={setUserData}
          listUserData={listUserData}
          setListUserData={setListUserData}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </section>
    </main>
  );
}

export default Survey;
