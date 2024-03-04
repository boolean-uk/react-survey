import AnswersItem from "./AnswersItem";
import PropTypes from 'prop-types'

export default function AnswersList({ answersList, editSurvey }) {
  console.log("Inside AnswersList: ", answersList);


  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} editSurvey={editSurvey} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array.isRequired,
  editSurvey: PropTypes.func.isRequired
}
