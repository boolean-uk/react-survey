import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers }) {
  console.log("Inside AnswersList: ", answers);

  return (
    <ul>
      {answers.map((answer, index) => (
        <AnswersItem key={index} answer={answer} />
      ))}
    </ul>
  );
}
