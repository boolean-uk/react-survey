import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";
export default function AnswersList(props) {
const { answersList } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired,
};
