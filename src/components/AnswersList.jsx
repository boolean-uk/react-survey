import AnswersItem from "./AnswersItem";

export const AnswersList = ({answers}) => {
  console.log("Inside AnswersList: ", answers);

  return (
    <ul>
      {answers.map((answerItem, id) => (
        <AnswersItem answerItem={answerItem} key={id} />
      ))}
    </ul>
  );
}
