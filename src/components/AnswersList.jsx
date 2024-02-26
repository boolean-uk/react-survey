import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList({ answers }) {
  return (
    <ul>
      {answers.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
};
