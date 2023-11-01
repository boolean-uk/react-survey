import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answersItem, i) => (
        <AnswersItem 
        answersItem={answersItem} 
        key={i} 
        />
      ))}
    </ul>
  );
}
