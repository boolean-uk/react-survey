import AnswersItem from "./AnswersItem";

// This file is to render ALL of the answers!

export default function AnswersList(props) {
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
