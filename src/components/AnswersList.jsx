import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList }) {
  // console.log("Inside AnswersList: ", props);

  // const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
