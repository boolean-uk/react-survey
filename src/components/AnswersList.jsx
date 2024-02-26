import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList, handleEdit } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
      <div>
        <button onClick={(e) => handleEdit(e, answersList)}>Edit</button>
      </div>
    </ul>
  );
}
