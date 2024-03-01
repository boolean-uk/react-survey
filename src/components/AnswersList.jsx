import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {

  const { answerData, editForm, deleteForm } = props;

  return (
    <ul>
      {answerData.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editForm={editForm} deleteForm={deleteForm} key={i} index={i} />
      ))}
    </ul>
  );
}