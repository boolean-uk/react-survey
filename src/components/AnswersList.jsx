import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
    const { answersList } = props
  return (
    <ul>
      {answersList.map((answerItem, i) => (
      <AnswersItem key={i} answerItem={answerItem} changeAnswer={e =>props.changeAnswer(answerItem)} deleteAnswer={e=>props.deleteAnswer(answerItem)} submitted={props.submitted}/>
    ))}
    </ul>
  );
 } 
