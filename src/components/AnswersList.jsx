import AnswersItem from "./AnswersItem";
/* eslint react/prop-types:0 */
export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  
  const { answersList , EditAnswer} = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
     
        <AnswersItem answerItem={answerItem} EditAnswer = {EditAnswer} key={i} />
      ))}
    </ul>
  );
}