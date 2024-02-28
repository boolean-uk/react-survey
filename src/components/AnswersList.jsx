import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
 // console.log("Inside AnswersList: ", props);

  const { answerData , editForm, deleteForm } = props;

  return (
    <ul>
      {answerData.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editForm={editForm} deleteForm={deleteForm} key={i} />
      ))}
    </ul>
  );
}
