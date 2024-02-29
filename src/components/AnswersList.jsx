import PropTypes from 'prop-types'

import AnswersItem from "./AnswersItem";

export default function AnswersList({ answersList, setUserData}) {

/*   console.log("Inside AnswersList: ", answersList); */

  return (
    <ul>
      {answersList.map((answerItem, id) => (
        <AnswersItem answerItem={answerItem} key={id} setUserData={setUserData} />
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array,
  setUserData: PropTypes.func
}
