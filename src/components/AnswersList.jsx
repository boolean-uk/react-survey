/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList({handleEdit, answersList}) {
  console.log("Inside AnswersList: ", answersList);

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} handleEdit={handleEdit} />
      ))}
    </ul>
  );
}
