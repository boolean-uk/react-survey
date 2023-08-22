import AnswersItem from "./AnswersItem.jsx";

export default function AnswersList(props) {
  const { answersList, onEditClick } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} index={i} onEditClick={onEditClick}/>
      ))}
    </ul>
  );
}
