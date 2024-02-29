import AnswersItem from "./AnswersItem";


export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props.answer);

  const answersList = props.answer

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
