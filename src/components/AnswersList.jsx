import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, onEdit }) {
  return (
    <ul>
      {answers && answers.length > 0 ? (
        answers.map((answer, i) => (
          <AnswersItem answerItem={answer} key={i} onEdit={onEdit} />
        ))
      ) : (
        <p>No answers available</p>
      )}
    </ul>
  );
}
