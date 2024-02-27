import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {

  const { answersList , EditAnswer, DeleteAnswer} = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} EditAnswer = {EditAnswer} DeleteAnswer={DeleteAnswer} key={i} />
      ))}
    </ul>
  );
}
