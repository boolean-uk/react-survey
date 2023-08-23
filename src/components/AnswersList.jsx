import AnswersItem from "./AnswersItem";

export default function AnswersList({answersList, handleEdit}) {
  // console.log("Inside AnswersList: ", answersList);

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} handleEdit={() => handleEdit(i)} />
      ))}
    </ul>
  );
}
