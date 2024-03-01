import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";
export default function AnswersList(props) {
  const { answersList } = props;
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem id={i} answerItem={answerItem} key={i} onEdit={props.onEdit} />
      ))}
    </ul>
  );
}
AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired
};
