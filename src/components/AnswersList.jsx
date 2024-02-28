import AnswersItem from "./AnswersItem";

function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList } = props;
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

export default AnswersList;
