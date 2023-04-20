import AnswersItem from "./AnswersItem";

export default function AnswersList({answers}) {
  console.log("Inside AnswersList: ", answers);

  const {answersList} = answers;

  return (
    <ul>
      {answers.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
