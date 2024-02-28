import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList(props) {
  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem key={i} id={i} answerItem={answerItem} editAnswer={props.editAnswer} deleteAnswer={props.deleteAnswer} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired,
  editAnswer: PropTypes.func.isRequired,
  deleteAnswer: PropTypes.func.isRequired
}
