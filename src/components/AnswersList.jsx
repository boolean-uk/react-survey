import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList, editAnswer, deleteAnswer } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editAnswer={editAnswer} deleteAnswer={deleteAnswer} key={i} />
      ))}
    </ul>
  );
}
