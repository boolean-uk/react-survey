import PropTypes from 'prop-types'

import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, setUserData, /* handleDelete */}) {

/*   console.log("Inside AnswersList: ", answersList); */

  return (
    <ul>
      {answersList.map((answerItem, id) => (
        <AnswersItem answerItem={answerItem} key={id} setUserData={setUserData} /* handleDelete={handleDelete} */ />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array,
  setUserData: PropTypes.func,
  /* handleDelete: PropTypes.func */
}
