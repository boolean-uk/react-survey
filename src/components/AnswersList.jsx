import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList(props) {
  const { answersList } = props;

  return answersList.length > 0 ? (
    <ul>
      {answersList.map((answer, index) => (
        <AnswersItem key={index} answer={answer} editList={props.editList} />
      ))}
    </ul>
  ) : (
    <p>No answers yet</p>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired,
  editList: PropTypes.func.isRequired,
};
