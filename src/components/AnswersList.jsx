import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, setAnswers, setUserData, userData}) {
  console.log("Inside AnswersList: ", answers);


  return (
    <ul>
      {answers.map((answer, index) => (
        <AnswersItem key={index} index={index} answer={answer} setUserData={setUserData} userData={userData} setAnswers={setAnswers} answers={answers}/>
      ))}
    </ul>
  )
      }