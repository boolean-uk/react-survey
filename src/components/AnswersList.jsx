import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, handleEditButton }) {
  return (
    <ul>
      {answers.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} handleEditButton={handleEditButton} />
      ))}
    </ul>
  );
}
