import AnswersItem from "./AnswersItem";
import PropTypes from "prop-types";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, onEditClick } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          onEditClick={onEditClick}
        />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.arrayOf(),
  onEditClick: PropTypes.func,
};
