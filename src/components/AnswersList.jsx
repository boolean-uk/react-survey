import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList}) {
  return (
    <ul>
      {answersList.map((answerItem, i) => {
        return <AnswersItem answerItem={answerItem} key={i} />
      })}
    </ul>
  );
}
