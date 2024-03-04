import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList, handleEditClick, handleDeleteClick} = props;

  return (
    <ul>
      {answersList.length !== 0 ? answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} handleEditClick={() => handleEditClick(i)} handleDeleteClick={()=> handleDeleteClick(i)}/>
      )) : null}
    </ul>
  );
}
