import AnswersItem from "./AnswersItem";

function AnswersList ({answers, handleEditAnswer}) {

  // console.log("Inside AnswersList: ", answers);

  return (
    <ul>
      {answers.map((answerItem, i) => (
        <AnswersItem 
        answerItem={answerItem}
        key={i}
        handleEditAnswer={handleEditAnswer} />
      ))}
    </ul>
  );
}

export default AnswersList

