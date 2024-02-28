import AnswersItem from "./AnswersItem";
import PropTypes from 'prop-types'

export default function AnswersList({answersList, setEditValue}) {
  // console.log("Inside AnswersList: ", props);

  // const { answersList } = props;
  // console.log( answersList )
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} keyValue={i} setEditValue={setEditValue}/>
      ))}
    </ul>
  );
}

AnswersList.propTypes = {
  answersList: PropTypes.array,
  setEditValue: PropTypes.func
}