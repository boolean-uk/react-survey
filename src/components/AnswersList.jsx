/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  // eslint-disable-next-line react/prop-types
  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
