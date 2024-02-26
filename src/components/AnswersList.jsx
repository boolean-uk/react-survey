import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  //console.log("Inside AnswersList: ", props);

  const { answerData, editForm } = props;
  //console.log("Inside AnswersList 2: ", answerData);

  return (
    <ul>
      {answerData.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} editForm={editForm} key={i} index={i} />
      ))}
    </ul>
  );
}