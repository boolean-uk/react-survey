import AnswersItem from "./AnswersItem";

function AnswersList(props) {
  console.log("Inside AnswersList: ", props.answersState);
  const list = props.answersState;
  return (
    <ul>
      {list.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
export default AnswersList;
