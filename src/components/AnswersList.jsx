import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, onEdit } = props;

  return (
    <ul>
      {answersList.map((answersItem, index) => (
        <AnswersItem
          key={index}
          index={index}
          answerItem={answersItem}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
