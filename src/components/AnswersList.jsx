/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList}) {

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
