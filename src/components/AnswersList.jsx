import AnswersItem from "./AnswersItem";
/* eslint react/prop-types:0 */
export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  
  const { answersList , EditAnswer,  DeleteAnswer} = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
     
        <AnswersItem answerItem={answerItem} EditAnswer = {EditAnswer} DeleteAnswer={DeleteAnswer} key={i} />
      ))}
    </ul>
  );
}