import AnswersItem from "./AnswersItem";

export default function AnswersList( properties ) {
  console.log("Inside AnswersList: ", properties.answers);


  return (
    <ul>
      {properties.answers.map((answer, index) => (
        <AnswersItem key={index} index={index} answer={answer} setUserData={properties.setUserData} userData={properties.userData} setAnswers={properties.setAnswers} answers={properties.answers}/>
      ))}
    </ul>
  )
      }