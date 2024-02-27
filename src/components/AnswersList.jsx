import PropTypes from 'prop-types';

import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  const { answersList, setEdit, deleteFromDb } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
          <AnswersItem deleteAnswer={() => deleteFromDb(answerItem.id)} setEdit={setEdit} answerItem={answerItem} key={i} i={i} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.arrayOf(PropTypes.object),
  setEdit: PropTypes.func,
  deleteFromDb: PropTypes.func,
};