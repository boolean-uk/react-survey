import PropTypes from "prop-types";
import AnswersItem from "./AnswersItem";

function AnswersList({ answersList, onDelete, onEdit }) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      colour: PropTypes.string,
      timeSpent: PropTypes.arrayOf(PropTypes.string),
      review: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AnswersList;
