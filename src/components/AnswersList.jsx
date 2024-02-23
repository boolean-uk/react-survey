import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, setEditForm }) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          onClick={() => setEditForm(answerItem)}
        />
      ))}
    </ul>
  );
}
