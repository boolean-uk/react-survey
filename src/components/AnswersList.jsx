import PropTypes from "prop-types";
import AnswersItem from "./AnswersItem";

function AnswersList({answersList}) {
  return (
    <>
      <h2 class="module_header">Reviews</h2>
      <ul>
        {answersList.map((answerItem, i) => (
          <AnswersItem answerItem={answerItem} key={i} />
        ))}
      </ul>
    </>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired
}

export default AnswersList;
