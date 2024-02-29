import PropTypes from 'prop-types';

import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

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
  answersList: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      colour: PropTypes.number,
      timeSpent: PropTypes.arrayOf(PropTypes.string),
      review: PropTypes.string,
    })
  )
}