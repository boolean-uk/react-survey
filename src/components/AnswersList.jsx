import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  // console.log("Inside AnswersList: ", props);

  const {answersList} = props;
  const {handleEditData} = props;
  const {handleDeleteData} = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem 
        answerItem={answerItem} 
        handleEditData={handleEditData} 
        handleDeleteData={handleDeleteData}
        key={i} />
      ))}
    </ul>
  );
}
