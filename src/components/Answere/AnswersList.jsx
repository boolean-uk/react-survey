/* eslint-disable react/prop-types */
import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, setForm, highlightedItemId, handleDelete }) {
  const handleClick = (answerItem) => {
    setForm(answerItem);
  };

  return (
    <>
      <h2>Answers list</h2>
      {answersList.map((answerItem, i) => (
        <div key={i} onClick={() => handleClick(answerItem)}>
          <AnswersItem answerItem={answerItem} highlighted={answerItem.id === highlightedItemId} handleDelete={handleDelete} />
        </div>
      ))}
    </>
  );
}
