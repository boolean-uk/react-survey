import Answer from "./Answer"
import PropTypes from 'prop-types'

export default function Answers({ answers, setAnswer, setEdit }) {

  return (
    <ul>
      {answers.map((answer, i) => (
        <Answer
          key={i}
          answer={answer}
          setAnswer={setAnswer}
          setEdit={setEdit}
        />
      ))}
    </ul>
  );
}
Answers.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      colour: PropTypes.string,
      spendTime: PropTypes.arrayOf(PropTypes.string),
      review: PropTypes.string,
    })
  ),
  setAnswer: PropTypes.func,
  setEdit: PropTypes.func,

}
