import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
 // console.log("Inside AnswersList: ", props);

  const { answersList, setCurrentlyEditing, deleteAnswer } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          setCurrentlyEditing={setCurrentlyEditing}
          deleteAnswer = {deleteAnswer}
          index={i}
          key={i}
        />
      ))}
    </ul>
  );
}
