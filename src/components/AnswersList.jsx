import AnswersItem from "./AnswersItem";
import PropTypes from 'prop-types'

export default function AnswersList(props) {

  const {answersList, handleEdit} = props

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} i ={i} handleEdit={() => handleEdit(i)}/>
      ))}
    </ul>
  );
}
AnswersList.propTypes = {
  answersList: PropTypes.array,
  handleEdit : PropTypes.func
};