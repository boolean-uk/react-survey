import AnswersItem from "./AnswersItem.jsx";

export default function AnswersList(props) {
  const { answersList, onEditClick, onDeleteClick} = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} index={i} onEditClick={onEditClick}  onDeleteClick={onDeleteClick} />
      ))}
    </ul>
  );
}
