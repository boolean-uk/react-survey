import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {

  const { answersList, isEditPressed } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          isEditPressed={isEditPressed}
        />
        
      ))}
    </ul>
  );
}