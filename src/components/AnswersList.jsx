import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList }) {
  return (
    (answersList.length > 0) &&
      <ul>
        {
          answersList.map((answerItem, i) => (
            <AnswersItem answerItem={answerItem} key={i} />
          ))
        }
      </ul>
  );
}
