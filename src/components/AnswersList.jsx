import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, setFormData, deleteItem }) {
  // console.log("Inside AnswersList: ", answersList);
  // console.log("Inside setFormData: ", setFormData);
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          setFormData={setFormData}
          deleteItem={deleteItem}
          key={i}
        />
      ))}
    </ul>
  );
}
