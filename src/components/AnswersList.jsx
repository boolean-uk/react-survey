import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, handleEditAnswer }) {
  return (
    (answersList.length > 0) &&
      <ul>
        {
          answersList.map((answerItem, i) => (
            <AnswersItem answerItem={answerItem} index={i} handleEditAnswer={handleEditAnswer} key={i} />
          ))
        }
      </ul>
  );
}
