import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  return (
    <ul>
      {props.submittedData.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} onEdit={props.onEdit} key={i} />
      ))}
    </ul>
  );
}
