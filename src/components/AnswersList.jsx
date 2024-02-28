import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList(props) {
  const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem key={i} id={i} answerItem={answerItem} editAnswer={props.editAnswer} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired,
  editAnswer: PropTypes.func.isRequired
}
