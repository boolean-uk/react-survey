import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  //console.log("Inside AnswersList: ", props);

  const { answersList } = props;

  answersList.map((answerItem) => console.log(answerItem))

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}