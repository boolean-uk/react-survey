import PropTypes from "prop-types";
import AnswersItem from "./AnswersItem";

function AnswersList({ answersList }) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
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
};

export default AnswersList;
