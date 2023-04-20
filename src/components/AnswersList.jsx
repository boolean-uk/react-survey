import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList, updateForm}) {

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem updateForm={updateForm} answerItem={answerItem} key={answerItem.id} />
      ))}
    </ul>
  );
}
