import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types"

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, handleEditClick } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem 
          answerItem={answerItem} 
          key={i} 
          handleEditClick={() => handleEditClick(i)}/>
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array,
  handleEditClick: PropTypes.func,
}
