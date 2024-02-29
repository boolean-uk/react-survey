import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  return (
    <ul>
      {props.submittedData.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} handleEdit={props.handleEdit} handleDelete={props.handleDelete} key={i} />
      ))}
    </ul>
  );
}
