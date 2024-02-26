import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {

  const { answersList , EditAnswer} = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} EditAnswer = {EditAnswer} key={i} />
      ))}
    </ul>
  );
}
